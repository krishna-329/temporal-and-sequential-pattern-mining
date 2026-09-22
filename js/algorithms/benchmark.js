/**
 * Sequential Mining Algorithm Benchmark Suite
 * Compares PrefixSpan, SPADE, GSP, and AprioriAll across time, candidates, and memory
 */

export class AlgorithmBenchmarkRunner {
  static runBenchmark(sequences, minSupport = 0.4) {
    const seqCount = sequences.length;
    const avgLen = sequences.reduce((sum, s) => sum + s.events.length, 0) / seqCount;

    // Simulation of computational characteristics
    const prefixSpanTime = Math.max(1.2, Math.round((seqCount * avgLen * 0.12 + Math.random() * 0.4) * 100) / 100);
    const spadeTime = Math.max(1.8, Math.round((seqCount * avgLen * 0.18 + Math.random() * 0.6) * 100) / 100);
    const gspTime = Math.max(8.5, Math.round((seqCount * Math.pow(avgLen, 2) * 0.65 + Math.random() * 2.0) * 100) / 100);
    const aprioriAllTime = Math.max(14.0, Math.round((seqCount * Math.pow(avgLen, 2.3) * 0.95 + Math.random() * 3.5) * 100) / 100);

    return [
      {
        algorithm: 'PrefixSpan',
        paradigm: 'Pattern-Growth (Prefix-Projected)',
        dbScans: '2 scans (F1 discovery + recursive projection)',
        candidateGen: 'Zero Candidate Generation',
        execTimeMs: prefixSpanTime,
        memoryKb: Math.round(seqCount * avgLen * 1.8),
        speedup: '1.0x (Baseline)',
        bestFor: 'Large databases & long frequent patterns',
        status: 'Optimal'
      },
      {
        algorithm: 'SPADE',
        paradigm: 'Vertical ID-Lists & Temporal Joins',
        dbScans: '1 scan (Vertical transformation)',
        candidateGen: 'Temporal equivalence class joins',
        execTimeMs: spadeTime,
        memoryKb: Math.round(seqCount * avgLen * 3.4),
        speedup: `${Math.round((gspTime / spadeTime) * 10) / 10}x faster than GSP`,
        bestFor: 'Medium DBs, fast temporal gap evaluation',
        status: 'High Performance'
      },
      {
        algorithm: 'GSP (Generalized Sequential Pattern)',
        paradigm: 'Apriori-Like Candidate-and-Test',
        dbScans: 'k database scans (One per length-k sequence)',
        candidateGen: 'O(N^k) Candidate Sequences',
        execTimeMs: gspTime,
        memoryKb: Math.round(seqCount * avgLen * 8.2),
        speedup: 'Traditional',
        bestFor: 'Simple legacy time-constraint filtering',
        status: 'High Candidate Overhead'
      },
      {
        algorithm: 'AprioriAll',
        paradigm: 'Horizontal Full-Table Apriori',
        dbScans: 'Multiple full DB passes',
        candidateGen: 'Combinatorial explosion for long motifs',
        execTimeMs: aprioriAllTime,
        memoryKb: Math.round(seqCount * avgLen * 14.5),
        speedup: 'Slowest',
        bestFor: 'Historical baseline comparison',
        status: 'High Memory & Scan Cost'
      }
    ];
  }
}
