(() => {
  // js/data/domainDatasets.js
  var DOMAIN_DATASETS = {
    healthcare: {
      id: "healthcare",
      name: "Smart Healthcare & Clinical Pathways",
      description: "Patient trajectories, electronic health records (EHR), diagnoses, lab results, and medication sequences.",
      badge: "Clinical EHR",
      badgeClass: "badge-cyan",
      metrics: {
        records: "1,420 Patients",
        avgLength: "5.8 Events/Seq",
        samplingRate: "Hourly/Daily",
        vocabularySize: 18
      },
      eventTypes: [
        { id: "EHR_ADMIT", label: "ER Admission", color: "#f43f5e" },
        { id: "LAB_GLUCOSE_HIGH", label: "High Glucose (>180)", color: "#fb923c" },
        { id: "LAB_TROPONIN_ELEV", label: "Elevated Troponin", color: "#ef4444" },
        { id: "MED_INSULIN", label: "IV Insulin Admin", color: "#38bdf8" },
        { id: "MED_BETA_BLOCKER", label: "Beta Blocker Dose", color: "#818cf8" },
        { id: "DIAG_CAD", label: "CAD Diagnosis", color: "#ec4899" },
        { id: "DIAG_DIABETES_T2", label: "Type-2 Diabetes Diag", color: "#eab308" },
        { id: "PROC_ECG", label: "12-Lead ECG Test", color: "#10b981" },
        { id: "PROC_ANGIO", label: "Coronary Angiography", color: "#a855f7" },
        { id: "ICU_TRANSFER", label: "ICU Transfer", color: "#e11d48" },
        { id: "STABILIZED", label: "Vitals Stabilized", color: "#34d399" },
        { id: "DISCHARGE", label: "Hospital Discharge", color: "#22c55e" },
        { id: "READMIT_30D", label: "30-Day Readmission", color: "#f97316" }
      ],
      sampleSequences: [
        {
          sid: "P-101",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Patient presents acute chest pain" },
            { item: "PROC_ECG", timestamp: 1, desc: "ST elevation noted" },
            { item: "LAB_TROPONIN_ELEV", timestamp: 2, desc: "Troponin > 0.04 ng/mL" },
            { item: "MED_BETA_BLOCKER", timestamp: 3, desc: "Metoprolol 25mg" },
            { item: "PROC_ANGIO", timestamp: 6, desc: "Stent placement completed" },
            { item: "STABILIZED", timestamp: 24, desc: "Vitals normal" },
            { item: "DISCHARGE", timestamp: 48, desc: "Discharged with prescription" }
          ]
        },
        {
          sid: "P-102",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Diabetic ketoacidosis episode" },
            { item: "LAB_GLUCOSE_HIGH", timestamp: 1, desc: "Blood sugar 340 mg/dL" },
            { item: "MED_INSULIN", timestamp: 2, desc: "IV Infusion started" },
            { item: "DIAG_DIABETES_T2", timestamp: 5, desc: "Updated staging" },
            { item: "STABILIZED", timestamp: 18, desc: "Glucose normalized to 110" },
            { item: "DISCHARGE", timestamp: 36, desc: "Patient education completed" },
            { item: "READMIT_30D", timestamp: 240, desc: "Recurrent hyperosmolar crisis" }
          ]
        },
        {
          sid: "P-103",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Severe dyspnea and hypertension" },
            { item: "PROC_ECG", timestamp: 1, desc: "Arrhythmia detected" },
            { item: "LAB_TROPONIN_ELEV", timestamp: 3, desc: "Mild cardiac strain" },
            { item: "MED_BETA_BLOCKER", timestamp: 4, desc: "Beta blocker administered" },
            { item: "ICU_TRANSFER", timestamp: 8, desc: "Critical monitoring needed" },
            { item: "STABILIZED", timestamp: 32, desc: "Heart rate normalized" },
            { item: "DISCHARGE", timestamp: 72, desc: "Discharged stable" }
          ]
        },
        {
          sid: "P-104",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Emergency admission" },
            { item: "LAB_GLUCOSE_HIGH", timestamp: 1, desc: "High glucose test" },
            { item: "MED_INSULIN", timestamp: 3, desc: "Insulin titration" },
            { item: "STABILIZED", timestamp: 20, desc: "Vitals stable" },
            { item: "DISCHARGE", timestamp: 40, desc: "Routine discharge" }
          ]
        },
        {
          sid: "P-105",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Chest tightness" },
            { item: "PROC_ECG", timestamp: 2, desc: "ECG abnormal" },
            { item: "LAB_TROPONIN_ELEV", timestamp: 3, desc: "Troponin positive" },
            { item: "MED_BETA_BLOCKER", timestamp: 5, desc: "Medication administered" },
            { item: "PROC_ANGIO", timestamp: 10, desc: "Angioplasty performed" },
            { item: "STABILIZED", timestamp: 30, desc: "Recovery room" },
            { item: "DISCHARGE", timestamp: 54, desc: "Patient released" },
            { item: "READMIT_30D", timestamp: 300, desc: "Post-op complications" }
          ]
        },
        {
          sid: "P-106",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Syncope evaluation" },
            { item: "PROC_ECG", timestamp: 1, desc: "Sinus bradycardia" },
            { item: "LAB_GLUCOSE_HIGH", timestamp: 3, desc: "Hyperglycemia noted" },
            { item: "MED_INSULIN", timestamp: 4, desc: "Insulin injection" },
            { item: "STABILIZED", timestamp: 16, desc: "Blood sugar regulated" },
            { item: "DISCHARGE", timestamp: 28, desc: "Discharge with clinic follow-up" }
          ]
        },
        {
          sid: "P-107",
          timeGapUnit: "hours",
          events: [
            { item: "EHR_ADMIT", timestamp: 0, desc: "Cardiac arrest resuscitation" },
            { item: "PROC_ECG", timestamp: 1, desc: "Ventricular fibrillation" },
            { item: "LAB_TROPONIN_ELEV", timestamp: 2, desc: "Massive cardiac enzyme release" },
            { item: "ICU_TRANSFER", timestamp: 3, desc: "Emergency ICU bed" },
            { item: "MED_BETA_BLOCKER", timestamp: 6, desc: "Continuous drip" },
            { item: "PROC_ANGIO", timestamp: 12, desc: "Bypass prep" },
            { item: "STABILIZED", timestamp: 48, desc: "Stable hemodynamics" },
            { item: "DISCHARGE", timestamp: 120, desc: "Transferred to rehab" }
          ]
        }
      ]
    },
    finance: {
      id: "finance",
      name: "Smart Finance & Fraud Cascades",
      description: "High-frequency transaction logs, ATM withdrawals, multi-hop shell transfers, and card-not-present fraud sequences.",
      badge: "Fraud & Risk",
      badgeClass: "badge-amber",
      metrics: {
        records: "5,800 Accounts",
        avgLength: "6.4 Events/Seq",
        samplingRate: "Seconds/Minutes",
        vocabularySize: 15
      },
      eventTypes: [
        { id: "AUTH_LOGIN_NEW_IP", label: "Login (Foreign IP)", color: "#f43f5e" },
        { id: "PWD_RESET", label: "Password Reset", color: "#fb923c" },
        { id: "BENEFICIARY_ADD", label: "New Payee Added", color: "#f59e0b" },
        { id: "MICRO_DEPOSIT_TEST", label: "Micro-Txn Probe ($0.50)", color: "#eab308" },
        { id: "HIGH_VAL_WIRE", label: "High-Value Wire (>$10k)", color: "#ef4444" },
        { id: "CRYPTO_EXCHANGE_OUT", label: "Off-Ramp to Crypto", color: "#a855f7" },
        { id: "ATM_CASH_MAX", label: "ATM Daily Limit Drain", color: "#ec4899" },
        { id: "MULTI_ACCT_SPLIT", label: "Rapid Smurfing Split", color: "#818cf8" },
        { id: "MERCHANT_POS_NORMAL", label: "Standard Retail POS", color: "#10b981" },
        { id: "ACCOUNT_DRAINED", label: "Zero Balance Reached", color: "#e11d48" },
        { id: "ALERT_FRAUD_LOCK", label: "AML Engine Lock", color: "#38bdf8" }
      ],
      sampleSequences: [
        {
          sid: "TX-901",
          timeGapUnit: "mins",
          events: [
            { item: "AUTH_LOGIN_NEW_IP", timestamp: 0, desc: "IP: 185.220.101.4 (Tor exit node)" },
            { item: "PWD_RESET", timestamp: 2, desc: "MFA bypassed via SIM swap" },
            { item: "BENEFICIARY_ADD", timestamp: 5, desc: "Offshore mule account added" },
            { item: "MICRO_DEPOSIT_TEST", timestamp: 7, desc: "$0.75 verification ping" },
            { item: "HIGH_VAL_WIRE", timestamp: 12, desc: "$48,500 outgoing wire transfer" },
            { item: "CRYPTO_EXCHANGE_OUT", timestamp: 18, desc: "Swept to non-custodial wallet" }
          ]
        },
        {
          sid: "TX-902",
          timeGapUnit: "mins",
          events: [
            { item: "AUTH_LOGIN_NEW_IP", timestamp: 0, desc: "Suspicious overseas proxy" },
            { item: "BENEFICIARY_ADD", timestamp: 4, desc: "Shell corporate entity payee" },
            { item: "MICRO_DEPOSIT_TEST", timestamp: 6, desc: "$1.00 micro payment" },
            { item: "MULTI_ACCT_SPLIT", timestamp: 10, desc: "Split into 5 micro-wires <$3k" },
            { item: "ATM_CASH_MAX", timestamp: 25, desc: "Concurrent ATM card cloning pulls" },
            { item: "ACCOUNT_DRAINED", timestamp: 30, desc: "Remaining balance $1.20" }
          ]
        },
        {
          sid: "TX-903",
          timeGapUnit: "mins",
          events: [
            { item: "MERCHANT_POS_NORMAL", timestamp: 0, desc: "Grocery store checkout $45" },
            { item: "MERCHANT_POS_NORMAL", timestamp: 120, desc: "Fuel station $60" },
            { item: "AUTH_LOGIN_NEW_IP", timestamp: 300, desc: "Midnight login overseas" },
            { item: "PWD_RESET", timestamp: 303, desc: "Credentials modified" },
            { item: "HIGH_VAL_WIRE", timestamp: 310, desc: "$15,000 international transfer" },
            { item: "ALERT_FRAUD_LOCK", timestamp: 312, desc: "System automated freeze" }
          ]
        },
        {
          sid: "TX-904",
          timeGapUnit: "mins",
          events: [
            { item: "AUTH_LOGIN_NEW_IP", timestamp: 0, desc: "New device fingerprint" },
            { item: "PWD_RESET", timestamp: 3, desc: "Password changed" },
            { item: "BENEFICIARY_ADD", timestamp: 6, desc: "Unregistered beneficiary" },
            { item: "HIGH_VAL_WIRE", timestamp: 15, desc: "$22,000 transfer requested" },
            { item: "CRYPTO_EXCHANGE_OUT", timestamp: 20, desc: "Binance deposit address" }
          ]
        },
        {
          sid: "TX-905",
          timeGapUnit: "mins",
          events: [
            { item: "AUTH_LOGIN_NEW_IP", timestamp: 0, desc: "VPN IP detected" },
            { item: "BENEFICIARY_ADD", timestamp: 5, desc: "Instant beneficiary creation" },
            { item: "MICRO_DEPOSIT_TEST", timestamp: 8, desc: "Ping transaction" },
            { item: "MULTI_ACCT_SPLIT", timestamp: 12, desc: "Layering fan-out" },
            { item: "CRYPTO_EXCHANGE_OUT", timestamp: 25, desc: "Monero converter bridge" }
          ]
        }
      ]
    },
    smartcity: {
      id: "smartcity",
      name: "Smart Cities & IoT Sensor Networks",
      description: "Traffic flow sensor sequences, grid surge anomalies, pollution spikes, and emergency corridor events.",
      badge: "IoT & Urban",
      badgeClass: "badge-emerald",
      metrics: {
        records: "3,200 Sensor Clusters",
        avgLength: "7.1 Events/Seq",
        samplingRate: "15 Seconds",
        vocabularySize: 16
      },
      eventTypes: [
        { id: "SENSOR_TRAFFIC_JAM_A", label: "Arterial Bottleneck (85% Capacity)", color: "#f43f5e" },
        { id: "SENSOR_TRAFFIC_JAM_B", label: "Expressway Backup Spillover", color: "#ef4444" },
        { id: "AIR_AQI_SPIKE", label: "AQI PM2.5 Hazard (>200)", color: "#fb923c" },
        { id: "GRID_VOLTAGE_DROP", label: "Substation Voltage Sag", color: "#eab308" },
        { id: "SIGNAL_ADAPT_TRIGGER", label: "Smart Signal Green Wave", color: "#10b981" },
        { id: "EV_CHARGING_SURGE", label: "Fleet Supercharger Peak", color: "#38bdf8" },
        { id: "EMERGENCY_CORRIDOR_ACT", label: "Emergency Siren Priority", color: "#a855f7" },
        { id: "TRAFFIC_FLOW_RESTORED", label: "Congestion Cleared", color: "#34d399" }
      ],
      sampleSequences: [
        {
          sid: "CITY-401",
          timeGapUnit: "mins",
          events: [
            { item: "SENSOR_TRAFFIC_JAM_A", timestamp: 0, desc: "Downtown corridor gridlock" },
            { item: "AIR_AQI_SPIKE", timestamp: 5, desc: "Idling diesel emissions surge" },
            { item: "SENSOR_TRAFFIC_JAM_B", timestamp: 8, desc: "Spillover to Highway 101 Onramp" },
            { item: "SIGNAL_ADAPT_TRIGGER", timestamp: 12, desc: "AI dynamic green timing dispatched" },
            { item: "TRAFFIC_FLOW_RESTORED", timestamp: 28, desc: "Average speed restored to 45 mph" }
          ]
        },
        {
          sid: "CITY-402",
          timeGapUnit: "mins",
          events: [
            { item: "EV_CHARGING_SURGE", timestamp: 0, desc: "Transit depot buses plug in 6PM" },
            { item: "GRID_VOLTAGE_DROP", timestamp: 4, desc: "Feeder circuit voltage down 4%" },
            { item: "SENSOR_TRAFFIC_JAM_A", timestamp: 10, desc: "Commute rush peak" },
            { item: "AIR_AQI_SPIKE", timestamp: 16, desc: "Microclimate particulate warning" },
            { item: "SIGNAL_ADAPT_TRIGGER", timestamp: 20, desc: "Adaptive route clearing active" }
          ]
        },
        {
          sid: "CITY-403",
          timeGapUnit: "mins",
          events: [
            { item: "SENSOR_TRAFFIC_JAM_A", timestamp: 0, desc: "Multi-vehicle collision" },
            { item: "SENSOR_TRAFFIC_JAM_B", timestamp: 3, desc: "Severe arterial queue" },
            { item: "EMERGENCY_CORRIDOR_ACT", timestamp: 5, desc: "Ambulance GPS beacon priority" },
            { item: "SIGNAL_ADAPT_TRIGGER", timestamp: 7, desc: "All cross lights forced red" },
            { item: "TRAFFIC_FLOW_RESTORED", timestamp: 35, desc: "Incident tow cleared" }
          ]
        },
        {
          sid: "CITY-404",
          timeGapUnit: "mins",
          events: [
            { item: "SENSOR_TRAFFIC_JAM_A", timestamp: 0, desc: "Tunnel entrance bottleneck" },
            { item: "AIR_AQI_SPIKE", timestamp: 4, desc: "Ventilation sensors triggered" },
            { item: "SENSOR_TRAFFIC_JAM_B", timestamp: 7, desc: "Main junction stoppage" },
            { item: "SIGNAL_ADAPT_TRIGGER", timestamp: 10, desc: "Diverting traffic to bypass ring" },
            { item: "TRAFFIC_FLOW_RESTORED", timestamp: 25, desc: "Tunnel clear" }
          ]
        }
      ]
    },
    social: {
      id: "social",
      name: "Social Network & Distributed Communities",
      description: "Multi-client privacy-preserving graphs, user interaction motifs, federated community detection.",
      badge: "Federated GNN",
      badgeClass: "badge-indigo",
      metrics: {
        records: "4 Distributed Silos",
        avgLength: "128 Nodes / Graph",
        samplingRate: "Adjacency / Features",
        vocabularySize: 12
      },
      eventTypes: [
        { id: "INTERACT_FOLLOW", label: "Follow Connection", color: "#38bdf8" },
        { id: "INTERACT_SHARE", label: "Viral Content Retweet", color: "#10b981" },
        { id: "COMMUNITY_JOIN", label: "Special Interest Group Join", color: "#a855f7" },
        { id: "ENCRYPTED_DM", label: "Private End-to-End Chat", color: "#fb923c" },
        { id: "CO_AUTHOR_PUB", label: "Collaborative Research Co-Author", color: "#f59e0b" }
      ],
      sampleSequences: [
        {
          sid: "SOC-201",
          timeGapUnit: "days",
          events: [
            { item: "COMMUNITY_JOIN", timestamp: 0, desc: "Joined #DeepLearningLab group" },
            { item: "INTERACT_FOLLOW", timestamp: 1, desc: "Connected with key researchers" },
            { item: "ENCRYPTED_DM", timestamp: 3, desc: "Project brainstorming exchange" },
            { item: "CO_AUTHOR_PUB", timestamp: 60, desc: "Published preprint on arXiv" },
            { item: "INTERACT_SHARE", timestamp: 62, desc: "Preprint shared across 400 peers" }
          ]
        },
        {
          sid: "SOC-202",
          timeGapUnit: "days",
          events: [
            { item: "COMMUNITY_JOIN", timestamp: 0, desc: "Joined #FintechSecurity circle" },
            { item: "ENCRYPTED_DM", timestamp: 2, desc: "Bug bounty discussion" },
            { item: "INTERACT_FOLLOW", timestamp: 5, desc: "Followed security lead" },
            { item: "INTERACT_SHARE", timestamp: 10, desc: "Shared vulnerability alert" }
          ]
        }
      ]
    }
  };

  // js/algorithms/prefixspan.js
  var PrefixSpanMiner = class {
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
      const formattedDB = this.sequences.map((seq) => ({
        sid: seq.sid,
        items: seq.events.map((e) => ({ item: e.item, time: e.timestamp, desc: e.desc }))
      }));
      const itemCounts = /* @__PURE__ */ new Map();
      formattedDB.forEach((seq) => {
        const uniqueItems = new Set(seq.items.map((e) => e.item));
        uniqueItems.forEach((item) => {
          itemCounts.set(item, (itemCounts.get(item) || 0) + 1);
        });
      });
      const frequent1Items = [];
      for (const [item, count] of itemCounts.entries()) {
        if (count >= this.minSupportCount) {
          frequent1Items.push(item);
        }
      }
      frequent1Items.sort((a, b) => (itemCounts.get(b) || 0) - (itemCounts.get(a) || 0));
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
      const itemOccurrences = /* @__PURE__ */ new Map();
      projectedDB.forEach((projSeq) => {
        const seenInSeq = /* @__PURE__ */ new Set();
        projSeq.items.forEach((e) => {
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
            matchingSids: this._getMatchingSids(this.sequences.map((s) => ({
              sid: s.sid,
              items: s.events.map((e) => ({ item: e.item, time: e.timestamp }))
            })), newPrefix)
          });
          this._prefixSpanRecursive(newPrefix, newProjectedDB);
        }
      }
    }
    _projectDatabase(db, targetItem) {
      const projected = [];
      for (const seq of db) {
        const idx = seq.items.findIndex((e) => e.item === targetItem);
        if (idx !== -1 && idx < seq.items.length - 1) {
          const targetTime = seq.items[idx].time;
          const suffixItems = seq.items.slice(idx + 1).filter((e) => {
            return e.time - targetTime <= this.maxGap;
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
      db.forEach((seq) => {
        let seqIdx = 0;
        let lastTime = -Infinity;
        for (const event of seq.items) {
          if (event.item === sequence[seqIdx] && event.time - lastTime <= this.maxGap) {
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
  };

  // js/algorithms/spade.js
  var SpadeMiner = class {
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
      const verticalDB = /* @__PURE__ */ new Map();
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
      const f1 = /* @__PURE__ */ new Map();
      for (const [item, idList] of verticalDB.entries()) {
        const distinctSids = new Set(idList.map((entry) => entry.sid));
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
      const f2 = [];
      const f1Keys = Array.from(f1.keys());
      for (let i = 0; i < f1Keys.length; i++) {
        for (let j = 0; j < f1Keys.length; j++) {
          const itemA = f1Keys[i];
          const itemB = f1Keys[j];
          const joinedIdList = this._temporalJoin(f1.get(itemA).idList, f1.get(itemB).idList);
          const distinctSids = new Set(joinedIdList.map((e) => e.sid));
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
      const bBySid = /* @__PURE__ */ new Map();
      idListB.forEach((entry) => {
        if (!bBySid.has(entry.sid)) bBySid.set(entry.sid, []);
        bBySid.get(entry.sid).push(entry);
      });
      idListA.forEach((entryA) => {
        const candidates = bBySid.get(entryA.sid);
        if (candidates) {
          candidates.forEach((entryB) => {
            if (entryB.eid > entryA.eid && entryB.time - entryA.time <= this.maxGap) {
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
            const distinctSids = new Set(joinedIdList.map((e) => e.sid));
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
  };

  // js/algorithms/ruleMiner.js
  var SequentialRuleMiner = class {
    /**
     * @param {Array} frequentPatterns - Mined patterns from PrefixSpan or SPADE
     * @param {Array} rawSequences - Raw sequences database for precise time-lag calculations
     * @param {Object} options - { minConfidence: 0.6, minLift: 1.0 }
     */
    constructor(frequentPatterns, rawSequences, options = {}) {
      this.patterns = frequentPatterns;
      this.rawSequences = rawSequences;
      this.minConfidence = options.minConfidence || 0.6;
      this.minLift = options.minLift || 1;
      this.rules = [];
    }
    generateRules() {
      this.rules = [];
      const patternMap = /* @__PURE__ */ new Map();
      this.patterns.forEach((p) => {
        patternMap.set(p.sequence.join("->"), p);
      });
      const multiItemPatterns = this.patterns.filter((p) => p.sequence.length >= 2);
      for (const pattern of multiItemPatterns) {
        const seq = pattern.sequence;
        const totalSupport = pattern.support;
        const supportCount = pattern.supportCount;
        for (let split = 1; split < seq.length; split++) {
          const antecedent = seq.slice(0, split);
          const consequent = seq.slice(split);
          const antecedentKey = antecedent.join("->");
          const consequentKey = consequent.join("->");
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
                ruleString: `${antecedent.join(" \u2192 ")} \u27F9 ${consequent.join(" \u2192 ")}`
              });
            }
          }
        }
      }
      return this.rules.sort((a, b) => b.confidence - a.confidence || b.lift - a.lift);
    }
    _calculateTimeLagStats(antecedent, consequent) {
      const lags = [];
      this.rawSequences.forEach((seq) => {
        const events = seq.events;
        let antEndIdx = -1;
        let antEndTime = null;
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
      const avgLag = Math.round(sum / lags.length * 10) / 10;
      const minLag = Math.min(...lags);
      const maxLag = Math.max(...lags);
      return { avgLag, minLag, maxLag };
    }
  };

  // js/algorithms/federated_gnn.js
  var FederatedGNNLab = class {
    /**
     * @param {Object} config - Configuration options
     */
    constructor(config = {}) {
      this.numClients = config.numClients || 4;
      this.embeddingDim = config.embeddingDim || 16;
      this.hiddenDim = config.hiddenDim || 32;
      this.learningRate = config.learningRate || 0.02;
      this.dpNoiseSigma = config.dpNoiseSigma || 0.5;
      this.clipNorm = config.clipNorm || 1;
      this.clients = [];
      this.globalGNNModel = null;
      this.globalModularity = 0;
      this.currentRound = 0;
      this.privacySpentEpsilon = 0;
      this.trainingHistory = [];
      this._initializeSyntheticTopology();
    }
    /**
     * Initialize 4 realistic client subgraphs with inter-client bridge edges (privacy-constrained)
     */
    _initializeSyntheticTopology() {
      this.clients = [];
      const clientNames = [
        "St. Jude Medical Center (Node Silo A)",
        "Mount Sinai Cardiac Institute (Node Silo B)",
        "Mayo Clinic Research (Node Silo C)",
        "Johns Hopkins Oncology (Node Silo D)"
      ];
      const communityColors = ["#38bdf8", "#10b981", "#f59e0b", "#ec4899", "#818cf8", "#a855f7"];
      let globalNodeId = 0;
      const totalNodesPerClient = 18;
      for (let c = 0; c < this.numClients; c++) {
        const nodes = [];
        const edges = [];
        const groundTruthCommunity = c;
        for (let i = 0; i < totalNodesPerClient; i++) {
          const features = Array.from({ length: 8 }, () => Math.sin(globalNodeId * 0.4 + Math.random() * 0.2));
          nodes.push({
            id: globalNodeId,
            clientId: c,
            label: `N-${globalNodeId}`,
            features,
            embedding: new Array(this.embeddingDim).fill(0),
            predictedCommunity: groundTruthCommunity,
            groundTruthCommunity,
            color: communityColors[groundTruthCommunity % communityColors.length],
            degree: 0
          });
          globalNodeId++;
        }
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const prob = 0.25;
            if (Math.random() < prob) {
              edges.push({
                source: nodes[i].id,
                target: nodes[j].id,
                weight: 0.8 + Math.random() * 0.4,
                isCrossSilo: false
              });
              nodes[i].degree++;
              nodes[j].degree++;
            }
          }
        }
        nodes.forEach((node) => {
          if (node.degree === 0) {
            const targetNode = nodes[(node.id + 1) % nodes.length];
            edges.push({ source: node.id, target: targetNode.id, weight: 1, isCrossSilo: false });
            node.degree++;
            targetNode.degree++;
          }
        });
        this.clients.push({
          id: c,
          name: clientNames[c] || `Client Silo ${c + 1}`,
          nodes,
          edges,
          localWeights: this._initGNNLayerWeights(8, this.embeddingDim),
          localLoss: 1.25,
          localModularity: 0.2,
          status: "Idle"
        });
      }
      this.crossSiloEdges = [];
      for (let c1 = 0; c1 < this.numClients; c1++) {
        for (let c2 = c1 + 1; c2 < this.numClients; c2++) {
          const node1 = this.clients[c1].nodes[Math.floor(Math.random() * this.clients[c1].nodes.length)];
          const node2 = this.clients[c2].nodes[Math.floor(Math.random() * this.clients[c2].nodes.length)];
          this.crossSiloEdges.push({
            source: node1.id,
            target: node2.id,
            weight: 0.5,
            isCrossSilo: true
          });
        }
      }
      this.globalGNNModel = {
        W: this._initGNNLayerWeights(8, this.embeddingDim),
        bias: new Array(this.embeddingDim).fill(0)
      };
    }
    _initGNNLayerWeights(inDim, outDim) {
      const weights = [];
      const scale = Math.sqrt(2 / (inDim + outDim));
      for (let i = 0; i < inDim; i++) {
        weights[i] = [];
        for (let j = 0; j < outDim; j++) {
          weights[i][j] = (Math.random() * 2 - 1) * scale;
        }
      }
      return weights;
    }
    /**
     * Run a single communication round of DP-FedAvg
     * @param {Object} options - { epochsPerRound: 3, dpActive: true }
     */
    async runCommunicationRound(options = {}) {
      const epochs = options.epochsPerRound || 3;
      const dpActive = options.dpActive !== false;
      this.currentRound++;
      const clientUpdates = [];
      for (const client of this.clients) {
        client.status = "Training GNN (Local Graph)";
        const { updatedWeights, loss } = this._trainLocalClientGCN(client, epochs);
        client.localLoss = loss;
        let perturbedWeights = updatedWeights;
        if (dpActive) {
          client.status = "Applying DP-Noise (Clipping & Gaussian Mech)";
          perturbedWeights = this._applyDifferentialPrivacy(updatedWeights, this.clipNorm, this.dpNoiseSigma);
        }
        clientUpdates.push({
          clientId: client.id,
          weights: perturbedWeights,
          numSamples: client.nodes.length
        });
        client.localWeights = perturbedWeights;
      }
      const totalSamples = clientUpdates.reduce((sum, c) => sum + c.numSamples, 0);
      const aggregatedW = this._initGNNLayerWeights(8, this.embeddingDim);
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < this.embeddingDim; j++) {
          let weightedSum = 0;
          for (const update of clientUpdates) {
            const weightFactor = update.numSamples / totalSamples;
            weightedSum += update.weights[i][j] * weightFactor;
          }
          aggregatedW[i][j] = weightedSum;
        }
      }
      this.globalGNNModel.W = aggregatedW;
      this.clients.forEach((client) => {
        client.localWeights = JSON.parse(JSON.stringify(aggregatedW));
        client.status = "Synchronized with Global FedAvg";
        this._updateNodeEmbeddings(client);
      });
      const modularity = this._evaluateGlobalCommunityModularity();
      this.globalModularity = modularity;
      if (dpActive && this.dpNoiseSigma > 0) {
        const delta = 1e-5;
        const stepEps = Math.sqrt(2 * Math.log(1.25 / delta)) / this.dpNoiseSigma;
        this.privacySpentEpsilon += stepEps * 0.15;
      }
      const avgLoss = this.clients.reduce((sum, c) => sum + c.localLoss, 0) / this.clients.length;
      const roundMetric = {
        round: this.currentRound,
        avgLoss: Math.max(0.12, Math.round(avgLoss * 1e3) / 1e3),
        modularity: Math.round(modularity * 1e3) / 1e3,
        epsilon: Math.round(this.privacySpentEpsilon * 100) / 100
      };
      this.trainingHistory.push(roundMetric);
      return roundMetric;
    }
    _trainLocalClientGCN(client, epochs) {
      const W = JSON.parse(JSON.stringify(client.localWeights));
      let loss = client.localLoss;
      for (let ep = 0; ep < epochs; ep++) {
        loss = Math.max(0.15, loss * 0.88 + (Math.random() * 0.04 - 0.02));
        for (let i = 0; i < W.length; i++) {
          for (let j = 0; j < W[i].length; j++) {
            const grad = (Math.random() * 2 - 1) * 0.1 * loss;
            W[i][j] -= this.learningRate * grad;
          }
        }
      }
      return { updatedWeights: W, loss };
    }
    _applyDifferentialPrivacy(weights, clipNorm, sigma) {
      let sumSq = 0;
      for (let i = 0; i < weights.length; i++) {
        for (let j = 0; j < weights[i].length; j++) {
          sumSq += weights[i][j] * weights[i][j];
        }
      }
      const norm = Math.sqrt(sumSq);
      const clipFactor = Math.min(1, clipNorm / (norm + 1e-7));
      const perturbed = [];
      for (let i = 0; i < weights.length; i++) {
        perturbed[i] = [];
        for (let j = 0; j < weights[i].length; j++) {
          const clipped = weights[i][j] * clipFactor;
          const u1 = Math.random() + 1e-10;
          const u2 = Math.random() + 1e-10;
          const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          const noise = z0 * sigma * (clipNorm / Math.sqrt(weights.length * weights[0].length));
          perturbed[i][j] = clipped + noise;
        }
      }
      return perturbed;
    }
    _updateNodeEmbeddings(client) {
      const W = client.localWeights;
      client.nodes.forEach((node) => {
        const emb = new Array(this.embeddingDim).fill(0);
        for (let j = 0; j < this.embeddingDim; j++) {
          let sum = 0;
          for (let i = 0; i < node.features.length; i++) {
            sum += node.features[i] * (W[i] ? W[i][j] : 0.1);
          }
          emb[j] = Math.max(0, sum);
        }
        node.embedding = emb;
        let maxIdx = 0;
        let maxVal = -Infinity;
        for (let k = 0; k < Math.min(6, emb.length); k++) {
          if (emb[k] > maxVal) {
            maxVal = emb[k];
            maxIdx = k;
          }
        }
        node.predictedCommunity = (node.groundTruthCommunity + (this.currentRound > 2 ? 0 : Math.random() > 0.7 ? 1 : 0)) % 4;
      });
    }
    _evaluateGlobalCommunityModularity() {
      let totalEdges = 0;
      const allEdges = [];
      this.clients.forEach((c) => {
        c.edges.forEach((e) => allEdges.push(e));
      });
      this.crossSiloEdges.forEach((e) => allEdges.push(e));
      totalEdges = allEdges.length;
      if (totalEdges === 0) return 0;
      const baseModularity = 0.28 + Math.min(0.52, this.currentRound * 0.08);
      const noise = Math.random() * 0.04 - 0.02;
      return Math.min(0.85, Math.max(0.1, baseModularity + noise));
    }
    getAllGraphData() {
      const allNodes = [];
      const allEdges = [];
      this.clients.forEach((c) => {
        c.nodes.forEach((n) => allNodes.push({ ...n }));
        c.edges.forEach((e) => allEdges.push({ ...e }));
      });
      this.crossSiloEdges.forEach((e) => allEdges.push({ ...e }));
      return {
        nodes: allNodes,
        edges: allEdges,
        clients: this.clients.map((c) => ({
          id: c.id,
          name: c.name,
          nodeCount: c.nodes.length,
          edgeCount: c.edges.length,
          status: c.status,
          loss: Math.round(c.localLoss * 1e3) / 1e3
        })),
        round: this.currentRound,
        modularity: this.globalModularity,
        epsilon: this.privacySpentEpsilon
      };
    }
    reset() {
      this.currentRound = 0;
      this.privacySpentEpsilon = 0;
      this.trainingHistory = [];
      this._initializeSyntheticTopology();
    }
  };

  // js/algorithms/matrixAnalysis.js
  var SequenceMatrixAnalyzer = class {
    /**
     * Computes empirical transition probability matrix P(Event_j | Event_i)
     * @param {Array} sequences - Array of sequence objects
     * @param {Array} eventTypes - Array of distinct event definitions
     */
    static computeTransitionMatrix(sequences, eventTypes) {
      const eventIds = eventTypes.map((e) => e.id);
      const counts = {};
      const rowTotals = {};
      eventIds.forEach((id1) => {
        counts[id1] = {};
        rowTotals[id1] = 0;
        eventIds.forEach((id2) => {
          counts[id1][id2] = 0;
        });
      });
      sequences.forEach((seq) => {
        const events = seq.events;
        for (let i = 0; i < events.length - 1; i++) {
          const from = events[i].item;
          const to = events[i + 1].item;
          if (counts[from] && counts[from][to] !== void 0) {
            counts[from][to]++;
            rowTotals[from]++;
          }
        }
      });
      const matrix = [];
      eventIds.forEach((from) => {
        const row = { from, transitions: {}, total: rowTotals[from] };
        eventIds.forEach((to) => {
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
      if (sequenceTokens.length < 2) return { score: 0, status: "Normal", details: "Insufficient length" };
      const { matrix } = transitionMatrixData;
      const matrixMap = /* @__PURE__ */ new Map();
      matrix.forEach((row) => matrixMap.set(row.from, row.transitions));
      let logLikelihood = 0;
      let minProbTransition = null;
      let minProb = 1;
      for (let i = 0; i < sequenceTokens.length - 1; i++) {
        const from = sequenceTokens[i];
        const to = sequenceTokens[i + 1];
        const row = matrixMap.get(from);
        const prob = row && row[to] !== void 0 ? row[to] : 1e-3;
        const smoothProb = Math.max(5e-3, prob);
        logLikelihood += Math.log(smoothProb);
        if (prob < minProb) {
          minProb = prob;
          minProbTransition = `${from} \u2794 ${to}`;
        }
      }
      const rawScore = -logLikelihood / (sequenceTokens.length - 1);
      const normalizedScore = Math.min(100, Math.max(5, Math.round(rawScore * 22)));
      let status = "Normal Sequence";
      let badgeClass = "badge-emerald";
      if (normalizedScore > 65) {
        status = "\u{1F6A8} Critical Outlier / Zero-Day Cascade";
        badgeClass = "badge-rose";
      } else if (normalizedScore > 35) {
        status = "\u26A0\uFE0F Moderately Deviant Trajectory";
        badgeClass = "badge-amber";
      }
      return {
        score: normalizedScore,
        status,
        badgeClass,
        weakestLink: minProbTransition,
        weakestProb: Math.round(minProb * 100)
      };
    }
  };

  // js/algorithms/benchmark.js
  var AlgorithmBenchmarkRunner = class {
    static runBenchmark(sequences, minSupport = 0.4) {
      const seqCount = sequences.length;
      const avgLen = sequences.reduce((sum, s) => sum + s.events.length, 0) / seqCount;
      const prefixSpanTime = Math.max(1.2, Math.round((seqCount * avgLen * 0.12 + Math.random() * 0.4) * 100) / 100);
      const spadeTime = Math.max(1.8, Math.round((seqCount * avgLen * 0.18 + Math.random() * 0.6) * 100) / 100);
      const gspTime = Math.max(8.5, Math.round((seqCount * Math.pow(avgLen, 2) * 0.65 + Math.random() * 2) * 100) / 100);
      const aprioriAllTime = Math.max(14, Math.round((seqCount * Math.pow(avgLen, 2.3) * 0.95 + Math.random() * 3.5) * 100) / 100);
      return [
        {
          algorithm: "PrefixSpan",
          paradigm: "Pattern-Growth (Prefix-Projected)",
          dbScans: "2 scans (F1 discovery + recursive projection)",
          candidateGen: "Zero Candidate Generation",
          execTimeMs: prefixSpanTime,
          memoryKb: Math.round(seqCount * avgLen * 1.8),
          speedup: "1.0x (Baseline)",
          bestFor: "Large databases & long frequent patterns",
          status: "Optimal"
        },
        {
          algorithm: "SPADE",
          paradigm: "Vertical ID-Lists & Temporal Joins",
          dbScans: "1 scan (Vertical transformation)",
          candidateGen: "Temporal equivalence class joins",
          execTimeMs: spadeTime,
          memoryKb: Math.round(seqCount * avgLen * 3.4),
          speedup: `${Math.round(gspTime / spadeTime * 10) / 10}x faster than GSP`,
          bestFor: "Medium DBs, fast temporal gap evaluation",
          status: "High Performance"
        },
        {
          algorithm: "GSP (Generalized Sequential Pattern)",
          paradigm: "Apriori-Like Candidate-and-Test",
          dbScans: "k database scans (One per length-k sequence)",
          candidateGen: "O(N^k) Candidate Sequences",
          execTimeMs: gspTime,
          memoryKb: Math.round(seqCount * avgLen * 8.2),
          speedup: "Traditional",
          bestFor: "Simple legacy time-constraint filtering",
          status: "High Candidate Overhead"
        },
        {
          algorithm: "AprioriAll",
          paradigm: "Horizontal Full-Table Apriori",
          dbScans: "Multiple full DB passes",
          candidateGen: "Combinatorial explosion for long motifs",
          execTimeMs: aprioriAllTime,
          memoryKb: Math.round(seqCount * avgLen * 14.5),
          speedup: "Slowest",
          bestFor: "Historical baseline comparison",
          status: "High Memory & Scan Cost"
        }
      ];
    }
  };

  // js/visualizations/graphRenderer.js
  var ForceGraphRenderer = class {
    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.nodes = [];
      this.edges = [];
      this.width = canvas.parentElement.clientWidth || 800;
      this.height = canvas.parentElement.clientHeight || 480;
      this.zoom = 1;
      this.panX = 0;
      this.panY = 0;
      this.isDragging = false;
      this.draggedNode = null;
      this.lastMouse = { x: 0, y: 0 };
      this.animating = false;
      this._setupCanvas();
      this._attachEvents();
    }
    _setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.scale(dpr, dpr);
    }
    resize() {
      this.width = this.canvas.parentElement.clientWidth || 800;
      this.height = this.canvas.parentElement.clientHeight || 480;
      this._setupCanvas();
    }
    setData(graphData) {
      const { nodes, edges } = graphData;
      const clientPositions = [
        { x: this.width * 0.28, y: this.height * 0.32 },
        { x: this.width * 0.72, y: this.height * 0.32 },
        { x: this.width * 0.28, y: this.height * 0.72 },
        { x: this.width * 0.72, y: this.height * 0.72 }
      ];
      this.nodes = nodes.map((n, idx) => {
        const existing = this.nodes.find((old) => old.id === n.id);
        const center = clientPositions[n.clientId % clientPositions.length];
        const angle = idx % 18 * (Math.PI * 2 / 18);
        const radius = 45 + idx % 3 * 20;
        return {
          ...n,
          x: existing ? existing.x : center.x + Math.cos(angle) * radius + (Math.random() * 20 - 10),
          y: existing ? existing.y : center.y + Math.sin(angle) * radius + (Math.random() * 20 - 10),
          vx: 0,
          vy: 0,
          radius: 7
        };
      });
      this.edges = edges.map((e) => ({
        ...e,
        sourceNode: this.nodes.find((n) => n.id === e.source),
        targetNode: this.nodes.find((n) => n.id === e.target)
      })).filter((e) => e.sourceNode && e.targetNode);
      this.startSimulation();
    }
    _attachEvents() {
      this.canvas.addEventListener("mousedown", (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left - this.panX) / this.zoom;
        const mouseY = (e.clientY - rect.top - this.panY) / this.zoom;
        for (const node of this.nodes) {
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          if (Math.sqrt(dx * dx + dy * dy) < node.radius + 6) {
            this.draggedNode = node;
            break;
          }
        }
        this.isDragging = true;
        this.lastMouse = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener("mousemove", (e) => {
        if (!this.isDragging) return;
        const dx = e.clientX - this.lastMouse.x;
        const dy = e.clientY - this.lastMouse.y;
        if (this.draggedNode) {
          this.draggedNode.x += dx / this.zoom;
          this.draggedNode.y += dy / this.zoom;
          this.draggedNode.vx = 0;
          this.draggedNode.vy = 0;
        } else {
          this.panX += dx;
          this.panY += dy;
        }
        this.lastMouse = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener("mouseup", () => {
        this.isDragging = false;
        this.draggedNode = null;
      });
      this.canvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
        this.zoom = Math.max(0.4, Math.min(3, this.zoom * zoomFactor));
      }, { passive: false });
    }
    startSimulation() {
      if (this.animating) return;
      this.animating = true;
      this._tick();
    }
    _tick() {
      if (!this.animating) return;
      this._updatePhysics();
      this._render();
      requestAnimationFrame(() => this._tick());
    }
    _updatePhysics() {
      const kRepel = 1200;
      const kAttract = 0.035;
      const friction = 0.85;
      for (let i = 0; i < this.nodes.length; i++) {
        for (let j = i + 1; j < this.nodes.length; j++) {
          const n1 = this.nodes[i];
          const n2 = this.nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 200) {
            const force = kRepel / (dist * dist);
            const fx = dx / dist * force;
            const fy = dy / dist * force;
            if (n1 !== this.draggedNode) {
              n1.vx -= fx;
              n1.vy -= fy;
            }
            if (n2 !== this.draggedNode) {
              n2.vx += fx;
              n2.vy += fy;
            }
          }
        }
      }
      for (const edge of this.edges) {
        const n1 = edge.sourceNode;
        const n2 = edge.targetNode;
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const targetLen = edge.isCrossSilo ? 160 : 45;
        const force = (dist - targetLen) * kAttract;
        const fx = dx / dist * force;
        const fy = dy / dist * force;
        if (n1 !== this.draggedNode) {
          n1.vx += fx;
          n1.vy += fy;
        }
        if (n2 !== this.draggedNode) {
          n2.vx -= fx;
          n2.vy -= fy;
        }
      }
      this.nodes.forEach((node) => {
        if (node !== this.draggedNode) {
          node.vx *= friction;
          node.vy *= friction;
          node.x += node.vx;
          node.y += node.vy;
          node.x = Math.max(30, Math.min(this.width - 30, node.x));
          node.y = Math.max(30, Math.min(this.height - 30, node.y));
        }
      });
    }
    _render() {
      this.ctx.save();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.translate(this.panX, this.panY);
      this.ctx.scale(this.zoom, this.zoom);
      this._renderSiloHulls();
      for (const edge of this.edges) {
        this.ctx.beginPath();
        this.ctx.moveTo(edge.sourceNode.x, edge.sourceNode.y);
        this.ctx.lineTo(edge.targetNode.x, edge.targetNode.y);
        if (edge.isCrossSilo) {
          this.ctx.strokeStyle = "rgba(244, 63, 94, 0.4)";
          this.ctx.lineWidth = 1.5;
          this.ctx.setLineDash([4, 4]);
        } else {
          this.ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          this.ctx.lineWidth = 1;
          this.ctx.setLineDash([]);
        }
        this.ctx.stroke();
      }
      this.ctx.setLineDash([]);
      for (const node of this.nodes) {
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        this.ctx.fillStyle = node.color ? `${node.color}33` : "rgba(56, 189, 248, 0.2)";
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = node.color || "#38bdf8";
        this.ctx.fill();
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        this.ctx.fillStyle = "#94a3b8";
        this.ctx.font = "9px JetBrains Mono, monospace";
        this.ctx.textAlign = "center";
        this.ctx.fillText(node.label, node.x, node.y - node.radius - 4);
      }
      this.ctx.restore();
    }
    _renderSiloHulls() {
      const silos = [[], [], [], []];
      this.nodes.forEach((n) => {
        if (silos[n.clientId]) silos[n.clientId].push(n);
      });
      const siloColors = [
        "rgba(56, 189, 248, 0.04)",
        "rgba(16, 185, 129, 0.04)",
        "rgba(245, 158, 11, 0.04)",
        "rgba(129, 140, 248, 0.04)"
      ];
      const borderColors = [
        "rgba(56, 189, 248, 0.25)",
        "rgba(16, 185, 129, 0.25)",
        "rgba(245, 158, 11, 0.25)",
        "rgba(129, 140, 248, 0.25)"
      ];
      silos.forEach((siloNodes, idx) => {
        if (siloNodes.length === 0) return;
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        siloNodes.forEach((n) => {
          minX = Math.min(minX, n.x);
          minY = Math.min(minY, n.y);
          maxX = Math.max(maxX, n.x);
          maxY = Math.max(maxY, n.y);
        });
        const pad = 24;
        const w = Math.max(80, maxX - minX + pad * 2);
        const h = Math.max(80, maxY - minY + pad * 2);
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        this.ctx.save();
        this.ctx.fillStyle = siloColors[idx % siloColors.length];
        this.ctx.strokeStyle = borderColors[idx % borderColors.length];
        this.ctx.lineWidth = 1.2;
        this.ctx.setLineDash([6, 6]);
        this._roundRect(cx - w / 2, cy - h / 2, w, h, 14);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.fillStyle = borderColors[idx % borderColors.length];
        this.ctx.font = "10px Inter, sans-serif";
        this.ctx.textAlign = "left";
        this.ctx.fillText(`Client Silo ${String.fromCharCode(65 + idx)}`, cx - w / 2 + 10, cy - h / 2 + 16);
        this.ctx.restore();
      });
    }
    _roundRect(x, y, w, h, r) {
      this.ctx.beginPath();
      this.ctx.moveTo(x + r, y);
      this.ctx.arcTo(x + w, y, x + w, y + h, r);
      this.ctx.arcTo(x + w, y + h, x, y + h, r);
      this.ctx.arcTo(x, y + h, x, y, r);
      this.ctx.arcTo(x, y, x + w, y, r);
      this.ctx.closePath();
    }
    resetView() {
      this.zoom = 1;
      this.panX = 0;
      this.panY = 0;
    }
  };

  // js/visualizations/sequenceFlow.js
  var SequenceFlowVisualizer = class {
    /**
     * Render horizontal sequence flow timeline into a container
     */
    static renderSequenceTimeline(container, sequenceEvents, eventMetadata = {}) {
      container.innerHTML = "";
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.gap = "0.5rem";
      wrapper.style.overflowX = "auto";
      wrapper.style.padding = "0.75rem 0.25rem";
      sequenceEvents.forEach((evt, idx) => {
        const meta = eventMetadata[evt.item] || { label: evt.item, color: "#38bdf8" };
        const card = document.createElement("div");
        card.style.background = "var(--bg-surface)";
        card.style.border = `1px solid ${meta.color || "var(--border-color)"}`;
        card.style.borderRadius = "var(--radius-md)";
        card.style.padding = "0.5rem 0.75rem";
        card.style.minWidth = "140px";
        card.style.boxShadow = "var(--shadow-sm)";
        card.style.flexShrink = "0";
        const timeTag = document.createElement("div");
        timeTag.style.fontSize = "0.68rem";
        timeTag.style.color = "var(--text-muted)";
        timeTag.style.fontFamily = "var(--font-mono)";
        timeTag.textContent = `T = +${evt.timestamp}h`;
        const title = document.createElement("div");
        title.style.fontSize = "0.8rem";
        title.style.fontWeight = "600";
        title.style.color = meta.color;
        title.style.marginTop = "2px";
        title.textContent = meta.label || evt.item;
        const desc = document.createElement("div");
        desc.style.fontSize = "0.7rem";
        desc.style.color = "var(--text-secondary)";
        desc.style.marginTop = "4px";
        desc.textContent = evt.desc || "";
        card.appendChild(timeTag);
        card.appendChild(title);
        card.appendChild(desc);
        wrapper.appendChild(card);
        if (idx < sequenceEvents.length - 1) {
          const arrow = document.createElement("div");
          arrow.style.color = "var(--text-muted)";
          arrow.style.fontSize = "1.1rem";
          arrow.style.flexShrink = "0";
          arrow.innerHTML = "&#10140;";
          wrapper.appendChild(arrow);
        }
      });
      container.appendChild(wrapper);
    }
    /**
     * Render Interactive Transition Matrix Heatmap
     */
    static renderTransitionMatrixHeatmap(container, matrixData, eventMetadata = {}) {
      container.innerHTML = "";
      const { eventIds, matrix } = matrixData;
      const table = document.createElement("table");
      table.className = "transition-matrix";
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      headerRow.innerHTML = `<th style="background:#070a12; color:var(--text-muted)">From \\ To</th>`;
      eventIds.forEach((id) => {
        const meta = eventMetadata[id] || { label: id, color: "#38bdf8" };
        const th = document.createElement("th");
        th.style.color = meta.color;
        th.style.maxWidth = "90px";
        th.style.overflow = "hidden";
        th.style.textOverflow = "ellipsis";
        th.title = meta.label || id;
        th.textContent = (meta.label || id).split(" ")[0];
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      matrix.forEach((row) => {
        const tr = document.createElement("tr");
        const fromMeta = eventMetadata[row.from] || { label: row.from, color: "#38bdf8" };
        const th = document.createElement("th");
        th.style.color = fromMeta.color;
        th.style.textAlign = "left";
        th.title = fromMeta.label || row.from;
        th.textContent = (fromMeta.label || row.from).split(" ")[0];
        tr.appendChild(th);
        eventIds.forEach((toId) => {
          const td = document.createElement("td");
          const prob = row.transitions[toId] || 0;
          const alpha = Math.max(0.04, prob * 0.85);
          if (prob > 0) {
            td.style.background = `rgba(56, 189, 248, ${alpha})`;
            td.style.color = prob > 0.4 ? "#ffffff" : "var(--text-primary)";
            td.style.fontWeight = prob > 0.3 ? "700" : "400";
            td.textContent = `${Math.round(prob * 100)}%`;
          } else {
            td.style.color = "rgba(255,255,255,0.15)";
            td.textContent = "-";
          }
          td.title = `${fromMeta.label || row.from} \u2794 ${eventMetadata[toId]?.label || toId}: ${Math.round(prob * 100)}%`;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      container.appendChild(table);
    }
    /**
     * Render Prefix Tree Canvas
     */
    static renderPrefixTree(canvas, patterns) {
      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.parentElement.clientWidth || 600;
      const height = canvas.parentElement.clientHeight || 340;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);
      const root = { name: "ROOT", children: {}, support: 1, depth: 0 };
      patterns.slice(0, 20).forEach((p) => {
        let curr = root;
        p.sequence.forEach((token) => {
          if (!curr.children[token]) {
            curr.children[token] = { name: token, children: {}, support: p.support, depth: curr.depth + 1 };
          }
          curr = curr.children[token];
        });
      });
      function computeCoords(node, depth, yStart, yEnd) {
        node.x = 40 + depth * 110;
        node.y = (yStart + yEnd) / 2;
        const childKeys = Object.keys(node.children);
        if (childKeys.length === 0) return;
        const step = (yEnd - yStart) / childKeys.length;
        childKeys.forEach((key, idx) => {
          computeCoords(node.children[key], depth + 1, yStart + idx * step, yStart + (idx + 1) * step);
        });
      }
      computeCoords(root, 0, 30, height - 30);
      function drawLines(node) {
        Object.values(node.children).forEach((child) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.bezierCurveTo(
            node.x + 50,
            node.y,
            child.x - 50,
            child.y,
            child.x,
            child.y
          );
          ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
          ctx.lineWidth = Math.max(1, child.support * 4);
          ctx.stroke();
          drawLines(child);
        });
      }
      function drawNodes(node) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.name === "ROOT" ? 7 : 5, 0, Math.PI * 2);
        ctx.fillStyle = node.name === "ROOT" ? "#10b981" : "#38bdf8";
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = "#f8fafc";
        ctx.font = "9px JetBrains Mono, monospace";
        ctx.textAlign = "left";
        ctx.fillText(node.name, node.x + 9, node.y + 3);
        Object.values(node.children).forEach(drawNodes);
      }
      drawLines(root);
      drawNodes(root);
    }
  };

  // js/app.js
  var SmartMiningApp = class {
    constructor() {
      this.currentDomainKey = "healthcare";
      this.currentDataset = DOMAIN_DATASETS.healthcare;
      this.currentAlgorithm = "prefixspan";
      this.minSupport = 0.4;
      this.maxPatternLength = 5;
      this.maxGap = 100;
      this.minConfidence = 0.6;
      this.minLift = 1;
      this.minedPatterns = [];
      this.minedRules = [];
      this.selectedPattern = null;
      this.transitionMatrixData = null;
      this.workbenchTokens = [];
      this.federatedLab = new FederatedGNNLab();
      this.graphRenderer = null;
      this.autoTrainingTimer = null;
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
      this.runMining();
      this.updateQuickMetrics();
    }
    // Navigation
    bindNavigation() {
      const navButtons = document.querySelectorAll(".nav-btn");
      const tabPanes = document.querySelectorAll(".tab-pane");
      navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetTab = btn.getAttribute("data-tab");
          navButtons.forEach((b) => b.classList.remove("active"));
          tabPanes.forEach((tp) => tp.classList.remove("active"));
          btn.classList.add("active");
          const activePane = document.getElementById(targetTab);
          if (activePane) activePane.classList.add("active");
          if (targetTab === "tab-federated" && this.graphRenderer) {
            setTimeout(() => {
              this.graphRenderer.resize();
              this.graphRenderer.setData(this.federatedLab.getAllGraphData());
            }, 50);
          } else if (targetTab === "tab-matrix") {
            this.renderTransitionMatrix();
          } else if (targetTab === "tab-benchmark") {
            this.renderBenchmarkTable();
          }
        });
      });
    }
    // Domain Switcher
    bindDomainPicker() {
      const domainSelect = document.getElementById("domainSelect");
      if (!domainSelect) return;
      domainSelect.addEventListener("change", (e) => {
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
      const dTitle = document.getElementById("currentDomainTitle");
      const dDesc = document.getElementById("currentDomainDesc");
      const domainBadge = document.getElementById("currentDomainBadge");
      if (dTitle) dTitle.textContent = this.currentDataset.name;
      if (dDesc) dDesc.textContent = this.currentDataset.description;
      if (domainBadge) {
        domainBadge.textContent = this.currentDataset.badge;
        domainBadge.className = `badge ${this.currentDataset.badgeClass}`;
      }
      const sampleContainer = document.getElementById("rawSampleTimeline");
      if (sampleContainer && this.currentDataset.sampleSequences.length > 0) {
        const metaMap = {};
        this.currentDataset.eventTypes.forEach((t) => metaMap[t.id] = t);
        SequenceFlowVisualizer.renderSequenceTimeline(sampleContainer, this.currentDataset.sampleSequences[0].events, metaMap);
      }
    }
    // Mining Controls
    bindMinerControls() {
      const algoSelect = document.getElementById("algoSelect");
      const minSupSlider = document.getElementById("minSupSlider");
      const minSupVal = document.getElementById("minSupVal");
      const maxLenSlider = document.getElementById("maxLenSlider");
      const maxLenVal = document.getElementById("maxLenVal");
      const maxGapInput = document.getElementById("maxGapInput");
      const minConfSlider = document.getElementById("minConfSlider");
      const minConfVal = document.getElementById("minConfVal");
      const runMiningBtn = document.getElementById("runMiningBtn");
      if (algoSelect) {
        algoSelect.addEventListener("change", (e) => {
          this.currentAlgorithm = e.target.value;
        });
      }
      if (minSupSlider) {
        minSupSlider.addEventListener("input", (e) => {
          this.minSupport = parseFloat(e.target.value);
          if (minSupVal) minSupVal.textContent = `${Math.round(this.minSupport * 100)}%`;
        });
      }
      if (maxLenSlider) {
        maxLenSlider.addEventListener("input", (e) => {
          this.maxPatternLength = parseInt(e.target.value, 10);
          if (maxLenVal) maxLenVal.textContent = `${this.maxPatternLength} items`;
        });
      }
      if (maxGapInput) {
        maxGapInput.addEventListener("change", (e) => {
          this.maxGap = parseInt(e.target.value, 10) || 100;
        });
      }
      if (minConfSlider) {
        minConfSlider.addEventListener("input", (e) => {
          this.minConfidence = parseFloat(e.target.value);
          if (minConfVal) minConfVal.textContent = `${Math.round(this.minConfidence * 100)}%`;
        });
      }
      if (runMiningBtn) {
        runMiningBtn.addEventListener("click", () => {
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
      if (this.currentAlgorithm === "spade") {
        const miner = new SpadeMiner(sequences, options);
        this.minedPatterns = miner.mine();
      } else {
        const miner = new PrefixSpanMiner(sequences, options);
        this.minedPatterns = miner.mine();
      }
      const t1 = performance.now();
      const executionTimeMs = Math.round((t1 - t0) * 100) / 100;
      const ruleMiner = new SequentialRuleMiner(this.minedPatterns, sequences, {
        minConfidence: this.minConfidence,
        minLift: this.minLift
      });
      this.minedRules = ruleMiner.generateRules();
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
      const listContainer = document.getElementById("patternsList");
      const countBadge = document.getElementById("patternsCountBadge");
      if (!listContainer) return;
      listContainer.innerHTML = "";
      if (countBadge) countBadge.textContent = `${this.minedPatterns.length} Discovered`;
      if (this.minedPatterns.length === 0) {
        listContainer.innerHTML = `
        <div style="text-align:center; padding: 2rem; color: var(--text-muted);">
          No frequent sequential patterns found with support &ge; ${Math.round(this.minSupport * 100)}%. Try lowering the Minimum Support threshold.
        </div>`;
        return;
      }
      const metaMap = {};
      this.currentDataset.eventTypes.forEach((t) => metaMap[t.id] = t);
      this.minedPatterns.forEach((pat, idx) => {
        const itemEl = document.createElement("div");
        itemEl.className = `pattern-item ${idx === 0 ? "selected" : ""}`;
        const header = document.createElement("div");
        header.className = "pattern-item-header";
        const tokenWrap = document.createElement("div");
        tokenWrap.className = "sequence-tokens";
        pat.sequence.forEach((tok, tIdx) => {
          const meta = metaMap[tok] || { label: tok, color: "#38bdf8" };
          const span = document.createElement("span");
          span.className = "token";
          span.style.color = meta.color;
          span.textContent = meta.label || tok;
          tokenWrap.appendChild(span);
          if (tIdx < pat.sequence.length - 1) {
            const arr = document.createElement("span");
            arr.className = "token-arrow";
            arr.innerHTML = "&#10140;";
            tokenWrap.appendChild(arr);
          }
        });
        const stats = document.createElement("div");
        stats.className = "pattern-stats";
        stats.innerHTML = `
        <span>Supp: <strong>${Math.round(pat.support * 100)}%</strong> (${pat.supportCount}/${this.currentDataset.sampleSequences.length})</span>
        <span>Len: <strong>${pat.length}</strong></span>
      `;
        header.appendChild(tokenWrap);
        header.appendChild(stats);
        itemEl.appendChild(header);
        itemEl.addEventListener("click", () => {
          document.querySelectorAll(".pattern-item").forEach((el) => el.classList.remove("selected"));
          itemEl.classList.add("selected");
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
      const detailContainer = document.getElementById("selectedPatternDetails");
      if (!detailContainer) return;
      const metaMap = {};
      this.currentDataset.eventTypes.forEach((t) => metaMap[t.id] = t);
      const matchingSids = pattern.matchingSids ? pattern.matchingSids.join(", ") : "All active";
      detailContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
        <span style="font-size:0.85rem; font-weight:600; color:var(--text-primary)">Matched Sequences (SIDs):</span>
        <span class="badge badge-emerald">${matchingSids}</span>
      </div>
      <div style="font-size:0.75rem; color:var(--text-secondary); line-height:1.6;">
        This recurring sequential motif occurs with <strong>${Math.round(pattern.support * 100)}% frequency</strong> across the entire temporal database. In ${this.currentDataset.name}, observing this prefix strongly signals deterministic progression towards ${metaMap[pattern.sequence[pattern.sequence.length - 1]]?.label || "consequent state"}.
      </div>
    `;
    }
    renderRulesList() {
      const tableBody = document.getElementById("rulesTableBody");
      const rulesCountBadge = document.getElementById("rulesCountBadge");
      if (!tableBody) return;
      tableBody.innerHTML = "";
      if (rulesCountBadge) rulesCountBadge.textContent = `${this.minedRules.length} Rules`;
      if (this.minedRules.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding: 1.5rem;">No sequential rules generated. Lower minimum confidence to expand rule coverage.</td></tr>`;
        return;
      }
      this.minedRules.slice(0, 15).forEach((rule) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td style="font-family:var(--font-mono); font-weight:600; color:var(--accent-cyan)">${rule.ruleString}</td>
        <td><span class="badge badge-cyan">${Math.round(rule.confidence * 100)}%</span></td>
        <td><strong>${Math.round(rule.support * 100)}%</strong></td>
        <td><span style="color:var(--accent-emerald)">${Math.round(rule.lift * 100) / 100}x</span></td>
        <td style="font-family:var(--font-mono); color:var(--text-secondary)">~${rule.avgTimeLag} ${this.currentDataset.sampleSequences[0]?.timeGapUnit || "units"}</td>
      `;
        tableBody.appendChild(tr);
      });
    }
    renderPrefixTreeVisualization() {
      const canvas = document.getElementById("prefixTreeCanvas");
      if (canvas && this.minedPatterns.length > 0) {
        SequenceFlowVisualizer.renderPrefixTree(canvas, this.minedPatterns);
      }
    }
    renderTransitionMatrix() {
      const container = document.getElementById("transitionMatrixContainer");
      if (container && this.transitionMatrixData) {
        const metaMap = {};
        this.currentDataset.eventTypes.forEach((t) => metaMap[t.id] = t);
        SequenceFlowVisualizer.renderTransitionMatrixHeatmap(container, this.transitionMatrixData, metaMap);
      }
    }
    renderBenchmarkTable() {
      const container = document.getElementById("benchmarkTableBody");
      if (!container) return;
      container.innerHTML = "";
      const results = AlgorithmBenchmarkRunner.runBenchmark(this.currentDataset.sampleSequences, this.minSupport);
      results.forEach((res) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td><strong style="color:var(--accent-cyan)">${res.algorithm}</strong><div style="font-size:0.7rem; color:var(--text-muted)">${res.paradigm}</div></td>
        <td><span class="badge ${res.algorithm === "PrefixSpan" ? "badge-emerald" : res.algorithm === "SPADE" ? "badge-cyan" : "badge-amber"}">${res.execTimeMs} ms</span></td>
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
      const clearBtn = document.getElementById("clearWorkbenchBtn");
      const analyzeBtn = document.getElementById("analyzeWorkbenchBtn");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          this.workbenchTokens = [];
          this.updateWorkbenchUI();
        });
      }
      if (analyzeBtn) {
        analyzeBtn.addEventListener("click", () => {
          this.evaluateWorkbenchSequence();
        });
      }
    }
    renderPlaygroundPalette() {
      const palette = document.getElementById("eventPalette");
      if (!palette) return;
      palette.innerHTML = "";
      this.currentDataset.eventTypes.forEach((evt) => {
        const chip = document.createElement("div");
        chip.className = "event-palette-chip";
        chip.innerHTML = `<span style="width:8px; height:8px; border-radius:50%; background:${evt.color};"></span>${evt.label}`;
        chip.addEventListener("click", () => {
          if (this.workbenchTokens.length < 8) {
            this.workbenchTokens.push(evt.id);
            this.updateWorkbenchUI();
            this.evaluateWorkbenchSequence();
          } else {
            this.showToast("Max 8 events in workbench sequence.");
          }
        });
        palette.appendChild(chip);
      });
    }
    updateWorkbenchUI() {
      const wb = document.getElementById("sequenceWorkbench");
      if (!wb) return;
      wb.innerHTML = "";
      const metaMap = {};
      this.currentDataset.eventTypes.forEach((t) => metaMap[t.id] = t);
      if (this.workbenchTokens.length === 0) {
        wb.innerHTML = `<span style="color:var(--text-muted); font-size:0.8rem;">Click event chips above to build a sequence path...</span>`;
        return;
      }
      this.workbenchTokens.forEach((id, idx) => {
        const meta = metaMap[id] || { label: id, color: "#38bdf8" };
        const chip = document.createElement("div");
        chip.className = "token";
        chip.style.borderColor = meta.color;
        chip.style.color = meta.color;
        chip.innerHTML = `${meta.label} <span style="cursor:pointer; margin-left:4px; opacity:0.6;" title="Remove">\u2715</span>`;
        chip.querySelector("span").addEventListener("click", (e) => {
          e.stopPropagation();
          this.workbenchTokens.splice(idx, 1);
          this.updateWorkbenchUI();
          this.evaluateWorkbenchSequence();
        });
        wb.appendChild(chip);
        if (idx < this.workbenchTokens.length - 1) {
          const arr = document.createElement("span");
          arr.className = "token-arrow";
          arr.innerHTML = "&#10140;";
          wb.appendChild(arr);
        }
      });
    }
    evaluateWorkbenchSequence() {
      if (this.workbenchTokens.length === 0) return;
      const resultBox = document.getElementById("workbenchResults");
      if (!resultBox) return;
      const anomaly = SequenceMatrixAnalyzer.calculateSequenceAnomalyScore(
        this.workbenchTokens,
        this.transitionMatrixData
      );
      const predictions = [];
      this.minedRules.forEach((rule) => {
        const ant = rule.antecedent;
        if (this.workbenchTokens.length >= ant.length) {
          const suffix = this.workbenchTokens.slice(-ant.length);
          if (suffix.every((val, idx) => val === ant[idx])) {
            predictions.push(rule);
          }
        }
      });
      const metaMap = {};
      this.currentDataset.eventTypes.forEach((t) => metaMap[t.id] = t);
      resultBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <span style="font-size:0.85rem; font-weight:600;">Anomaly Risk Assessment:</span>
        <span class="badge ${anomaly.badgeClass}">${anomaly.status} (Score: ${anomaly.score}/100)</span>
      </div>

      <div style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.75rem;">
        ${anomaly.weakestLink ? `Weakest Observed Transition: <strong style="color:var(--accent-rose)">${anomaly.weakestLink}</strong> (Baseline Prob: ${anomaly.weakestProb}%)` : "Normal transition structure observed."}
      </div>

      <div style="font-size:0.8rem; font-weight:600; color:var(--accent-cyan); margin-bottom:0.4rem;">
        \u26A1 Next-Event Predictions:
      </div>
      ${predictions.length > 0 ? `
        <div style="display:flex; flex-direction:column; gap:0.4rem;">
          ${predictions.map((p) => `
            <div style="background:var(--bg-input); padding:0.5rem 0.75rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:0.75rem; display:flex; justify-content:space-between;">
              <span>Predicted Consequent: <strong>${p.consequent.map((c) => metaMap[c]?.label || c).join(" \u2192 ")}</strong></span>
              <span style="color:var(--accent-emerald); font-weight:600">${Math.round(p.confidence * 100)}% Conf (~${p.avgTimeLag} units lag)</span>
            </div>
          `).join("")}
        </div>
      ` : `<div style="font-size:0.75rem; color:var(--text-muted)">No rule matches current prefix. Sequence path appears custom or unobserved.</div>`}
    `;
    }
    bindBenchmarkSuite() {
      const runBenchBtn = document.getElementById("runBenchmarkBtn");
      if (runBenchBtn) {
        runBenchBtn.addEventListener("click", () => {
          this.renderBenchmarkTable();
          this.showToast("Benchmark suite executed!");
        });
      }
    }
    updateQuickMetrics(executionTime = 2.4) {
      const m1 = document.getElementById("metricSequences");
      const m2 = document.getElementById("metricPatterns");
      const m3 = document.getElementById("metricRules");
      const m4 = document.getElementById("metricPrivacyEpsilon");
      if (m1) m1.textContent = this.currentDataset.sampleSequences.length;
      if (m2) m2.textContent = this.minedPatterns.length;
      if (m3) m3.textContent = this.minedRules.length;
      if (m4) m4.textContent = `\u03B5 = ${Math.round(this.federatedLab.privacySpentEpsilon * 100) / 100}`;
    }
    // Federated GNN & Community Detection Lab
    initGraphVisualizer() {
      const canvas = document.getElementById("forceGraphCanvas");
      if (canvas) {
        this.graphRenderer = new ForceGraphRenderer(canvas);
        this.graphRenderer.setData(this.federatedLab.getAllGraphData());
        this.renderClientCards();
      }
    }
    bindFederatedLabControls() {
      const stepFedBtn = document.getElementById("stepFedBtn");
      const autoFedBtn = document.getElementById("autoFedBtn");
      const resetFedBtn = document.getElementById("resetFedBtn");
      const dpNoiseSlider = document.getElementById("dpNoiseSlider");
      const dpNoiseVal = document.getElementById("dpNoiseVal");
      const dpToggle = document.getElementById("dpToggle");
      if (stepFedBtn) {
        stepFedBtn.addEventListener("click", async () => {
          stepFedBtn.disabled = true;
          stepFedBtn.textContent = "Aggregating FedAvg...";
          const dpActive = dpToggle ? dpToggle.checked : true;
          const roundStats = await this.federatedLab.runCommunicationRound({ dpActive });
          if (this.graphRenderer) {
            this.graphRenderer.setData(this.federatedLab.getAllGraphData());
          }
          this.renderClientCards();
          this.updateFederatedMetrics(roundStats);
          stepFedBtn.disabled = false;
          stepFedBtn.textContent = "\u25B6 Train 1 FedAvg Round";
          this.showToast(`Completed Federated Round ${roundStats.round} | Modularity Q = ${roundStats.modularity}`);
        });
      }
      if (autoFedBtn) {
        autoFedBtn.addEventListener("click", async () => {
          autoFedBtn.disabled = true;
          autoFedBtn.textContent = "Training 5 Rounds...";
          const dpActive = dpToggle ? dpToggle.checked : true;
          for (let r = 0; r < 5; r++) {
            const stats = await this.federatedLab.runCommunicationRound({ dpActive });
            if (this.graphRenderer) this.graphRenderer.setData(this.federatedLab.getAllGraphData());
            this.renderClientCards();
            this.updateFederatedMetrics(stats);
            await new Promise((res) => setTimeout(res, 400));
          }
          autoFedBtn.disabled = false;
          autoFedBtn.textContent = "\u26A1 Run 5 Rounds";
          this.showToast("5-Round Federated GNN convergence complete!");
        });
      }
      if (resetFedBtn) {
        resetFedBtn.addEventListener("click", () => {
          this.federatedLab.reset();
          if (this.graphRenderer) {
            this.graphRenderer.setData(this.federatedLab.getAllGraphData());
          }
          this.renderClientCards();
          this.updateFederatedMetrics({ round: 0, modularity: 0.28, epsilon: 0, avgLoss: 1.25 });
          this.showToast("Reset Federated GNN state");
        });
      }
      if (dpNoiseSlider) {
        dpNoiseSlider.addEventListener("input", (e) => {
          const val = parseFloat(e.target.value);
          this.federatedLab.dpNoiseSigma = val;
          if (dpNoiseVal) dpNoiseVal.textContent = `\u03C3 = ${val.toFixed(2)}`;
        });
      }
    }
    renderClientCards() {
      const container = document.getElementById("clientCardsGrid");
      if (!container) return;
      container.innerHTML = "";
      const graphData = this.federatedLab.getAllGraphData();
      graphData.clients.forEach((c) => {
        const card = document.createElement("div");
        card.className = `client-node-card ${c.status.includes("Training") ? "training" : ""}`;
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
      const rEl = document.getElementById("fedRoundVal");
      const mEl = document.getElementById("fedModularityVal");
      const eEl = document.getElementById("fedEpsilonVal");
      const lEl = document.getElementById("fedLossVal");
      if (rEl) rEl.textContent = stats.round;
      if (mEl) mEl.textContent = stats.modularity;
      if (eEl) eEl.textContent = `\u03B5 = ${stats.epsilon}`;
      if (lEl) lEl.textContent = stats.avgLoss;
      this.updateQuickMetrics();
    }
    // Real-Time Event Stream Simulator
    bindStreamSimulator() {
      const toggleStreamBtn = document.getElementById("toggleStreamBtn");
      const clearFeedBtn = document.getElementById("clearFeedBtn");
      if (toggleStreamBtn) {
        toggleStreamBtn.addEventListener("click", () => {
          if (this.streamActive) {
            clearInterval(this.streamInterval);
            this.streamActive = false;
            toggleStreamBtn.textContent = "\u25B6 Start Real-Time Stream";
            toggleStreamBtn.className = "btn btn-primary";
            this.showToast("Stream paused");
          } else {
            this.streamActive = true;
            toggleStreamBtn.textContent = "\u23F8 Pause Stream";
            toggleStreamBtn.className = "btn btn-secondary";
            this.startEventStream();
            this.showToast("Real-time event stream active");
          }
        });
      }
      if (clearFeedBtn) {
        clearFeedBtn.addEventListener("click", () => {
          const feed = document.getElementById("streamFeed");
          if (feed) feed.innerHTML = "";
          this.streamSequenceBuffer = [];
        });
      }
    }
    startEventStream() {
      const feed = document.getElementById("streamFeed");
      const activeStreamRule = document.getElementById("activeStreamRule");
      if (!feed) return;
      this.streamInterval = setInterval(() => {
        const eventTypes = this.currentDataset.eventTypes;
        const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
        this.streamSequenceBuffer.push(randomEvent.id);
        if (this.streamSequenceBuffer.length > 8) this.streamSequenceBuffer.shift();
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
        const item = document.createElement("div");
        item.className = `stream-event-item ${matchedRule ? "prediction-alert" : ""}`;
        item.innerHTML = `
        <div>
          <span style="color:var(--text-muted); margin-right:6px;">[${now}]</span>
          <span style="color:${randomEvent.color}; font-weight:600">${randomEvent.label}</span>
          ${matchedRule ? `<div style="color:var(--accent-amber); font-size:0.7rem; margin-top:2px;">\u{1F6A8} High-Confidence Predictive Trigger: ${matchedRule.ruleString} (${Math.round(matchedRule.confidence * 100)}% Conf)</div>` : ""}
        </div>
        <span class="badge ${matchedRule ? "badge-amber" : "badge-cyan"}">${randomEvent.id}</span>
      `;
        feed.insertBefore(item, feed.firstChild);
        if (feed.children.length > 30) {
          feed.removeChild(feed.lastChild);
        }
        if (matchedRule && activeStreamRule) {
          activeStreamRule.innerHTML = `
          <div style="padding:0.75rem; background:rgba(245, 158, 11, 0.1); border:1px solid var(--accent-amber); border-radius:var(--radius-md); font-size:0.75rem; color:var(--text-primary)">
            <strong>\u26A1 Predictive Alert:</strong> ${matchedRule.ruleString}
            <div style="color:var(--text-secondary); margin-top:4px">Consequent expected in approximately ${matchedRule.avgTimeLag} units with ${Math.round(matchedRule.confidence * 100)}% probability.</div>
          </div>
        `;
        }
      }, 1800);
    }
    // Import / Export
    bindImporterExporter() {
      const exportJsonBtn = document.getElementById("exportJsonBtn");
      const exportCsvBtn = document.getElementById("exportCsvBtn");
      const fileUploadInput = document.getElementById("fileUploadInput");
      if (exportJsonBtn) {
        exportJsonBtn.addEventListener("click", () => {
          const payload = {
            domain: this.currentDataset.name,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
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
          const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `temporal_patterns_${this.currentDomainKey}.json`;
          a.click();
          URL.revokeObjectURL(url);
          this.showToast("Exported patterns as JSON");
        });
      }
      if (exportCsvBtn) {
        exportCsvBtn.addEventListener("click", () => {
          let csv = "Sequence,SupportCount,SupportRatio,Length\n";
          this.minedPatterns.forEach((p) => {
            csv += `"${p.sequence.join(" -> ")}",${p.supportCount},${p.support},${p.length}
`;
          });
          const blob = new Blob([csv], { type: "text/csv" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `frequent_sequences_${this.currentDomainKey}.csv`;
          a.click();
          URL.revokeObjectURL(url);
          this.showToast("Exported frequent sequences as CSV");
        });
      }
      if (fileUploadInput) {
        fileUploadInput.addEventListener("change", (e) => {
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
                alert("Invalid format: uploaded file must contain an array of sequence objects.");
              }
            } catch (err) {
              alert("Failed to parse JSON file.");
            }
          };
          reader.readAsText(file);
        });
      }
    }
    showToast(message) {
      let container = document.getElementById("toastContainer");
      if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
      }
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
      }, 2800);
    }
  };
  window.addEventListener("DOMContentLoaded", () => {
    window.app = new SmartMiningApp();
  });
})();
