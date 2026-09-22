/**
 * Temporal and Sequential Pattern Mining for Smart Systems - Main Application Orchestrator
 */

import { DOMAIN_DATASETS } from './data/domainDatasets.js';
import { PrefixSpanMiner } from './algorithms/prefixspan.js';
import { SpadeMiner } from './algorithms/spade.js';
import { SequentialRuleMiner } from './algorithms/ruleMiner.js';
import { FederatedGNNLab } from './algorithms/federated_gnn.js';
import { SequenceMatrixAnalyzer } from './algorithms/matrixAnalysis.js';
import { AlgorithmBenchmarkRunner } from './algorithms/benchmark.js';
import { ForceGraphRenderer } from './visualizations/graphRenderer.js';
import { SequenceFlowVisualizer } from './visualizations/sequenceFlow.js';

class SmartMiningApp {
  constructor() {
    this.currentDomainKey = 'healthcare';
    this.currentDataset = DOMAIN_DATASETS.healthcare;
    this.currentAlgorithm = 'prefixspan';
    this.minSupport = 0.4;
    this.maxPatternLength = 5;
    this.maxGap = 100;
    this.minConfidence = 0.6;
    this.minLift = 1.0;

    this.minedPatterns = [];
    this.minedRules = [];
    this.selectedPattern = null;
    this.transitionMatrixData = null;

    // Playground Workbench Sequence
    this.workbenchTokens = [];

    // Federated GNN Lab
    this.federatedLab = new FederatedGNNLab();
    this.graphRenderer = null;
    this.autoTrainingTimer = null;

    // Real-Time Simulator state
    this.streamInterval = null;
    this.streamActive = false;
    this.streamSequenceBuffer = [];

    this.init();
  }

  init() {
    this.bindNavigation();
    this.bindDomainPicker();
    this.bindMinerControls();
    this.bindFederatedLabControls();
    this.bindStreamSimulator();
    this.bindImporterExporter();
    this.bindPlaygroundWorkbench();
    this.bindBenchmarkSuite();
    this.initGraphVisualizer();

    // Initial run
    this.runMining();
    this.updateQuickMetrics();
  }

  // Navigation
  bindNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        navButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(tp => tp.classList.remove('active'));

        btn.classList.add('active');
        const activePane = document.getElementById(targetTab);
        if (activePane) activePane.classList.add('active');

