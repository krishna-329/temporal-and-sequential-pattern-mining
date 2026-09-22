/**
 * Sequential Rule Mining Engine
 * Derives temporal predictive rules X => Y with Confidence, Support, Lift, and Lag distribution
 */

export class SequentialRuleMiner {
  /**
   * @param {Array} frequentPatterns - Mined patterns from PrefixSpan or SPADE
   * @param {Array} rawSequences - Raw sequences database for precise time-lag calculations
   * @param {Object} options - { minConfidence: 0.6, minLift: 1.0 }
   */
  constructor(frequentPatterns, rawSequences, options = {}) {
    this.patterns = frequentPatterns;
    this.rawSequences = rawSequences;
    this.minConfidence = options.minConfidence || 0.6;
    this.minLift = options.minLift || 1.0;
    this.rules = [];
  }

  generateRules() {
    this.rules = [];
    const patternMap = new Map();
    this.patterns.forEach(p => {
      patternMap.set(p.sequence.join('->'), p);
    });

    // We generate rules from patterns of length >= 2
    const multiItemPatterns = this.patterns.filter(p => p.sequence.length >= 2);

    for (const pattern of multiItemPatterns) {
      const seq = pattern.sequence;
      const totalSupport = pattern.support;
      const supportCount = pattern.supportCount;

      // Partition sequence into Antecedent (X) and Consequent (Y)
      for (let split = 1; split < seq.length; split++) {
        const antecedent = seq.slice(0, split);
        const consequent = seq.slice(split);

        const antecedentKey = antecedent.join('->');
        const consequentKey = consequent.join('->');

        const antPattern = patternMap.get(antecedentKey);
        const consPattern = patternMap.get(consequentKey);

        if (antPattern) {
          const antSupport = antPattern.support;
          const confidence = totalSupport / antSupport;
          const consSupport = consPattern ? consPattern.support : totalSupport;
          const lift = consSupport > 0 ? confidence / consSupport : 1;

          if (confidence >= this.minConfidence && lift >= this.minLift) {
            const timeLagStats = this._calculateTimeLagStats(antecedent, consequent);

            this.rules.push({
              antecedent,
              consequent,
              support: totalSupport,
              supportCount,
              confidence,
              lift,
              avgTimeLag: timeLagStats.avgLag,
              minTimeLag: timeLagStats.minLag,
              maxTimeLag: timeLagStats.maxLag,
              ruleString: `${antecedent.join(' → ')} ⟹ ${consequent.join(' → ')}`
            });
          }
        }
      }
    }

    // Sort by confidence descending, then lift
    return this.rules.sort((a, b) => b.confidence - a.confidence || b.lift - a.lift);
  }

  _calculateTimeLagStats(antecedent, consequent) {
    const lags = [];

    this.rawSequences.forEach(seq => {
      const events = seq.events;
      let antEndIdx = -1;
      let antEndTime = null;

      // Match antecedent
      let aIdx = 0;
      for (let i = 0; i < events.length; i++) {
        if (events[i].item === antecedent[aIdx]) {
          aIdx++;
          if (aIdx === antecedent.length) {
            antEndIdx = i;
            antEndTime = events[i].timestamp;
            break;
          }
        }
      }

      // Match consequent after antecedent
      if (antEndIdx !== -1) {
        let cIdx = 0;
        for (let j = antEndIdx + 1; j < events.length; j++) {
          if (events[j].item === consequent[cIdx]) {
            cIdx++;
            if (cIdx === consequent.length) {
              const consStartTime = events[j].timestamp;
              lags.push(Math.max(0, consStartTime - antEndTime));
              break;
            }
          }
        }
      }
    });

    if (lags.length === 0) {
      return { avgLag: 0, minLag: 0, maxLag: 0 };
    }

    const sum = lags.reduce((a, b) => a + b, 0);
    const avgLag = Math.round((sum / lags.length) * 10) / 10;
    const minLag = Math.min(...lags);
    const maxLag = Math.max(...lags);

    return { avgLag, minLag, maxLag };
  }
}
