import { ResearchArea, Article, ServiceItem, FAQItem, TeamMember } from "./types";

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "nutrition-science",
    title: "Nutrition Science & Biochemistry",
    description: "Decoding the complex biochemical pathways of macronutrients and micronutrients at the cellular level.",
    detailedInfo: "At NU-TRON'-E-ME, we conduct extensive literature reviews and computational simulations of nutrient assimilation. Our focus lies in understanding how trace minerals, complex amino acids, and essential vitamins influence epigenetic triggers, repair cellular oxidative stress, and facilitate daily biological longevity.",
    highlights: [
      "Macronutrient pathways & cellular bioenergetics",
      "Epigenetic influences of dietary minerals",
      "Antioxidant biochemistry and oxidative stress mitigation"
    ],
    metrics: [
      { label: "Peer-Reviewed Studies Cataloged", value: "4,500+" },
      { label: "Active Biochemistry Projects", value: "12" }
    ],
    category: "Science",
    iconName: "Atom"
  },
  {
    id: "functional-foods",
    title: "Functional Foods & Bioactives",
    description: "Harnessing nature's medicinal chemistry through nutrient-dense bioactive compounds.",
    detailedInfo: "Functional foods go beyond basic nutrition to deliver targeted health optimization. We analyze phytonutrients, polyphenols, and adaptogens within wild botanicals, marine matrices, and ancient grains to uncover therapeutic properties that support cardiovascular integrity, immune resilience, and neuroprotection.",
    highlights: [
      "Polyphenol and flavonoid bioavailability profiles",
      "Adaptogens and cortisol regulation matrices",
      "Marine bioactive screening for cardiovascular support"
    ],
    metrics: [
      { label: "Bioactive Profiles Mapped", value: "320+" },
      { label: "Plant Species Analyzed", value: "1,500+" }
    ],
    category: "Science",
    iconName: "Leaf"
  },
  {
    id: "personalized-nutrition",
    title: "Personalized Nutrition & Nutrigenomics",
    description: "Designing tailormade nutritional architectures based on individual DNA and lifestyle signatures.",
    detailedInfo: "The era of the standard one-size-fits-all pyramid is over. By aligning a person's unique DNA, metabolic rate, physical activity, and historical bio-logs, personalized nutrition creates bespoke meal ratios. This scientific alignment prevents chronic lipid profile spikes, stabilizes daily insulin, and maximizes physical stamina.",
    highlights: [
      "MTHFR, ApoE, and FTO gene-nutrient interactions",
      "Dynamic metabolic indexing and lifestyle factors",
      "Personalized macronutrient distribution ratios"
    ],
    metrics: [
      { label: "Unique DNA Profiles Cataloged", value: "12,000+" },
      { label: "Metabolic Success Rate", value: "94%" }
    ],
    category: "Science",
    iconName: "Dna"
  },
  {
    id: "dietary-patterns",
    title: "Dietary Patterns & Cultural Wisdom",
    description: "Fusing ancient epidemiological longevity diets with modern clinical nutrition parameters.",
    detailedInfo: "Human civilization holds rich keys to diet longevity. We systematically evaluate the Mediterranean, blue-zone plant-forward, and Nordic maritime dietary models. We filter out romanticized myths, preserving the underlying clinical biomarkers (such as highly unsaturated fatty acids and high fiber loads) that support long, disease-free lives.",
    highlights: [
      "Blue-Zone longevity diet bio-marker extraction",
      "Scandinavian dietary marine acid benefits",
      "Plant-forward fiber load clinical testing"
    ],
    metrics: [
      { label: "Historical Diets Analyzed", value: "45" },
      { label: "Longevity Biomarkers Verified", value: "18" }
    ],
    category: "Science",
    iconName: "Globe"
  },
  {
    id: "gut-health",
    title: "Gut Microbiome & Probiotics",
    description: "Nurturing the delicate symbiotic ecology of the intestinal microbiome for systemic wellness.",
    detailedInfo: "The gut is our primary metabolic engine and neural communicator. We explore the profound symbiosis of Bifidobacteria and Lactobacilli with short-chain fatty acids (SCFAs) like butyrate. Our research tracks how custom dietary fibers stimulate mucosal lining repair and strengthen the vital blood-brain gut axis.",
    highlights: [
      "SCFA production and colonocyte bioenergetics",
      "Prebiotic fiber fermentability profiling",
      "Gut-Brain-Axis neural communication pathways"
    ],
    metrics: [
      { label: "Bacterial Strains Classified", value: "1,200+" },
      { label: "Gut Axis Correlation Index", value: "0.89" }
    ],
    category: "Science",
    iconName: "ShieldAlert"
  },
  {
    id: "metabolism",
    title: "Metabolic Dynamics & Bioenergetics",
    description: "Decoding mitochondria health, glucose homeostasis, and systemic metabolic resilience.",
    detailedInfo: "Metabolism is the core currency of physical energy. NU-TRON'-E-ME explores advanced glycogen storage profiles, fatty acid oxidation efficiency, and mitochondrial respiratory rates. We investigate dietary protocols like timed circadian feeding and fasting mimics to optimize ATP production and glucose regulation.",
    highlights: [
      "Mitochondrial biogenesis nutritional triggers",
      "Insulin sensitivity restoration patterns",
      "Fatty acid beta-oxidation efficiency tracking"
    ],
    metrics: [
      { label: "ATP Synthesis Optimization", value: "+28%" },
      { label: "Glucose Stability Index", value: "98.7%" }
    ],
    category: "Science",
    iconName: "Flame"
  },
  {
    id: "food-innovation",
    title: "Food Tech Innovation",
    description: "Formulating sustainable, clean-label alternatives using advanced food processing techniques.",
    detailedInfo: "As global climates and population structures shift, food technology must evolve. We consult on texturization, plant-protein isolated matrices, and fermentation biochemistry to create clean-label, bioavailable alternatives that deliver premium culinary experiences alongside clean nutrition.",
    highlights: [
      "Precision-fermented alternative dairy structures",
      "Sustainable plant protein isolate optimization",
      "Natural clean-label texture stabilizers"
    ],
    category: "Technology",
    metrics: [
      { label: "Prototype Formulations Created", value: "75+" },
      { label: "Intellectual Disclosures", value: "14" }
    ],
    iconName: "Cpu"
  },
  {
    id: "ai-in-nutrition",
    title: "AI & Computational Nutrition",
    description: "Using neural networks and deep learning to model multi-nutrient interactions.",
    detailedInfo: "Our computational division leverages deep-learning models to predict multi-nutrient interactions, cellular receptor docking scores, and custom allergen overlaps. By using AI, we accelerate functional food development from a traditional multi-year timeframe down to mere weeks.",
    highlights: [
      "AI molecular receptor docking predictions",
      "Multi-nutrient structural interaction models",
      "Allergen cross-reactivity mapping"
    ],
    category: "Technology",
    metrics: [
      { label: "AI Models Trained", value: "8" },
      { label: "Molecular Interactions Simulated", value: "24M" }
    ],
    iconName: "Binary"
  },
  {
    id: "nutritional-analytics",
    title: "Data-Driven Nutritional Analytics",
    description: "Transforming raw bio-telemetry, glucose monitors, and food logs into actionable analytics.",
    detailedInfo: "NU-TRON'-E-ME designs dynamic analytics engines that aggregate continuous glucose monitoring (CGM) streams, activity levels, and cardiac telemetry. By identifying metabolic lag and glycogen deplete indicators, we enable corporate teams, athletes, and clinical users to calibrate their daily diet accurately.",
    highlights: [
      "Real-time Continuous Glucose Monitor analysis",
      "Glycemic response mathematical curves",
      "Activity and metabolic stress correlation maps"
    ],
    category: "Technology",
    metrics: [
      { label: "Telemetry Hours Analyzed", value: "1.2M+" },
      { label: "Daily Data Ingress Points", value: "450K" }
    ],
    iconName: "BarChart3"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "microbiome-cognitive-axis",
    title: "The Microbiome-Cognitive Axis: How Intestinal Butyrate Regulates Neuro-Inflammation",
    summary: "Exploring the biochemical pathways through which gut microbial short-chain fatty acids cross the blood-brain barrier to optimize cognitive focus and alleviate neural fatigue.",
    content: "Recent scientific explorations have firmly established that the gut microbiome functions as our 'second brain.' NU-TRON'-E-ME researchers have tracked how diet-derived fibers, when fermented by friendly colonic bacteria, synthesize short-chain fatty acids (SCFAs), notably butyrate. Butyrate acts as a high-efficiency cellular signal that modulates microglia activation in the brain. Microglia are the resident immune cells of the central nervous system; when overstimulated, they generate low-grade neuro-inflammation, leading to brain fog, executive cognitive decline, and chronic mental exhaustion. By incorporating prebiotic functional foods rich in beta-glucans, chicory inulin, and polyphenols, individuals can stimulate local butyrate production. Our mathematical models indicate that a balanced prebiotic intake can decrease systemic inflammatory biomarkers, resulting in statistically improved attention span, faster information retrieval, and long-term neuroprotection.",
    category: "Research",
    date: "July 02, 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Anand Rao",
      role: "Chief Scientific Advisor"
    },
    tags: ["Microbiome", "Cognitive Health", "Butyrate", "Gut-Brain Axis"]
  },
  {
    id: "nutrigenomics-mthfr-pathway",
    title: "Nutrigenomics & The MTHFR Gene: Customizing Methylation with Active Folate",
    summary: "A meticulous exploration of genetic polymorphisms in folate pathways and the physiological importance of raw bioavailable L-methylfolate over synthetic folic acid.",
    content: "One of the most profound revelations of contemporary nutrition science is that our genes govern how we process foods, and conversely, what we eat alters gene expression. The MTHFR (methylenetetrahydrofolate reductase) gene is a prime example. Approximately 40% of the global population carries heterozygous or homozygous mutations in this gene, which severely limits their ability to convert synthetic folic acid—commonly added to processed white flour and generic vitamins—into its metabolically active form, 5-MTHF. Without adequate 5-MTHF, the body's vital methylation cycle stalls, leading to elevated homocysteine (a cardiotoxic biomarker), neurological transmitters fatigue, and chronic low energy. NU-TRON'-E-ME champions active, natural L-methylfolate found in dark leafy leafy greens, citrus, and naturally fermented foods, or highly purified active food supplements, ensuring full biochemical assimilation irrespective of genetic polymorphism roadblocks.",
    category: "Insights",
    date: "June 24, 2026",
    readTime: "9 min read",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Director of Nutrigenomics"
    },
    tags: ["Nutrigenomics", "Methylation", "MTHFR", "Folate"]
  },
  {
    id: "functional-bioactives-circadian",
    title: "Circadian Nutrition: How Meal Timings Synchronize Mitochondrial ATP Synthesis",
    summary: "Reviewing clinical trials on intermittent eating and circadian rhythm alignments, showing substantial metabolic cellular repair and lipid level improvements.",
    content: "Mitochondria—the energetic powerhouses inside every single human cell—do not work at uniform efficiency across a 24-hour cycle. They operate on a strict internal clock heavily synchronized with solar light and physical meal timings. Introducing calories late at night, when the pancreas and insulin-releasing receptors have entered 'sleep' mode, results in metabolic deceleration, high systemic glucose retention, and fat storage. NU-TRON'-E-ME's clinical reviews demonstrate that aligning calorie ingestion with a compressed daylight window (e.g., an 8-to-10 hour eating span) synchronizes mitochondrial ATP synthesis beautifully. This circadian nutritional alignment allows the mitochondria to enter a state of autophagy during fasting hours, clearing out damaged cellular debris, lowering total triglycerides, restoring vascular flexibility, and naturally elevating daily energetic vitality.",
    category: "Discovery",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Prof. Marcus Vance",
      role: "Lead Metabolic Researcher"
    },
    tags: ["Circadian Rhythm", "Mitochondria", "ATP Synthesis", "Metabolism"]
  },
  {
    id: "practical-hacks-blood-sugar",
    title: "Five Science-Backed Meal Sequencing Hacks to Prevent Postprandial Glucose Spikes",
    summary: "Practical, clinically-proven guidelines on food consumption ordering to maintain stable daily glycemic curves without extreme dietary restrictions.",
    content: "Maintaining stable blood sugar is one of the most powerful shields against diabetes, cardiovascular strain, and midday energy crashes. Clinical biochemistry proves that it is not just *what* you eat, but the exact order in which you consume it that dictates your glycemic curve. NU-TRON'-E-ME recommends a simple 3-step meal sequencing protocol: first, consume dietary fiber (leafy vegetables, cruciferous salads); second, consume proteins and lipids (to slow gastric emptying); and third, consume complex carbohydrates or sugars. By entering the stomach first, fibers form a protective mesh lining along the small intestine, slowing down the enzymatic breakdown and absorption of glucose. This physiological buffer prevents dramatic insulin spikes, keeping blood sugar stable and maintaining sustained mental clarity.",
    category: "Tips",
    date: "April 30, 2026",
    readTime: "5 min read",
    author: {
      name: "Elena Rostova",
      role: "Senior Clinical Dietician"
    },
    tags: ["Blood Sugar", "Glycemic Index", "Dietary Fiber", "Healthy Hacks"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "nutrition-consulting",
    title: "Personalized Nutrition Consulting",
    description: "1-on-1 diagnostic diet consulting incorporating genetic markers, blood work, and lifestyle telemetry.",
    detailedOfferings: [
      "In-depth genomic pathway profiling & biochemical interpretation",
      "Dynamic metabolic indexing based on continuous bio-telemetry",
      "Custom 12-week nutritional blueprints updated dynamically weekly",
      "Biweekly consultations with certified clinical nutritionists"
    ],
    engagementModel: "Premium Monthly Retainer / Single Consultation Pack",
    iconName: "Sparkles"
  },
  {
    id: "research-collaboration",
    title: "Corporate Research Collaboration",
    description: "Partnering with research labs, food tech firms, and universities to co-develop functional foods.",
    detailedOfferings: [
      "Bioactive profiling and bioavailability laboratory assays",
      "In-silico neural mapping of target cell-receptor interactions",
      "Drafting and publishing rigorous peer-reviewed clinical studies",
      "Regulatory alignment strategies for novel health claims"
    ],
    engagementModel: "Project-based Contract / Academic Joint Ventures",
    iconName: "FlaskConical"
  },
  {
    id: "educational-workshops",
    title: "Educational Workshops & Masterclasses",
    description: "Empowering educators, corporate wellness directors, and fitness groups with evidence-based curriculum.",
    detailedOfferings: [
      "Interactive 4-part webinar series on gut microbiome mechanics",
      "Practical food science demos on nutrient preservation & culinary chemistry",
      "Comprehensive digital educational kits with lesson slide decks",
      "Providing continuing education credentials (CEUs)"
    ],
    engagementModel: "Institutional Licenses / Corporate Event Bookings",
    iconName: "GraduationCap"
  },
  {
    id: "food-tech-consulting",
    title: "Food Tech & Innovation Advisory",
    description: "Consulting on alternative protein texturization, clean-label stabilization, and precision fermentation.",
    detailedOfferings: [
      "Texture modeling for plant-derived or cell-cultured protein fibers",
      "Natural phytonutrient extraction and oxidative stabilization",
      "Clean-label ingredient substitute research and validation",
      "Pilot-scale formulation reviews & industrial scale-up advisories"
    ],
    engagementModel: "Strategic Retainer / Fixed-scope Technical Advisory",
    iconName: "Cpu"
  },
  {
    id: "data-analytics",
    title: "Data-Driven Nutrition Analytics",
    description: "Building custom mathematical algorithms to convert wearable wearable data and logs into health metrics.",
    detailedOfferings: [
      "Wearable API integrations (continuous glucose, heart rate, sleep tracks)",
      "Glycemic variability modeling and predictive insulin spike curves",
      "Aggregate biometric dashboards for sports teams or corporate groups",
      "SaaS dashboard white-labeling and algorithmic licensed libraries"
    ],
    engagementModel: "Software Licensing (SaaS) / Custom API Integrations",
    iconName: "BarChart3"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does NU-TRON'-E-ME differ from a traditional weight-loss clinic?",
    answer: "Traditional clinics prioritize immediate weight loss through extreme caloric restrictions. NU-TRON'-E-ME is a research and wellness institute. We look at the biochemical mechanisms under the hood—genomics, microbiome diversity, mitochondria dynamics, and bio-telemetry. Our goal is metabolic flexibility, cellular longevity, and neurological optimization, with healthy body weight being a natural byproduct of systemic health.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What is the science behind active folate vs. synthetic folic acid?",
    answer: "Folic acid is synthetic and must undergo a multi-step enzymatic conversion in the liver and gut via the MTHFR enzyme to become bioavailable 5-MTHF. In individuals with MTHFR gene variants, this conversion rate is dramatically impaired. 5-MTHF (active methylfolate) bypasses this bottleneck entirely, immediately entering the bloodstream to cross the blood-brain barrier and support neurotransmitter synthesis and detoxification.",
    category: "Science"
  },
  {
    id: "faq-3",
    question: "What biomarkers do you analyze in your personalized nutrition programs?",
    answer: "We analyze a comprehensive array of biomarkers. These include genetics (e.g., ApoE, MTHFR, FTO), glycemic markers (HbA1c, fasting insulin, continuous glucose trends), lipid profiles (ApoB, LDL particle numbers, omega indexes), inflammatory biomarkers (hs-CRP, IL-6), gut microbiome diversity scores, and active nutrient levels in blood serum.",
    category: "Nutrition"
  },
  {
    id: "faq-4",
    question: "Can food tech truly match the nutritional density of whole organic food?",
    answer: "Technology serves to complement and extract, not completely replace, the complex matrix of whole food. Our focus in food tech is on using clean, non-thermal processing, precision fermentation, and natural extraction to preserve the complete matrix of dietary fibers, bioactive enzymes, and co-factors. This ensures alternative foods provide equivalent biological synergy and bio-accessibility.",
    category: "Science"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "anand-rao",
    name: "Dr. Anand Rao",
    role: "Chief Scientific Advisor & Founder",
    bio: "With over 20 years in bio-analytics and clinical systems, Dr. Rao guides the biochemical validation protocols and nutritional algorithms at NU-TRON'-E-ME.",
    specialties: ["Biochemical Systems", "Wearable Bio-Telemetry", "Insulin Sensitivity Research"],
    avatarSeed: "anand"
  },
  {
    id: "sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    role: "Director of Nutrigenomics",
    bio: "Dr. Jenkins holds a PhD in Molecular Biology and specializes in gene-nutrient interaction mapping. Her research uncovers epigenetic diet switches.",
    specialties: ["Nutrigenomics", "Epigenetics", "MTHFR Metabolic Methylation"],
    avatarSeed: "sarah"
  },
  {
    id: "marcus-vance",
    name: "Prof. Marcus Vance",
    role: "Lead Metabolic Researcher",
    bio: "An endocrinologist and mitochondrial biologist, Professor Vance leads our metabolic profiling programs, exploring circadian rhythm cell bioenergetics.",
    specialties: ["Mitochondria Biogenesis", "Circadian Chrono-nutrition", "Lipid Metabolics"],
    avatarSeed: "marcus"
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova, MS, RD",
    role: "Senior Clinical Dietician",
    bio: "Elena bridges clinical science and practical kitchen wisdom, translating complicated biochemical metrics into delightful, sustainable dietary meal sequencing.",
    specialties: ["Clinical Dietetics", "Intestinal Microbiome Foods", "Glycemic Balancing"],
    avatarSeed: "elena"
  }
];