        if (targetTab === 'tab-federated' && this.graphRenderer) {
          setTimeout(() => {
            this.graphRenderer.resize();
            this.graphRenderer.setData(this.federatedLab.getAllGraphData());
          }, 50);
        } else if (targetTab === 'tab-matrix') {
          this.renderTransitionMatrix();
        } else if (targetTab === 'tab-benchmark') {
          this.renderBenchmarkTable();
        }
      });
    });
  }

  // Domain Switcher
  bindDomainPicker() {
    const domainSelect = document.getElementById('domainSelect');
    if (!domainSelect) return;

    domainSelect.addEventListener('change', (e) => {
      this.currentDomainKey = e.target.value;
      this.currentDataset = DOMAIN_DATASETS[this.currentDomainKey];
      this.workbenchTokens = [];
      this.showToast(`Switched domain to ${this.currentDataset.name}`);
      this.updateDomainUI();
      this.runMining();
      this.renderPlaygroundPalette();
      this.updateWorkbenchUI();
    });
  }

  updateDomainUI() {
    const dTitle = document.getElementById('currentDomainTitle');
    const dDesc = document.getElementById('currentDomainDesc');
    const domainBadge = document.getElementById('currentDomainBadge');

    if (dTitle) dTitle.textContent = this.currentDataset.name;
    if (dDesc) dDesc.textContent = this.currentDataset.description;
    
    if (domainBadge) {
      domainBadge.textContent = this.currentDataset.badge;
      domainBadge.className = `badge ${this.currentDataset.badgeClass}`;
    }

    // Render sample raw sequence
    const sampleContainer = document.getElementById('rawSampleTimeline');
    if (sampleContainer && this.currentDataset.sampleSequences.length > 0) {
      const metaMap = {};
      this.currentDataset.eventTypes.forEach(t => metaMap[t.id] = t);
      SequenceFlowVisualizer.renderSequenceTimeline(sampleContainer, this.currentDataset.sampleSequences[0].events, metaMap);
    }
  }

  // Mining Controls
  bindMinerControls() {
    const algoSelect = document.getElementById('algoSelect');
    const minSupSlider = document.getElementById('minSupSlider');
    const minSupVal = document.getElementById('minSupVal');
    const maxLenSlider = document.getElementById('maxLenSlider');
    const maxLenVal = document.getElementById('maxLenVal');
    const maxGapInput = document.getElementById('maxGapInput');
    const minConfSlider = document.getElementById('minConfSlider');
    const minConfVal = document.getElementById('minConfVal');
    const runMiningBtn = document.getElementById('runMiningBtn');

    if (algoSelect) {
      algoSelect.addEventListener('change', (e) => {
        this.currentAlgorithm = e.target.value;
      });
    }

    if (minSupSlider) {
      minSupSlider.addEventListener('input', (e) => {
        this.minSupport = parseFloat(e.target.value);
        if (minSupVal) minSupVal.textContent = `${Math.round(this.minSupport * 100)}%`;
      });
    }

    if (maxLenSlider) {
      maxLenSlider.addEventListener('input', (e) => {
        this.maxPatternLength = parseInt(e.target.value, 10);
        if (maxLenVal) maxLenVal.textContent = `${this.maxPatternLength} items`;
      });
    }

    if (maxGapInput) {
      maxGapInput.addEventListener('change', (e) => {
        this.maxGap = parseInt(e.target.value, 10) || 100;
      });
    }

    if (minConfSlider) {
      minConfSlider.addEventListener('input', (e) => {
        this.minConfidence = parseFloat(e.target.value);
        if (minConfVal) minConfVal.textContent = `${Math.round(this.minConfidence * 100)}%`;
      });
    }

    if (runMiningBtn) {
      runMiningBtn.addEventListener('click', () => {
        this.runMining();
        this.showToast(`Mined ${this.minedPatterns.length} patterns with ${this.currentAlgorithm.toUpperCase()}`);
      });
    }
  }

  runMining() {
    const t0 = performance.now();
    const sequences = this.currentDataset.sampleSequences;

    const options = {
      minSupport: this.minSupport,
      maxPatternLength: this.maxPatternLength,
      maxGap: this.maxGap
    };

    if (this.currentAlgorithm === 'spade') {
      const miner = new SpadeMiner(sequences, options);
      this.minedPatterns = miner.mine();
    } else {
      const miner = new PrefixSpanMiner(sequences, options);
      this.minedPatterns = miner.mine();
    }

    const t1 = performance.now();
    const executionTimeMs = Math.round((t1 - t0) * 100) / 100;

    // Mine sequential rules
    const ruleMiner = new SequentialRuleMiner(this.minedPatterns, sequences, {
      minConfidence: this.minConfidence,
      minLift: this.minLift
    });
    this.minedRules = ruleMiner.generateRules();

    // Compute transition matrix
    this.transitionMatrixData = SequenceMatrixAnalyzer.computeTransitionMatrix(
      this.currentDataset.sampleSequences,
      this.currentDataset.eventTypes
    );

    this.renderPatternsList();
    this.renderRulesList();
    this.renderPrefixTreeVisualization();
    this.renderPlaygroundPalette();
    this.updateQuickMetrics(executionTimeMs);
    this.updateDomainUI();
  }

  renderPatternsList() {
    const listContainer = document.getElementById('patternsList');
    const countBadge = document.getElementById('patternsCountBadge');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    if (countBadge) countBadge.textContent = `${this.minedPatterns.length} Discovered`;

    if (this.minedPatterns.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center; padding: 2rem; color: var(--text-muted);">
          No frequent sequential patterns found with support &ge; ${Math.round(this.minSupport * 100)}%. Try lowering the Minimum Support threshold.
        </div>`;
      return;
    }

    const metaMap = {};
    this.currentDataset.eventTypes.forEach(t => metaMap[t.id] = t);

    this.minedPatterns.forEach((pat, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = `pattern-item ${idx === 0 ? 'selected' : ''}`;

      const header = document.createElement('div');
      header.className = 'pattern-item-header';

      const tokenWrap = document.createElement('div');
      tokenWrap.className = 'sequence-tokens';

      pat.sequence.forEach((tok, tIdx) => {
        const meta = metaMap[tok] || { label: tok, color: '#38bdf8' };
        const span = document.createElement('span');
        span.className = 'token';
        span.style.color = meta.color;
        span.textContent = meta.label || tok;
        tokenWrap.appendChild(span);

        if (tIdx < pat.sequence.length - 1) {
          const arr = document.createElement('span');
          arr.className = 'token-arrow';
          arr.innerHTML = '&#10140;';
          tokenWrap.appendChild(arr);
        }
      });

      const stats = document.createElement('div');
      stats.className = 'pattern-stats';
      stats.innerHTML = `
        <span>Supp: <strong>${Math.round(pat.support * 100)}%</strong> (${pat.supportCount}/${this.currentDataset.sampleSequences.length})</span>
        <span>Len: <strong>${pat.length}</strong></span>
      `;

      header.appendChild(tokenWrap);
      header.appendChild(stats);
      itemEl.appendChild(header);

      itemEl.addEventListener('click', () => {
        document.querySelectorAll('.pattern-item').forEach(el => el.classList.remove('selected'));
        itemEl.classList.add('selected');
        this.selectedPattern = pat;
        this.renderSelectedPatternDetails(pat);
      });

      listContainer.appendChild(itemEl);
    });

    if (this.minedPatterns.length > 0) {
      this.renderSelectedPatternDetails(this.minedPatterns[0]);
    }
  }

  renderSelectedPatternDetails(pattern) {
    const detailContainer = document.getElementById('selectedPatternDetails');
    if (!detailContainer) return;

    const metaMap = {};
    this.currentDataset.eventTypes.forEach(t => metaMap[t.id] = t);

    const matchingSids = pattern.matchingSids ? pattern.matchingSids.join(', ') : 'All active';

    detailContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
        <span style="font-size:0.85rem; font-weight:600; color:var(--text-primary)">Matched Sequences (SIDs):</span>
        <span class="badge badge-emerald">${matchingSids}</span>
      </div>
      <div style="font-size:0.75rem; color:var(--text-secondary); line-height:1.6;">
        This recurring sequential motif occurs with <strong>${Math.round(pattern.support * 100)}% frequency</strong> across the entire temporal database. In ${this.currentDataset.name}, observing this prefix strongly signals deterministic progression towards ${metaMap[pattern.sequence[pattern.sequence.length - 1]]?.label || 'consequent state'}.
      </div>
    `;
  }

  renderRulesList() {
    const tableBody = document.getElementById('rulesTableBody');
    const rulesCountBadge = document.getElementById('rulesCountBadge');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    if (rulesCountBadge) rulesCountBadge.textContent = `${this.minedRules.length} Rules`;

    if (this.minedRules.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding: 1.5rem;">No sequential rules generated. Lower minimum confidence to expand rule coverage.</td></tr>`;
      return;
    }

    this.minedRules.slice(0, 15).forEach(rule => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family:var(--font-mono); font-weight:600; color:var(--accent-cyan)">${rule.ruleString}</td>
        <td><span class="badge badge-cyan">${Math.round(rule.confidence * 100)}%</span></td>
        <td><strong>${Math.round(rule.support * 100)}%</strong></td>
        <td><span style="color:var(--accent-emerald)">${Math.round(rule.lift * 100) / 100}x</span></td>
        <td style="font-family:var(--font-mono); color:var(--text-secondary)">~${rule.avgTimeLag} ${this.currentDataset.sampleSequences[0]?.timeGapUnit || 'units'}</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  renderPrefixTreeVisualization() {
    const canvas = document.getElementById('prefixTreeCanvas');
    if (canvas && this.minedPatterns.length > 0) {
      SequenceFlowVisualizer.renderPrefixTree(canvas, this.minedPatterns);
    }
  }

  renderTransitionMatrix() {
    const container = document.getElementById('transitionMatrixContainer');
    if (container && this.transitionMatrixData) {
      const metaMap = {};
      this.currentDataset.eventTypes.forEach(t => metaMap[t.id] = t);
      SequenceFlowVisualizer.renderTransitionMatrixHeatmap(container, this.transitionMatrixData, metaMap);
    }
  }

  renderBenchmarkTable() {
    const container = document.getElementById('benchmarkTableBody');
    if (!container) return;

    container.innerHTML = '';
    const results = AlgorithmBenchmarkRunner.runBenchmark(this.currentDataset.sampleSequences, this.minSupport);

    results.forEach(res => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong style="color:var(--accent-cyan)">${res.algorithm}</strong><div style="font-size:0.7rem; color:var(--text-muted)">${res.paradigm}</div></td>
        <td><span class="badge ${res.algorithm === 'PrefixSpan' ? 'badge-emerald' : res.algorithm === 'SPADE' ? 'badge-cyan' : 'badge-amber'}">${res.execTimeMs} ms</span></td>
        <td style="font-family:var(--font-mono)">${res.memoryKb} KB</td>
        <td>${res.candidateGen}</td>
        <td>${res.dbScans}</td>
        <td><span style="color:var(--accent-emerald); font-weight:600">${res.speedup}</span></td>
      `;
      container.appendChild(tr);
    });
  }

  // Interactive Sequence Playground & Anomaly Detector
  bindPlaygroundWorkbench() {
    const clearBtn = document.getElementById('clearWorkbenchBtn');
    const analyzeBtn = document.getElementById('analyzeWorkbenchBtn');

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.workbenchTokens = [];
        this.updateWorkbenchUI();
      });
    }

    if (analyzeBtn) {
      analyzeBtn.addEventListener('click', () => {
        this.evaluateWorkbenchSequence();
      });
    }
  }

  renderPlaygroundPalette() {
    const palette = document.getElementById('eventPalette');
    if (!palette) return;

    palette.innerHTML = '';
    this.currentDataset.eventTypes.forEach(evt => {
      const chip = document.createElement('div');
      chip.className = 'event-palette-chip';
      chip.innerHTML = `<span style="width:8px; height:8px; border-radius:50%; background:${evt.color};"></span>${evt.label}`;
      chip.addEventListener('click', () => {
        if (this.workbenchTokens.length < 8) {
          this.workbenchTokens.push(evt.id);
          this.updateWorkbenchUI();
          this.evaluateWorkbenchSequence();
        } else {
          this.showToast('Max 8 events in workbench sequence.');
        }
      });
      palette.appendChild(chip);
    });
  }

  updateWorkbenchUI() {
    const wb = document.getElementById('sequenceWorkbench');
    if (!wb) return;

    wb.innerHTML = '';
    const metaMap = {};
    this.currentDataset.eventTypes.forEach(t => metaMap[t.id] = t);

    if (this.workbenchTokens.length === 0) {
      wb.innerHTML = `<span style="color:var(--text-muted); font-size:0.8rem;">Click event chips above to build a sequence path...</span>`;
      return;
    }

    this.workbenchTokens.forEach((id, idx) => {
      const meta = metaMap[id] || { label: id, color: '#38bdf8' };
      const chip = document.createElement('div');
      chip.className = 'token';
      chip.style.borderColor = meta.color;
      chip.style.color = meta.color;
      chip.innerHTML = `${meta.label} <span style="cursor:pointer; margin-left:4px; opacity:0.6;" title="Remove">✕</span>`;
      
      chip.querySelector('span').addEventListener('click', (e) => {
        e.stopPropagation();
        this.workbenchTokens.splice(idx, 1);
        this.updateWorkbenchUI();
        this.evaluateWorkbenchSequence();
      });

      wb.appendChild(chip);

      if (idx < this.workbenchTokens.length - 1) {
        const arr = document.createElement('span');
        arr.className = 'token-arrow';
        arr.innerHTML = '&#10140;';
        wb.appendChild(arr);
      }
    });
  }

  evaluateWorkbenchSequence() {
    if (this.workbenchTokens.length === 0) return;

    const resultBox = document.getElementById('workbenchResults');
    if (!resultBox) return;

    const anomaly = SequenceMatrixAnalyzer.calculateSequenceAnomalyScore(
      this.workbenchTokens,
      this.transitionMatrixData
    );

    // Find next-step predictions
    const predictions = [];
    this.minedRules.forEach(rule => {
      const ant = rule.antecedent;
      if (this.workbenchTokens.length >= ant.length) {
        const suffix = this.workbenchTokens.slice(-ant.length);
        if (suffix.every((val, idx) => val === ant[idx])) {
          predictions.push(rule);
        }
      }
    });

    const metaMap = {};
    this.currentDataset.eventTypes.forEach(t => metaMap[t.id] = t);

    resultBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <span style="font-size:0.85rem; font-weight:600;">Anomaly Risk Assessment:</span>
        <span class="badge ${anomaly.badgeClass}">${anomaly.status} (Score: ${anomaly.score}/100)</span>
      </div>

      <div style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.75rem;">
        ${anomaly.weakestLink ? `Weakest Observed Transition: <strong style="color:var(--accent-rose)">${anomaly.weakestLink}</strong> (Baseline Prob: ${anomaly.weakestProb}%)` : 'Normal transition structure observed.'}
      </div>

      <div style="font-size:0.8rem; font-weight:600; color:var(--accent-cyan); margin-bottom:0.4rem;">
        ⚡ Next-Event Predictions:
      </div>
      ${predictions.length > 0 ? `
        <div style="display:flex; flex-direction:column; gap:0.4rem;">
          ${predictions.map(p => `
            <div style="background:var(--bg-input); padding:0.5rem 0.75rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:0.75rem; display:flex; justify-content:space-between;">
              <span>Predicted Consequent: <strong>${p.consequent.map(c => metaMap[c]?.label || c).join(' → ')}</strong></span>
              <span style="color:var(--accent-emerald); font-weight:600">${Math.round(p.confidence * 100)}% Conf (~${p.avgTimeLag} units lag)</span>
            </div>
          `).join('')}
        </div>
      ` : `<div style="font-size:0.75rem; color:var(--text-muted)">No rule matches current prefix. Sequence path appears custom or unobserved.</div>`}
    `;
  }

  bindBenchmarkSuite() {
    const runBenchBtn = document.getElementById('runBenchmarkBtn');
    if (runBenchBtn) {
      runBenchBtn.addEventListener('click', () => {
        this.renderBenchmarkTable();
        this.showToast('Benchmark suite executed!');
      });
    }
  }

  updateQuickMetrics(executionTime = 2.4) {
    const m1 = document.getElementById('metricSequences');
    const m2 = document.getElementById('metricPatterns');
    const m3 = document.getElementById('metricRules');
    const m4 = document.getElementById('metricPrivacyEpsilon');

    if (m1) m1.textContent = this.currentDataset.sampleSequences.length;
    if (m2) m2.textContent = this.minedPatterns.length;
    if (m3) m3.textContent = this.minedRules.length;
    if (m4) m4.textContent = `ε = ${Math.round(this.federatedLab.privacySpentEpsilon * 100) / 100}`;
  }

  // Federated GNN & Community Detection Lab
  initGraphVisualizer() {
    const canvas = document.getElementById('forceGraphCanvas');
    if (canvas) {
      this.graphRenderer = new ForceGraphRenderer(canvas);
      this.graphRenderer.setData(this.federatedLab.getAllGraphData());
      this.renderClientCards();
    }
  }

  bindFederatedLabControls() {
    const stepFedBtn = document.getElementById('stepFedBtn');
    const autoFedBtn = document.getElementById('autoFedBtn');
    const resetFedBtn = document.getElementById('resetFedBtn');
    const dpNoiseSlider = document.getElementById('dpNoiseSlider');
    const dpNoiseVal = document.getElementById('dpNoiseVal');
    const dpToggle = document.getElementById('dpToggle');

    if (stepFedBtn) {
      stepFedBtn.addEventListener('click', async () => {
        stepFedBtn.disabled = true;
        stepFedBtn.textContent = 'Aggregating FedAvg...';

        const dpActive = dpToggle ? dpToggle.checked : true;
        const roundStats = await this.federatedLab.runCommunicationRound({ dpActive });
        
        if (this.graphRenderer) {
          this.graphRenderer.setData(this.federatedLab.getAllGraphData());
        }

        this.renderClientCards();
        this.updateFederatedMetrics(roundStats);

        stepFedBtn.disabled = false;
        stepFedBtn.textContent = '▶ Train 1 FedAvg Round';
        this.showToast(`Completed Federated Round ${roundStats.round} | Modularity Q = ${roundStats.modularity}`);
      });
    }

    if (autoFedBtn) {
      autoFedBtn.addEventListener('click', async () => {
        autoFedBtn.disabled = true;
        autoFedBtn.textContent = 'Training 5 Rounds...';
        const dpActive = dpToggle ? dpToggle.checked : true;

        for (let r = 0; r < 5; r++) {
          const stats = await this.federatedLab.runCommunicationRound({ dpActive });
          if (this.graphRenderer) this.graphRenderer.setData(this.federatedLab.getAllGraphData());
          this.renderClientCards();
          this.updateFederatedMetrics(stats);
          await new Promise(res => setTimeout(res, 400));
        }

        autoFedBtn.disabled = false;
        autoFedBtn.textContent = '⚡ Run 5 Rounds';
        this.showToast('5-Round Federated GNN convergence complete!');
      });
    }

    if (resetFedBtn) {
      resetFedBtn.addEventListener('click', () => {
        this.federatedLab.reset();
        if (this.graphRenderer) {
          this.graphRenderer.setData(this.federatedLab.getAllGraphData());
        }
        this.renderClientCards();
        this.updateFederatedMetrics({ round: 0, modularity: 0.28, epsilon: 0, avgLoss: 1.25 });
        this.showToast('Reset Federated GNN state');
      });
    }

    if (dpNoiseSlider) {
      dpNoiseSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.federatedLab.dpNoiseSigma = val;
        if (dpNoiseVal) dpNoiseVal.textContent = `σ = ${val.toFixed(2)}`;
      });
    }
  }

  renderClientCards() {
    const container = document.getElementById('clientCardsGrid');
    if (!container) return;

    container.innerHTML = '';
    const graphData = this.federatedLab.getAllGraphData();

    graphData.clients.forEach(c => {
      const card = document.createElement('div');
      card.className = `client-node-card ${c.status.includes('Training') ? 'training' : ''}`;

      card.innerHTML = `
        <div class="client-card-header">
          <div class="client-title">
            <span style="width:8px; height:8px; border-radius:50%; background:var(--accent-emerald);"></span>
            ${c.name}
          </div>
          <span class="badge badge-cyan">${c.nodeCount} Nodes</span>
        </div>
        <div class="client-metric-row">
          <span>Local GNN Loss:</span>
          <strong style="color:var(--accent-amber)">${c.loss}</strong>
        </div>
        <div class="client-metric-row">
          <span>Status:</span>
          <span style="color:var(--accent-cyan); font-size:0.7rem">${c.status}</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${Math.min(100, Math.max(15, (1 - c.loss / 2) * 100))}%"></div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  updateFederatedMetrics(stats) {
    const rEl = document.getElementById('fedRoundVal');
    const mEl = document.getElementById('fedModularityVal');
    const eEl = document.getElementById('fedEpsilonVal');
    const lEl = document.getElementById('fedLossVal');

    if (rEl) rEl.textContent = stats.round;
    if (mEl) mEl.textContent = stats.modularity;
    if (eEl) eEl.textContent = `ε = ${stats.epsilon}`;
    if (lEl) lEl.textContent = stats.avgLoss;

    this.updateQuickMetrics();
  }

  // Real-Time Event Stream Simulator
  bindStreamSimulator() {
    const toggleStreamBtn = document.getElementById('toggleStreamBtn');
    const clearFeedBtn = document.getElementById('clearFeedBtn');

    if (toggleStreamBtn) {
      toggleStreamBtn.addEventListener('click', () => {
        if (this.streamActive) {
          clearInterval(this.streamInterval);
          this.streamActive = false;
          toggleStreamBtn.textContent = '▶ Start Real-Time Stream';
          toggleStreamBtn.className = 'btn btn-primary';
          this.showToast('Stream paused');
        } else {
          this.streamActive = true;
          toggleStreamBtn.textContent = '⏸ Pause Stream';
          toggleStreamBtn.className = 'btn btn-secondary';
          this.startEventStream();
          this.showToast('Real-time event stream active');
        }
      });
    }

    if (clearFeedBtn) {
      clearFeedBtn.addEventListener('click', () => {
        const feed = document.getElementById('streamFeed');
        if (feed) feed.innerHTML = '';
        this.streamSequenceBuffer = [];
      });
    }
  }

  startEventStream() {
    const feed = document.getElementById('streamFeed');
    const activeStreamRule = document.getElementById('activeStreamRule');
    if (!feed) return;

    this.streamInterval = setInterval(() => {
      const eventTypes = this.currentDataset.eventTypes;
      const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const now = new Date().toLocaleTimeString();

      this.streamSequenceBuffer.push(randomEvent.id);
      if (this.streamSequenceBuffer.length > 8) this.streamSequenceBuffer.shift();

      // Check if buffer matches any predictive rule
      let matchedRule = null;
      for (const rule of this.minedRules) {
        const ant = rule.antecedent;
        if (this.streamSequenceBuffer.length >= ant.length) {
          const suffix = this.streamSequenceBuffer.slice(-ant.length);
          if (suffix.every((val, idx) => val === ant[idx])) {
            matchedRule = rule;
            break;
          }
        }
      }

      const item = document.createElement('div');
      item.className = `stream-event-item ${matchedRule ? 'prediction-alert' : ''}`;

      item.innerHTML = `
        <div>
          <span style="color:var(--text-muted); margin-right:6px;">[${now}]</span>
          <span style="color:${randomEvent.color}; font-weight:600">${randomEvent.label}</span>
          ${matchedRule ? `<div style="color:var(--accent-amber); font-size:0.7rem; margin-top:2px;">🚨 High-Confidence Predictive Trigger: ${matchedRule.ruleString} (${Math.round(matchedRule.confidence * 100)}% Conf)</div>` : ''}
        </div>
        <span class="badge ${matchedRule ? 'badge-amber' : 'badge-cyan'}">${randomEvent.id}</span>
      `;

      feed.insertBefore(item, feed.firstChild);

      if (feed.children.length > 30) {
        feed.removeChild(feed.lastChild);
      }

      if (matchedRule && activeStreamRule) {
        activeStreamRule.innerHTML = `
          <div style="padding:0.75rem; background:rgba(245, 158, 11, 0.1); border:1px solid var(--accent-amber); border-radius:var(--radius-md); font-size:0.75rem; color:var(--text-primary)">
            <strong>⚡ Predictive Alert:</strong> ${matchedRule.ruleString}
            <div style="color:var(--text-secondary); margin-top:4px">Consequent expected in approximately ${matchedRule.avgTimeLag} units with ${Math.round(matchedRule.confidence * 100)}% probability.</div>
          </div>
        `;
      }
    }, 1800);
  }

  // Import / Export
  bindImporterExporter() {
    const exportJsonBtn = document.getElementById('exportJsonBtn');
    const exportCsvBtn = document.getElementById('exportCsvBtn');
    const fileUploadInput = document.getElementById('fileUploadInput');

    if (exportJsonBtn) {
      exportJsonBtn.addEventListener('click', () => {
        const payload = {
          domain: this.currentDataset.name,
          timestamp: new Date().toISOString(),
          parameters: {
            algorithm: this.currentAlgorithm,
            minSupport: this.minSupport,
            minConfidence: this.minConfidence,
            maxPatternLength: this.maxPatternLength
          },
          patterns: this.minedPatterns,
          rules: this.minedRules,
          federatedModularity: this.federatedLab.globalModularity
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `temporal_patterns_${this.currentDomainKey}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Exported patterns as JSON');
      });
    }

    if (exportCsvBtn) {
      exportCsvBtn.addEventListener('click', () => {
        let csv = 'Sequence,SupportCount,SupportRatio,Length\n';
        this.minedPatterns.forEach(p => {
          csv += `"${p.sequence.join(' -> ')}",${p.supportCount},${p.support},${p.length}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `frequent_sequences_${this.currentDomainKey}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Exported frequent sequences as CSV');
      });
    }

    if (fileUploadInput) {
      fileUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (Array.isArray(data)) {
              this.currentDataset.sampleSequences = data;
              this.showToast(`Imported ${data.length} custom sequences successfully`);
              this.runMining();
            } else {
              alert('Invalid format: uploaded file must contain an array of sequence objects.');
            }
          } catch (err) {
            alert('Failed to parse JSON file.');
          }
        };
        reader.readAsText(file);
      });
    }
  }

  showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

// Bootstrap on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.app = new SmartMiningApp();
});
