/**
 * PrefixSpan (Prefix-projected Sequential Pattern Mining)
 * Efficient algorithm for finding frequent sequential patterns in sequence databases
 */

export class PrefixSpanMiner {
  /**
   * @param {Array} sequences - Array of sequence objects { sid: string, events: [{item, timestamp, desc}] }
   * @param {Object} options - { minSupport: 0.4, maxPatternLength: 5, maxGap: Infinity }
   */
  constructor(sequences, options = {}) {
    this.sequences = sequences;
    this.minSupport = options.minSupport || 0.4;
    this.maxPatternLength = options.maxPatternLength || 5;
    this.maxGap = options.maxGap || Infinity;
    this.totalSequences = sequences.length;
    this.minSupportCount = Math.ceil(this.minSupport * this.totalSequences);
    this.patterns = [];
  }

  /**
   * Run the mining process
   * @returns {Array} Array of mined frequent sequential patterns with stats
   */
  mine() {
    this.patterns = [];
    const formattedDB = this.sequences.map(seq => ({
      sid: seq.sid,
      items: seq.events.map(e => ({ item: e.item, time: e.timestamp, desc: e.desc }))
    }));

    // Find all frequent 1-item sequences first
    const itemCounts = new Map();
    formattedDB.forEach(seq => {
      const uniqueItems = new Set(seq.items.map(e => e.item));
      uniqueItems.forEach(item => {
        itemCounts.set(item, (itemCounts.get(item) || 0) + 1);
      });
    });

    const frequent1Items = [];
    for (const [item, count] of itemCounts.entries()) {
      if (count >= this.minSupportCount) {
        frequent1Items.push(item);
      }
    }

    // Sort items by support descending
    frequent1Items.sort((a, b) => (itemCounts.get(b) || 0) - (itemCounts.get(a) || 0));

    // Recursively project databases for each frequent item prefix
    for (const item of frequent1Items) {
      const prefix = [item];
      const projectedDB = this._projectDatabase(formattedDB, item);
      const supportCount = itemCounts.get(item);
      
      this.patterns.push({
        sequence: prefix,
        supportCount,
        support: supportCount / this.totalSequences,
        length: 1,
        matchingSids: this._getMatchingSids(formattedDB, prefix)
      });

      this._prefixSpanRecursive(prefix, projectedDB);
    }

    // Sort all discovered patterns by length and support
    return this.patterns.sort((a, b) => {
      if (b.sequence.length !== a.sequence.length) {
        return b.sequence.length - a.sequence.length;
      }
      return b.support - a.support;
    });
  }

  _prefixSpanRecursive(prefix, projectedDB) {
    if (prefix.length >= this.maxPatternLength || projectedDB.length < this.minSupportCount) {
      return;
    }

    // Find candidate items that appear after prefix in the projected database
    const itemOccurrences = new Map();

    projectedDB.forEach(projSeq => {
      const seenInSeq = new Set();
      projSeq.items.forEach(e => {
        if (!seenInSeq.has(e.item)) {
          seenInSeq.add(e.item);
          itemOccurrences.set(e.item, (itemOccurrences.get(e.item) || 0) + 1);
        }
      });
    });

    for (const [nextItem, count] of itemOccurrences.entries()) {
      if (count >= this.minSupportCount) {
        const newPrefix = [...prefix, nextItem];
        const newProjectedDB = this._projectDatabase(projectedDB, nextItem);

        this.patterns.push({
          sequence: newPrefix,
          supportCount: count,
          support: count / this.totalSequences,
          length: newPrefix.length,
          matchingSids: this._getMatchingSids(this.sequences.map(s => ({
            sid: s.sid,
            items: s.events.map(e => ({ item: e.item, time: e.timestamp }))
          })), newPrefix)
        });

        this._prefixSpanRecursive(newPrefix, newProjectedDB);
      }
    }
  }

  _projectDatabase(db, targetItem) {
    const projected = [];

    for (const seq of db) {
      const idx = seq.items.findIndex(e => e.item === targetItem);
      if (idx !== -1 && idx < seq.items.length - 1) {
        const targetTime = seq.items[idx].time;
        // Keep suffix where time gap is <= maxGap
        const suffixItems = seq.items.slice(idx + 1).filter(e => {
          return (e.time - targetTime) <= this.maxGap;
        });

        if (suffixItems.length > 0) {
          projected.push({
            sid: seq.sid,
            items: suffixItems
          });
        }
      }
    }

    return projected;
  }

  _getMatchingSids(db, sequence) {
    const sids = [];
    db.forEach(seq => {
      let seqIdx = 0;
      let lastTime = -Infinity;
      for (const event of seq.items) {
        if (event.item === sequence[seqIdx] && (event.time - lastTime <= this.maxGap)) {
          lastTime = event.time;
          seqIdx++;
          if (seqIdx === sequence.length) {
            sids.push(seq.sid);
            break;
          }
        }
      }
    });
    return sids;
  }
}
