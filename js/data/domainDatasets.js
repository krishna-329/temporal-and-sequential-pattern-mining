/**
 * Domain Datasets for Temporal and Sequential Pattern Mining in Smart Systems
 * Domains: Healthcare, Finance, Smart Cities, Social Networks
 */

export const DOMAIN_DATASETS = {
  healthcare: {
    id: 'healthcare',
    name: 'Smart Healthcare & Clinical Pathways',
    description: 'Patient trajectories, electronic health records (EHR), diagnoses, lab results, and medication sequences.',
    badge: 'Clinical EHR',
    badgeClass: 'badge-cyan',
    metrics: {
      records: '1,420 Patients',
      avgLength: '5.8 Events/Seq',
      samplingRate: 'Hourly/Daily',
      vocabularySize: 18
    },
    eventTypes: [
      { id: 'EHR_ADMIT', label: 'ER Admission', color: '#f43f5e' },
      { id: 'LAB_GLUCOSE_HIGH', label: 'High Glucose (>180)', color: '#fb923c' },
      { id: 'LAB_TROPONIN_ELEV', label: 'Elevated Troponin', color: '#ef4444' },
      { id: 'MED_INSULIN', label: 'IV Insulin Admin', color: '#38bdf8' },
      { id: 'MED_BETA_BLOCKER', label: 'Beta Blocker Dose', color: '#818cf8' },
      { id: 'DIAG_CAD', label: 'CAD Diagnosis', color: '#ec4899' },
      { id: 'DIAG_DIABETES_T2', label: 'Type-2 Diabetes Diag', color: '#eab308' },
      { id: 'PROC_ECG', label: '12-Lead ECG Test', color: '#10b981' },
      { id: 'PROC_ANGIO', label: 'Coronary Angiography', color: '#a855f7' },
      { id: 'ICU_TRANSFER', label: 'ICU Transfer', color: '#e11d48' },
      { id: 'STABILIZED', label: 'Vitals Stabilized', color: '#34d399' },
      { id: 'DISCHARGE', label: 'Hospital Discharge', color: '#22c55e' },
      { id: 'READMIT_30D', label: '30-Day Readmission', color: '#f97316' }
    ],
    sampleSequences: [
      {
        sid: 'P-101',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Patient presents acute chest pain' },
          { item: 'PROC_ECG', timestamp: 1, desc: 'ST elevation noted' },
          { item: 'LAB_TROPONIN_ELEV', timestamp: 2, desc: 'Troponin > 0.04 ng/mL' },
          { item: 'MED_BETA_BLOCKER', timestamp: 3, desc: 'Metoprolol 25mg' },
          { item: 'PROC_ANGIO', timestamp: 6, desc: 'Stent placement completed' },
          { item: 'STABILIZED', timestamp: 24, desc: 'Vitals normal' },
          { item: 'DISCHARGE', timestamp: 48, desc: 'Discharged with prescription' }
        ]
      },
      {
        sid: 'P-102',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Diabetic ketoacidosis episode' },
          { item: 'LAB_GLUCOSE_HIGH', timestamp: 1, desc: 'Blood sugar 340 mg/dL' },
          { item: 'MED_INSULIN', timestamp: 2, desc: 'IV Infusion started' },
          { item: 'DIAG_DIABETES_T2', timestamp: 5, desc: 'Updated staging' },
          { item: 'STABILIZED', timestamp: 18, desc: 'Glucose normalized to 110' },
          { item: 'DISCHARGE', timestamp: 36, desc: 'Patient education completed' },
          { item: 'READMIT_30D', timestamp: 240, desc: 'Recurrent hyperosmolar crisis' }
        ]
      },
      {
        sid: 'P-103',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Severe dyspnea and hypertension' },
          { item: 'PROC_ECG', timestamp: 1, desc: 'Arrhythmia detected' },
          { item: 'LAB_TROPONIN_ELEV', timestamp: 3, desc: 'Mild cardiac strain' },
          { item: 'MED_BETA_BLOCKER', timestamp: 4, desc: 'Beta blocker administered' },
          { item: 'ICU_TRANSFER', timestamp: 8, desc: 'Critical monitoring needed' },
          { item: 'STABILIZED', timestamp: 32, desc: 'Heart rate normalized' },
          { item: 'DISCHARGE', timestamp: 72, desc: 'Discharged stable' }
        ]
      },
      {
        sid: 'P-104',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Emergency admission' },
          { item: 'LAB_GLUCOSE_HIGH', timestamp: 1, desc: 'High glucose test' },
          { item: 'MED_INSULIN', timestamp: 3, desc: 'Insulin titration' },
          { item: 'STABILIZED', timestamp: 20, desc: 'Vitals stable' },
          { item: 'DISCHARGE', timestamp: 40, desc: 'Routine discharge' }
        ]
      },
      {
        sid: 'P-105',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Chest tightness' },
          { item: 'PROC_ECG', timestamp: 2, desc: 'ECG abnormal' },
          { item: 'LAB_TROPONIN_ELEV', timestamp: 3, desc: 'Troponin positive' },
          { item: 'MED_BETA_BLOCKER', timestamp: 5, desc: 'Medication administered' },
          { item: 'PROC_ANGIO', timestamp: 10, desc: 'Angioplasty performed' },
          { item: 'STABILIZED', timestamp: 30, desc: 'Recovery room' },
          { item: 'DISCHARGE', timestamp: 54, desc: 'Patient released' },
          { item: 'READMIT_30D', timestamp: 300, desc: 'Post-op complications' }
        ]
      },
      {
        sid: 'P-106',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Syncope evaluation' },
          { item: 'PROC_ECG', timestamp: 1, desc: 'Sinus bradycardia' },
          { item: 'LAB_GLUCOSE_HIGH', timestamp: 3, desc: 'Hyperglycemia noted' },
          { item: 'MED_INSULIN', timestamp: 4, desc: 'Insulin injection' },
          { item: 'STABILIZED', timestamp: 16, desc: 'Blood sugar regulated' },
          { item: 'DISCHARGE', timestamp: 28, desc: 'Discharge with clinic follow-up' }
        ]
      },
      {
        sid: 'P-107',
        timeGapUnit: 'hours',
        events: [
          { item: 'EHR_ADMIT', timestamp: 0, desc: 'Cardiac arrest resuscitation' },
          { item: 'PROC_ECG', timestamp: 1, desc: 'Ventricular fibrillation' },
          { item: 'LAB_TROPONIN_ELEV', timestamp: 2, desc: 'Massive cardiac enzyme release' },
          { item: 'ICU_TRANSFER', timestamp: 3, desc: 'Emergency ICU bed' },
          { item: 'MED_BETA_BLOCKER', timestamp: 6, desc: 'Continuous drip' },
          { item: 'PROC_ANGIO', timestamp: 12, desc: 'Bypass prep' },
          { item: 'STABILIZED', timestamp: 48, desc: 'Stable hemodynamics' },
          { item: 'DISCHARGE', timestamp: 120, desc: 'Transferred to rehab' }
        ]
      }
    ]
  },

  finance: {
    id: 'finance',
    name: 'Smart Finance & Fraud Cascades',
    description: 'High-frequency transaction logs, ATM withdrawals, multi-hop shell transfers, and card-not-present fraud sequences.',
    badge: 'Fraud & Risk',
    badgeClass: 'badge-amber',
    metrics: {
      records: '5,800 Accounts',
      avgLength: '6.4 Events/Seq',
      samplingRate: 'Seconds/Minutes',
      vocabularySize: 15
    },
    eventTypes: [
      { id: 'AUTH_LOGIN_NEW_IP', label: 'Login (Foreign IP)', color: '#f43f5e' },
      { id: 'PWD_RESET', label: 'Password Reset', color: '#fb923c' },
      { id: 'BENEFICIARY_ADD', label: 'New Payee Added', color: '#f59e0b' },
      { id: 'MICRO_DEPOSIT_TEST', label: 'Micro-Txn Probe ($0.50)', color: '#eab308' },
      { id: 'HIGH_VAL_WIRE', label: 'High-Value Wire (>$10k)', color: '#ef4444' },
      { id: 'CRYPTO_EXCHANGE_OUT', label: 'Off-Ramp to Crypto', color: '#a855f7' },
      { id: 'ATM_CASH_MAX', label: 'ATM Daily Limit Drain', color: '#ec4899' },
      { id: 'MULTI_ACCT_SPLIT', label: 'Rapid Smurfing Split', color: '#818cf8' },
      { id: 'MERCHANT_POS_NORMAL', label: 'Standard Retail POS', color: '#10b981' },
      { id: 'ACCOUNT_DRAINED', label: 'Zero Balance Reached', color: '#e11d48' },
      { id: 'ALERT_FRAUD_LOCK', label: 'AML Engine Lock', color: '#38bdf8' }
    ],
    sampleSequences: [
      {
        sid: 'TX-901',
        timeGapUnit: 'mins',
        events: [
          { item: 'AUTH_LOGIN_NEW_IP', timestamp: 0, desc: 'IP: 185.220.101.4 (Tor exit node)' },
          { item: 'PWD_RESET', timestamp: 2, desc: 'MFA bypassed via SIM swap' },
          { item: 'BENEFICIARY_ADD', timestamp: 5, desc: 'Offshore mule account added' },
          { item: 'MICRO_DEPOSIT_TEST', timestamp: 7, desc: '$0.75 verification ping' },
          { item: 'HIGH_VAL_WIRE', timestamp: 12, desc: '$48,500 outgoing wire transfer' },
          { item: 'CRYPTO_EXCHANGE_OUT', timestamp: 18, desc: 'Swept to non-custodial wallet' }
        ]
      },
      {
        sid: 'TX-902',
        timeGapUnit: 'mins',
        events: [
          { item: 'AUTH_LOGIN_NEW_IP', timestamp: 0, desc: 'Suspicious overseas proxy' },
          { item: 'BENEFICIARY_ADD', timestamp: 4, desc: 'Shell corporate entity payee' },
          { item: 'MICRO_DEPOSIT_TEST', timestamp: 6, desc: '$1.00 micro payment' },
          { item: 'MULTI_ACCT_SPLIT', timestamp: 10, desc: 'Split into 5 micro-wires <$3k' },
          { item: 'ATM_CASH_MAX', timestamp: 25, desc: 'Concurrent ATM card cloning pulls' },
          { item: 'ACCOUNT_DRAINED', timestamp: 30, desc: 'Remaining balance $1.20' }
        ]
      },
      {
        sid: 'TX-903',
        timeGapUnit: 'mins',
        events: [
          { item: 'MERCHANT_POS_NORMAL', timestamp: 0, desc: 'Grocery store checkout $45' },
          { item: 'MERCHANT_POS_NORMAL', timestamp: 120, desc: 'Fuel station $60' },
          { item: 'AUTH_LOGIN_NEW_IP', timestamp: 300, desc: 'Midnight login overseas' },
          { item: 'PWD_RESET', timestamp: 303, desc: 'Credentials modified' },
          { item: 'HIGH_VAL_WIRE', timestamp: 310, desc: '$15,000 international transfer' },
          { item: 'ALERT_FRAUD_LOCK', timestamp: 312, desc: 'System automated freeze' }
        ]
      },
      {
        sid: 'TX-904',
        timeGapUnit: 'mins',
        events: [
          { item: 'AUTH_LOGIN_NEW_IP', timestamp: 0, desc: 'New device fingerprint' },
          { item: 'PWD_RESET', timestamp: 3, desc: 'Password changed' },
          { item: 'BENEFICIARY_ADD', timestamp: 6, desc: 'Unregistered beneficiary' },
          { item: 'HIGH_VAL_WIRE', timestamp: 15, desc: '$22,000 transfer requested' },
          { item: 'CRYPTO_EXCHANGE_OUT', timestamp: 20, desc: 'Binance deposit address' }
        ]
      },
      {
        sid: 'TX-905',
        timeGapUnit: 'mins',
        events: [
          { item: 'AUTH_LOGIN_NEW_IP', timestamp: 0, desc: 'VPN IP detected' },
          { item: 'BENEFICIARY_ADD', timestamp: 5, desc: 'Instant beneficiary creation' },
          { item: 'MICRO_DEPOSIT_TEST', timestamp: 8, desc: 'Ping transaction' },
          { item: 'MULTI_ACCT_SPLIT', timestamp: 12, desc: 'Layering fan-out' },
          { item: 'CRYPTO_EXCHANGE_OUT', timestamp: 25, desc: 'Monero converter bridge' }
        ]
      }
    ]
  },

  smartcity: {
    id: 'smartcity',
    name: 'Smart Cities & IoT Sensor Networks',
    description: 'Traffic flow sensor sequences, grid surge anomalies, pollution spikes, and emergency corridor events.',
    badge: 'IoT & Urban',
    badgeClass: 'badge-emerald',
    metrics: {
      records: '3,200 Sensor Clusters',
      avgLength: '7.1 Events/Seq',
      samplingRate: '15 Seconds',
      vocabularySize: 16
    },
    eventTypes: [
      { id: 'SENSOR_TRAFFIC_JAM_A', label: 'Arterial Bottleneck (85% Capacity)', color: '#f43f5e' },
      { id: 'SENSOR_TRAFFIC_JAM_B', label: 'Expressway Backup Spillover', color: '#ef4444' },
      { id: 'AIR_AQI_SPIKE', label: 'AQI PM2.5 Hazard (>200)', color: '#fb923c' },
      { id: 'GRID_VOLTAGE_DROP', label: 'Substation Voltage Sag', color: '#eab308' },
      { id: 'SIGNAL_ADAPT_TRIGGER', label: 'Smart Signal Green Wave', color: '#10b981' },
      { id: 'EV_CHARGING_SURGE', label: 'Fleet Supercharger Peak', color: '#38bdf8' },
      { id: 'EMERGENCY_CORRIDOR_ACT', label: 'Emergency Siren Priority', color: '#a855f7' },
      { id: 'TRAFFIC_FLOW_RESTORED', label: 'Congestion Cleared', color: '#34d399' }
    ],
    sampleSequences: [
      {
        sid: 'CITY-401',
        timeGapUnit: 'mins',
        events: [
          { item: 'SENSOR_TRAFFIC_JAM_A', timestamp: 0, desc: 'Downtown corridor gridlock' },
          { item: 'AIR_AQI_SPIKE', timestamp: 5, desc: 'Idling diesel emissions surge' },
          { item: 'SENSOR_TRAFFIC_JAM_B', timestamp: 8, desc: 'Spillover to Highway 101 Onramp' },
          { item: 'SIGNAL_ADAPT_TRIGGER', timestamp: 12, desc: 'AI dynamic green timing dispatched' },
          { item: 'TRAFFIC_FLOW_RESTORED', timestamp: 28, desc: 'Average speed restored to 45 mph' }
        ]
      },
      {
        sid: 'CITY-402',
        timeGapUnit: 'mins',
        events: [
          { item: 'EV_CHARGING_SURGE', timestamp: 0, desc: 'Transit depot buses plug in 6PM' },
          { item: 'GRID_VOLTAGE_DROP', timestamp: 4, desc: 'Feeder circuit voltage down 4%' },
          { item: 'SENSOR_TRAFFIC_JAM_A', timestamp: 10, desc: 'Commute rush peak' },
          { item: 'AIR_AQI_SPIKE', timestamp: 16, desc: 'Microclimate particulate warning' },
          { item: 'SIGNAL_ADAPT_TRIGGER', timestamp: 20, desc: 'Adaptive route clearing active' }
        ]
      },
      {
        sid: 'CITY-403',
        timeGapUnit: 'mins',
        events: [
          { item: 'SENSOR_TRAFFIC_JAM_A', timestamp: 0, desc: 'Multi-vehicle collision' },
          { item: 'SENSOR_TRAFFIC_JAM_B', timestamp: 3, desc: 'Severe arterial queue' },
          { item: 'EMERGENCY_CORRIDOR_ACT', timestamp: 5, desc: 'Ambulance GPS beacon priority' },
          { item: 'SIGNAL_ADAPT_TRIGGER', timestamp: 7, desc: 'All cross lights forced red' },
          { item: 'TRAFFIC_FLOW_RESTORED', timestamp: 35, desc: 'Incident tow cleared' }
        ]
      },
      {
        sid: 'CITY-404',
        timeGapUnit: 'mins',
        events: [
          { item: 'SENSOR_TRAFFIC_JAM_A', timestamp: 0, desc: 'Tunnel entrance bottleneck' },
          { item: 'AIR_AQI_SPIKE', timestamp: 4, desc: 'Ventilation sensors triggered' },
          { item: 'SENSOR_TRAFFIC_JAM_B', timestamp: 7, desc: 'Main junction stoppage' },
          { item: 'SIGNAL_ADAPT_TRIGGER', timestamp: 10, desc: 'Diverting traffic to bypass ring' },
          { item: 'TRAFFIC_FLOW_RESTORED', timestamp: 25, desc: 'Tunnel clear' }
        ]
      }
    ]
  },

  social: {
    id: 'social',
    name: 'Social Network & Distributed Communities',
    description: 'Multi-client privacy-preserving graphs, user interaction motifs, federated community detection.',
    badge: 'Federated GNN',
    badgeClass: 'badge-indigo',
    metrics: {
      records: '4 Distributed Silos',
      avgLength: '128 Nodes / Graph',
      samplingRate: 'Adjacency / Features',
      vocabularySize: 12
    },
    eventTypes: [
      { id: 'INTERACT_FOLLOW', label: 'Follow Connection', color: '#38bdf8' },
      { id: 'INTERACT_SHARE', label: 'Viral Content Retweet', color: '#10b981' },
      { id: 'COMMUNITY_JOIN', label: 'Special Interest Group Join', color: '#a855f7' },
      { id: 'ENCRYPTED_DM', label: 'Private End-to-End Chat', color: '#fb923c' },
      { id: 'CO_AUTHOR_PUB', label: 'Collaborative Research Co-Author', color: '#f59e0b' }
    ],
    sampleSequences: [
      {
        sid: 'SOC-201',
        timeGapUnit: 'days',
        events: [
          { item: 'COMMUNITY_JOIN', timestamp: 0, desc: 'Joined #DeepLearningLab group' },
          { item: 'INTERACT_FOLLOW', timestamp: 1, desc: 'Connected with key researchers' },
          { item: 'ENCRYPTED_DM', timestamp: 3, desc: 'Project brainstorming exchange' },
          { item: 'CO_AUTHOR_PUB', timestamp: 60, desc: 'Published preprint on arXiv' },
          { item: 'INTERACT_SHARE', timestamp: 62, desc: 'Preprint shared across 400 peers' }
        ]
      },
      {
        sid: 'SOC-202',
        timeGapUnit: 'days',
        events: [
          { item: 'COMMUNITY_JOIN', timestamp: 0, desc: 'Joined #FintechSecurity circle' },
          { item: 'ENCRYPTED_DM', timestamp: 2, desc: 'Bug bounty discussion' },
          { item: 'INTERACT_FOLLOW', timestamp: 5, desc: 'Followed security lead' },
          { item: 'INTERACT_SHARE', timestamp: 10, desc: 'Shared vulnerability alert' }
        ]
      }
    ]
  }
};
