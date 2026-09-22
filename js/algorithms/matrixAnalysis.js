/**
 * Temporal Matrix Analysis & Sequence Anomaly Scoring Engine
 */

export class SequenceMatrixAnalyzer {
  /**
   * Computes empirical transition probability matrix P(Event_j | Event_i)
   * @param {Array} sequences - Array of sequence objects
   * @param {Array} eventTypes - Array of distinct event definitions
   */
  static computeTransitionMatrix(sequences, eventTypes) {
    const eventIds = eventTypes.map(e => e.id);
    const counts = {};
    const rowTotals = {};

    eventIds.forEach(id1 => {
      counts[id1] = {};
      rowTotals[id1] = 0;
      eventIds.forEach(id2 => {
        counts[id1][id2] = 0;
      });
    });

    sequences.forEach(seq => {
      const events = seq.events;
      for (let i = 0; i < events.length - 1; i++) {
        const from = events[i].item;
        const to = events[i + 1].item;
        if (counts[from] && counts[from][to] !== undefined) {
          counts[from][to]++;
          rowTotals[from]++;
        }
      }
    });

    const matrix = [];
    eventIds.forEach(from => {
      const row = { from, transitions: {}, total: rowTotals[from] };
      eventIds.forEach(to => {
        const c = counts[from][to];
        const prob = rowTotals[from] > 0 ? c / rowTotals[from] : 0;
        row.transitions[to] = Math.round(prob * 100) / 100;
      });
      matrix.push(row);
    });

    return { eventIds, matrix };
  }

  /**
   * Computes the Anomaly Score for a candidate sequence based on Transition Log-Likelihood
   * Higher score => higher anomaly / unfamiliar trajectory
   * @param {Array} sequenceTokens - e.g. ['EHR_ADMIT', 'PROC_ECG', 'HIGH_VAL_WIRE']
   * @param {Object} transitionMatrixData - Output of computeTransitionMatrix
   */
  static calculateSequenceAnomalyScore(sequenceTokens, transitionMatrixData) {
    if (sequenceTokens.length < 2) return { score: 0, status: 'Normal', details: 'Insufficient length' };

    const { matrix } = transitionMatrixData;
    const matrixMap = new Map();
    matrix.forEach(row => matrixMap.set(row.from, row.transitions));

    let logLikelihood = 0;
    let minProbTransition = null;
    let minProb = 1.0;

    for (let i = 0; i < sequenceTokens.length - 1; i++) {
      const from = sequenceTokens[i];
      const to = sequenceTokens[i + 1];
      const row = matrixMap.get(from);
      const prob = row && row[to] !== undefined ? row[to] : 0.001;
      const smoothProb = Math.max(0.005, prob);

      logLikelihood += Math.log(smoothProb);

      if (prob < minProb) {
        minProb = prob;
        minProbTransition = `${from} ➔ ${to}`;
      }
    }

    // Normalize anomaly score 0 - 100
    const rawScore = -logLikelihood / (sequenceTokens.length - 1);
    const normalizedScore = Math.min(100, Math.max(5, Math.round(rawScore * 22)));

    let status = 'Normal Sequence';
    let badgeClass = 'badge-emerald';

    if (normalizedScore > 65) {
      status = '🚨 Critical Outlier / Zero-Day Cascade';
      badgeClass = 'badge-rose';
    } else if (normalizedScore > 35) {
      status = '⚠️ Moderately Deviant Trajectory';
      badgeClass = 'badge-amber';
    }

    return {
      score: normalizedScore,
      status,
      badgeClass,
      weakestLink: minProbTransition,
      weakestProb: Math.round(minProb * 100)
    };
  }
}
