/* =========================================================
   MODULE CARD DATA
   Fill in the TODO placeholders (resource + repo links) with
   your real Google Drive share links or GitHub repo URLs.
   Everything else is already populated from your coursework.
========================================================= */

const MODULES_DATA = {

  1: {
    title: "Module 1 — Telecommunications Fundamentals",
    tagline: "Signals, channels, and the transmitter–receiver model",
    lecture: "Covers the definition and scope of telecommunications, the transmitter–channel–receiver model, analog vs. digital communication, and how network topologies (star, mesh, ring, bus) affect performance, reliability, and scalability.",
    labs: [
      "Assignment 1 — Telecom fundamentals & topology comparison",
      "Lab 1, Part 1 — TV remote mapped to transmitter/channel/receiver model",
      "Lab 1, Part 2 — BPSK modulation & noisy-channel simulation (Python/Colab)"
    ],
    screenshots: [
      { src: "assets/module1_bpsk_plot.png", caption: "BPSK signal chain: baseband bits → carrier → transmitted signal → recovered signal after noise (Lab 1, Part 2)." },
      { src: "assets/module1_topology.png", caption: "Network topology types referenced in Assignment 1 (Q5)." }
    ],
    resources: [
      { label: "Assignment 1 (DOCX)", url: "docs/module1_assignment1.docx" },
      { label: "Lab 1 – Part 1 (PDF)", url: "docs/module1_lab1_part1.pdf" },
      { label: "Lab 1 – Part 2 code (PDF)", url: "docs/module1_lab1_part2.pdf" }
    ],
    repo: { label: "Lab 1 Colab notebook", url: "https://colab.research.google.com/drive/12FFz7pUmi4u2VaQqBiaH6HGB6hea_Pkt" },
    reflection: "The Lab 1 simulation was my first hands-on look at how a physical signal actually gets encoded, transmitted, and recovered. Even though the transmitted signal looks completely buried in noise after demodulation, the original bit pattern can still be recovered — which is the whole point of digital communication's noise resilience. This gave me a repeatable mental model — transmitter → channel → receiver — that I kept reusing for every module after this one."
  },

  2: {
    title: "Module 2 — Network Architecture & Wireless Basics",
    tagline: "4G vs. 5G core, network slicing, and signal path loss",
    lecture: "Covers the difference between the 4G Evolved Packet Core (EPC) and the 5G Core (5GC), the purpose of network slicing, how Multi-access Edge Computing (MEC) reduces latency, AI's role in dynamic resource allocation, and the Network Repository Function (NRF) in a 5G Service-Based Architecture.",
    labs: [
      "Assignment 2 — 5G core architecture & MEC concepts",
      "Lab 2 — Free-Space Path Loss (FSPL) calculation & plotting at 2.4 GHz (Python/Colab)"
    ],
    screenshots: [
      { src: "assets/module2_fspl_plot.png", caption: "Free-Space Path Loss vs. distance at 2.4 GHz (Lab 2). Loss rises steeply at short range and flattens at longer distances." }
    ],
    resources: [
      { label: "Assignment 2 (DOCX)", url: "docs/module2_assignment2.docx" },
      { label: "Lab 2 (PDF)", url: "docs/module2_lab2.pdf" }
    ],
    repo: { label: "Lab 2 Colab notebook", url: "https://colab.research.google.com/drive/1FKFWRxV4oePqqE6qgvI3gU4TMB8BZU4I" },
    reflection: "The FSPL lab gave me a concrete, quantitative view of something the lecture discussed conceptually: signal strength fades logarithmically with distance, not linearly — which is exactly why cell tower placement and spacing matters so much in real network planning. Network slicing also clicked once I pictured it as dedicated lanes on a road rather than one shared, congested lane for every kind of data."
  },

  3: {
    title: "Module 3 — AI & Machine Learning Fundamentals for Telecom",
    tagline: "Random Forests, anomaly detection, and customer segmentation",
    lecture: "Covers how AI/ML improves radio resource management in Open RAN, Self-Organizing Networks (SON), the difference between traditional RAN and Open RAN, and the roles of the Near-RT RIC and Non-RT RIC.",
    labs: [
      "Assignment 3 — AI/ML concepts in RAN & SON",
      "Lab 3 — Random Forest traffic prediction (MSE / R² evaluation)",
      "Exercise 3.1 — Network traffic prediction (Random Forest)",
      "Exercise 3.2 — Network anomaly detection (Isolation Forest vs. DBSCAN)",
      "Exercise 3.3 — Customer segmentation (K-Means + PCA visualization)"
    ],
    screenshots: [
      { src: "assets/module3_traffic_plot.png", caption: "Simulated hourly telecom traffic over one week (Lab 3) — the daily/weekly cycle the Random Forest model learned to predict." }
    ],
    resources: [
      { label: "Assignment 3 (DOCX)", url: "docs/module3_assignment3.docx" },
      { label: "Lab 3 (PDF)", url: "docs/module3_lab3.pdf" },
      { label: "Exercises 3.1–3.3 (PDF)", url: "docs/module3_exercises.pdf" }
    ],
    repo: { label: "Lab 3 Colab notebook", url: "https://colab.research.google.com/drive/1_oCrGSVx8wjuuk-FWmlgl_sAbjswSGZH" },
    reflection: "Comparing traditional RAN to Open RAN clarified why vendor interoperability matters — standardized interfaces (O1, E2, A1) act like a common language across equipment vendors. The Lab 3 model showed me a Random Forest can pick up daily and weekly traffic cycles directly from lag and rolling-average features, without being told the schedule explicitly — and extending that into anomaly detection and clustering showed how the same ML toolkit applies to very different telecom problems: forecasting, security, and customer strategy."
  },

  4: {
    title: "Module 4 — 5G Network Architecture and AI Integration",
    tagline: "Network slicing with AI-weighted resource allocation",
    lecture: "Covers 5G network slice types — URLLC, eMBB, and mMTC — and how AI-inspired proportional allocation algorithms distribute network resources across slices based on priority and demand.",
    labs: [
      "Hands-On Exercise — 5G slice modeling with weighted resource allocation (Python)"
    ],
    screenshots: [],
    resources: [
      { label: "Hands-On Exercise (PDF)", url: "docs/module4_handson.pdf" }
    ],
    repo: null,
    reflection: "Seeing the weighted-priority allocation algorithm in code — where URLLC's higher priority weight meant a proportionally larger share of a fixed resource pool, even with fewer total connections than mMTC — showed exactly how a network can guarantee low latency for critical traffic without giving every slice an equal share. It reinforced that 'AI-driven resource allocation' is, at its core, a demand-weighted optimization problem."
  },

  5: {
    title: "Module 5 — Open RAN (O-RAN) and AI-Driven Networks",
    tagline: "Edge AI model compression: pruning, quantization, distillation",
    lecture: "Covers Open RAN's Near-RT RIC and Non-RT RIC, and the push toward deploying AI-based xApps at the network edge under real hardware constraints.",
    labs: [
      "Lab 5 — Edge AI model compression comparison (baseline, pruned, quantized INT8, distilled)"
    ],
    screenshots: [
      { src: "assets/module5_edge_comparison.png", caption: "Accuracy, model size, inference time, and compression-vs-accuracy tradeoff across four model variants (Lab 5)." }
    ],
    resources: [
      { label: "Lab 5 (PDF)", url: "docs/module5_lab5.pdf" }
    ],
    repo: { label: "Lab 5 Colab notebook", url: "https://colab.research.google.com/drive/14oE10B2PdrPk8q3f63I7DziJ6q3Vlyd8" },
    reflection: "This lab made the RIC concepts from lecture concrete: the quantized model kept 93.4% accuracy (vs. 94.4% baseline) while shrinking from ~51 KB to ~22 KB, while the distilled model shrank to ~4.9 KB with a bigger accuracy drop. That gave me a real feel for why compression technique choice depends on the deployment target — a battery-powered microcontroller needs the smallest footprint and can tolerate a slight accuracy cost; an edge server has room to just run the full model."
  },

  6: {
    title: "Module 6 — AI for Network Optimization and Management",
    tagline: "ARIMA vs. Linear Regression vs. LSTM traffic forecasting",
    lecture: "Covers closed-loop network operations (Analyze → Decide → Act) and how AI-driven forecasting and optimization techniques feed into real-time network management decisions.",
    labs: [
      "Lab 4 — Time-series network traffic forecasting: ARIMA(2,1,2), Linear Regression (engineered features), and a 2-layer LSTM"
    ],
    screenshots: [
      { src: "assets/module6_arima_plot.png", caption: "ARIMA(2,1,2) forecast vs. actual traffic — converges toward the mean and misses the daily cycle at longer horizons (RMSE ≈ 51.0)." },
      { src: "assets/module6_lstm_training.png", caption: "LSTM training vs. validation loss over 16 epochs — achieved R² ≈ 0.893 on the held-out test set." }
    ],
    resources: [
      { label: "Lab 4 (PDF)", url: "docs/module6_lab4.pdf" }
    ],
    repo: { label: "Lab 4 Colab notebook", url: "https://colab.research.google.com/drive/10pq413xuvpA4lmnjRT0eQsfP4xORLVud" },
    reflection: "Comparing all three models side by side was the most valuable part of this lab. ARIMA essentially converged toward the series mean and failed to track daily oscillation over a long horizon. The engineered-feature Linear Regression model fit almost perfectly because lag/rolling features handed it the recent trend directly. The LSTM, trained purely on the raw sequence with no manual feature engineering, still reached R² ≈ 0.893 by learning the daily/weekly cycle on its own — which clarified the real tradeoff between interpretability, feature-engineering effort, and automatic pattern learning."
  },

  7: {
    title: "Module 7 — IoT and Edge Computing with AI",
    tagline: "Massive IoT, critical IoT, and edge–cloud collaboration",
    lecture: "Covers massive IoT vs. critical IoT, IoT device management, edge AI architectures, real-time decision making, and edge–cloud collaboration models.",
    labs: ["No separate lab or written assignment was assigned for this module."],
    screenshots: [],
    resources: [],
    repo: null,
    reflection: "This module extended the edge-computing and model-compression ideas from Module 5 into the broader IoT context, distinguishing massive IoT (many low-power, low-data devices) from critical IoT (fewer devices with strict latency/reliability requirements). The edge–cloud collaboration model reinforced why not every inference needs to happen at the edge — the right split depends on latency needs, device constraints, and how time-sensitive the decision is."
  },

  8: {
    title: "Module 8 — Cybersecurity and AI in Telecommunications",
    tagline: "Securing an increasingly open, AI-driven network",
    lecture: "Covers traditional network threats, 5G/6G architecture security challenges, and emerging 6G security issues.",
    labs: ["No separate lab or written assignment was assigned for this module."],
    screenshots: [],
    resources: [],
    repo: null,
    reflection: "This module highlighted that expanding network intelligence and openness (as in Open RAN) also expands the attack surface — more open interfaces and more AI-driven decision points mean more potential points of failure. It reframed AI's role in telecom security as double-sided: AI can detect threats faster than manual monitoring, but AI-driven network functions themselves need to be secured against manipulation."
  },

  9: {
    title: "Module 9 — Sustainable AI and Green Communications",
    tagline: "Energy efficiency as a network design constraint",
    lecture: "Covers energy efficiency metrics, sustainable network design, renewable energy integration, and the circular economy in telecom.",
    labs: ["No separate lab or written assignment was assigned for this module."],
    screenshots: [],
    resources: [],
    repo: null,
    reflection: "This module connected directly back to the model-compression work from Module 5 — a smaller, more efficient model isn't just useful for constrained edge devices, it's also more energy-efficient at scale. It reframed 'AI for network optimization' as having a sustainability dimension, not just a performance one."
  },

  10: {
    title: "Module 10 — Advanced AI Applications in Next-Gen Networks",
    tagline: "Digital twins, cognitive radio, and AI-enhanced slicing",
    lecture: "Covers digital twins for network infrastructure, AI-enhanced network slicing, cognitive radio/spectrum management, and the intersection of AI with blockchain and quantum computing.",
    labs: ["No separate lab or written assignment was assigned for this module."],
    screenshots: [],
    resources: [],
    repo: null,
    reflection: "The digital twin concept stood out as a natural extension of the forecasting work from Module 6 — instead of predicting a single traffic metric, a digital twin simulates the whole network's behavior so operators can test 'what-if' changes before deploying them live. This also showed how the slicing concepts from Module 4 evolve further once AI adjusts slice parameters dynamically rather than allocating them once and leaving them fixed."
  },

  11: {
    title: "Module 11 — 6G Vision and AI-Native Networks",
    tagline: "AI as a built-in network function, not an add-on",
    lecture: "Covers 6G requirements and KPIs, AI-native network architecture, terahertz communications, and massive connectivity with satellite integration.",
    labs: ["No separate lab or written assignment was assigned for this module."],
    screenshots: [],
    resources: [],
    repo: null,
    reflection: "This module was useful for seeing where the RAN Intelligent Controller and Open RAN concepts from Module 5 are headed: rather than AI being bolted onto an existing network architecture, 6G is being designed with AI as a core, built-in network function from the start. The terahertz spectrum discussion also showed how much further the FSPL and resource-allocation tradeoffs from Modules 2 and 4 will need to scale."
  },

  12: {
    title: "Module 12 — Ethical AI and Future Trends",
    tagline: "Fairness, accountability, and 30 questions on AI ethics",
    lecture: "Covers ethical AI foundations, major ethical challenges (bias, privacy, transparency, accountability), global frameworks (IEEE Ethically Aligned Design, UNESCO, OECD, EU AI Act), and case studies including COMPAS, Cambridge Analytica, autonomous vehicle trolley problems, and generative AI misuse.",
    labs: [
      "Assignment 4 — 30-question Ethical AI assessment (Conceptual, Applied/Scenario-Based, and Reflective sections)"
    ],
    screenshots: [],
    resources: [
      { label: "Assignment 4 (DOCX)", url: "docs/module12_assignment4.docx" }
    ],
    repo: null,
    reflection: "This module tied together a thread running through the whole course: every AI system studied earlier — resource allocation (Module 4), edge model compression (Module 5), traffic forecasting (Module 6) — involves tradeoffs with real ethical weight. A biased anomaly-detection model could unfairly flag certain users' traffic; a poorly designed resource-allocation scheme could systematically under-serve certain customer segments. Ethical review isn't a separate final step — it needs to be part of how each of these systems is designed from the start."
  }

};
