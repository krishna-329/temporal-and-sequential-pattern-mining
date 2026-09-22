/**
 * SPADE (Sequential PAttern Discovery using Equivalence classes)
 * Vertical ID-list database format with temporal joins
 */

export class SpadeMiner {
  constructor(sequences, options = {}) {
    this.sequences = sequences;
    this.minSupport = options.minSupport || 0.4;
    this.maxPatternLength = options.maxPatternLength || 5;
    this.maxGap = options.maxGap || Infinity;
    this.totalSequences = sequences.length;
    this.minSupportCount = Math.ceil(this.minSupport * this.totalSequences);
    this.patterns = [];
  }

  mine() {
    this.patterns = [];
    
    // Step 1: Construct vertical database with Id-Lists: Map<item, Array<{sid, eid, time}>>
    const verticalDB = new Map();

    this.sequences.forEach((seq) => {
      seq.events.forEach((e, idx) => {
        if (!verticalDB.has(e.item)) {
          verticalDB.set(e.item, []);
        }
        verticalDB.get(e.item).push({
          sid: seq.sid,
          eid: idx,
          time: e.timestamp
        });
      });
    });

    // Step 2: Extract frequent 1-sequences
    const f1 = new Map();
    for (const [item, idList] of verticalDB.entries()) {
      const distinctSids = new Set(idList.map(entry => entry.sid));
      if (distinctSids.size >= this.minSupportCount) {
        f1.set(item, {
          idList,
          supportCount: distinctSids.size,
          support: distinctSids.size / this.totalSequences,
          matchingSids: Array.from(distinctSids)
        });

        this.patterns.push({
          sequence: [item],
          supportCount: distinctSids.size,
          support: distinctSids.size / this.totalSequences,
          length: 1,
          matchingSids: Array.from(distinctSids)
        });
      }
    }

    // Step 3: Generate 2-sequences by temporal joins
    const f2 = [];
    const f1Keys = Array.from(f1.keys());

    for (let i = 0; i < f1Keys.length; i++) {
      for (let j = 0; j < f1Keys.length; j++) {
        const itemA = f1Keys[i];
        const itemB = f1Keys[j];
        
        const joinedIdList = this._temporalJoin(f1.get(itemA).idList, f1.get(itemB).idList);
        const distinctSids = new Set(joinedIdList.map(e => e.sid));
        
        if (distinctSids.size >= this.minSupportCount) {
          const pattern = {
            sequence: [itemA, itemB],
            idList: joinedIdList,
            supportCount: distinctSids.size,
            support: distinctSids.size / this.totalSequences,
            length: 2,
            matchingSids: Array.from(distinctSids)
          };
          f2.push(pattern);
          this.patterns.push({
            sequence: pattern.sequence,
            supportCount: pattern.supportCount,
            support: pattern.support,
            length: 2,
            matchingSids: pattern.matchingSids
          });
        }
      }
    }

    // Step 4: Recursive k-sequence generation
    if (this.maxPatternLength > 2) {
      this._generateKSequences(f2, 3);
    }

    return this.patterns.sort((a, b) => {
      if (b.sequence.length !== a.sequence.length) {
        return b.sequence.length - a.sequence.length;
      }
      return b.support - a.support;
    });
  }

  _temporalJoin(idListA, idListB) {
    const result = [];
    // Map entries in idListB by sid for faster join
    const bBySid = new Map();
    idListB.forEach(entry => {
      if (!bBySid.has(entry.sid)) bBySid.set(entry.sid, []);
      bBySid.get(entry.sid).push(entry);
    });

    idListA.forEach(entryA => {
      const candidates = bBySid.get(entryA.sid);
      if (candidates) {
        candidates.forEach(entryB => {
          if (entryB.eid > entryA.eid && (entryB.time - entryA.time <= this.maxGap)) {
            result.push({
              sid: entryA.sid,
              eid: entryB.eid,
              time: entryB.time
            });
          }
        });
      }
    });

    return result;
  }

  _generateKSequences(candidates, k) {
    if (k > this.maxPatternLength || candidates.length === 0) return;

    const nextCandidates = [];
    for (let i = 0; i < candidates.length; i++) {
      for (let j = 0; j < candidates.length; j++) {
        const c1 = candidates[i];
        const c2 = candidates[j];

        // Check prefix equivalence class (first k-2 elements match)
        let prefixMatch = true;
        for (let p = 0; p < k - 2; p++) {
          if (c1.sequence[p + 1] !== c2.sequence[p]) {
            prefixMatch = false;
            break;
          }
        }

        if (prefixMatch) {
          const newSeq = [...c1.sequence, c2.sequence[c2.sequence.length - 1]];
          const joinedIdList = this._temporalJoin(c1.idList, c2.idList);
          const distinctSids = new Set(joinedIdList.map(e => e.sid));

          if (distinctSids.size >= this.minSupportCount) {
            const pattern = {
              sequence: newSeq,
              idList: joinedIdList,
              supportCount: distinctSids.size,
              support: distinctSids.size / this.totalSequences,
              length: k,
              matchingSids: Array.from(distinctSids)
            };
            nextCandidates.push(pattern);
            this.patterns.push({
              sequence: pattern.sequence,
              supportCount: pattern.supportCount,
              support: pattern.support,
              length: k,
              matchingSids: pattern.matchingSids
            });
          }
        }
      }
    }

    this._generateKSequences(nextCandidates, k + 1);
  }
}
