import type { Conteudo } from "@/data/tipos";

/**
 * English version. Same facts, same numbers — the vocabulary follows what data
 * job descriptions actually use (semantic layer, data contract, pipeline), so
 * the page reads naturally to an international recruiter and to an ATS.
 */
export const EN: Conteudo = {
  idioma: "en",
  lang: "en",
  manchete: "I turn scattered data into commercial decisions.",
  resumo:
    "Data Analyst working across Analytics/BI, market intelligence and automation. I track a BRL 3.5 billion sales pipeline at Superus Engenharia — from the SQL layer in the CRM to the reporting leadership uses to prioritise.",
  cargo: "Market Intelligence Analyst",
  cargosAlvo: ["Data Analyst", "BI Analyst", "Analytics Engineer", "Market Intelligence"],

  kpis: [
    {
      label: "Pipeline tracked",
      valor: "BRL 3.5",
      sufixo: "bn+",
      contexto: "Open deals across the Superus sales team",
      nota: "Total value of open opportunities in the commercial portfolio under analytical monitoring.",
    },
    {
      label: "Power BI dashboards",
      valor: "40",
      sufixo: "+",
      contexto: "Built and maintained at Superus",
      nota: "Commercial KPIs, portfolio, pipeline, auditing and executive reporting. Another 26 in the ASAP Facilities project.",
    },
    {
      label: "Contact mapping",
      valor: "2h → 2min",
      contexto: "Claude + Apollo.io automation, used by Sales and HR",
      nota: "Time to map the contacts of an account, previously manual, after integrating the Claude API with the Apollo.io API.",
    },
    {
      label: "Accounts monitored",
      valor: "~100",
      contexto: "IR reports, news and CAPEX",
      nota: "Accounts tracked through corporate and investor relations reports and public sources across mining, steel, pulp and paper, energy and petrochemicals.",
    },
  ],

  trajetoria: {
    eyebrow: "Career",
    titulo: "From spreadsheet pricing to an analytical layer in production",
    apoio: "I started in operations, moved through commercial analysis in retail, and now work where data meets the decision.",
  },

  experiencias: [
    {
      cargo: "Market Intelligence Analyst",
      empresa: "Superus Engenharia",
      periodo: "Jul 2025 — present",
      atual: true,
      contexto:
        "Industrial engineering and maintenance services for mining, steel, petrochemicals, pulp and paper and energy. Scope: data, sales and market intelligence, CRM governance, BI and automation.",
      entregas: [
        "Technical lead on migrating the sales portfolio to an in-house CRM, with analytical access through Supabase/PostgreSQL.",
        "OPEX and CAPEX SQL views as a semantic layer and data contract between the CRM and Power BI — business logic pushed down to the database instead of duplicated in DAX.",
        "Workflow stage extracted from JSONB with LEFT JOIN LATERAL; CASE to classify business states and COALESCE to chain contract-value fallbacks.",
        "40+ star-schema dashboards with advanced DAX, time intelligence and row-level security per profile.",
        "Audit dashboards acting as data quality checks: missing required fields, portfolio coverage and overdue expected close dates.",
        "Auditable metric dictionary extracted from the model via INFO.VIEW.MEASURES().",
        "Weekly reports pushed through Power Automate, personalised per sales rep.",
        "Unique key per opportunity to enforce referential integrity and enable market-share analysis.",
        "IR reports and public sources linking CAPEX, capacity expansion and plant shutdowns to addressable opportunities.",
        "Macroeconomic indicators from IpeaData (economic activity, policy rate, FX, industry confidence) ingested in Python and normalised with pandas.",
        "Supabase and Power BI MCP servers in Claude Code for natural-language querying and modelling, including a DAX measure that renders the HTML Content visual.",
      ],
      resultados: [
        "Inconsistencies that showed up in 2 of 5 weekly closings eliminated after the governance work — at least 2 fewer rework cycles per week.",
        "6+ hours a week saved on PBIP dashboard modelling with Claude + powerbi-modelling-mcp.",
        "1+ hour a month saved per department (Sales, FP&A and leadership) on CRM + Supabase consolidation.",
      ],
      stack: ["Power BI", "DAX", "PostgreSQL", "Supabase", "SQL", "Python", "pandas", "Power Automate", "MCP", "Claude API"],
      eixos: ["dados", "negocio", "engenharia"],
    },
    {
      cargo: "Commercial Data Analyst",
      empresa: "Ativação Group",
      periodo: "Dec 2024 — Jul 2025",
      contexto: "Footwear retail. Sell-out, customer portfolio and Open-to-Buy driving purchasing decisions by demand and turnover.",
      entregas: [
        "Sell-out analysis in Power BI, surfacing consumption patterns and commercial opportunities.",
        "Portfolio and Open-to-Buy (OTB) analysis to guide purchasing.",
        "Datasets structured and modelled for EDA, KPIs and time series.",
        "Governance of customer and store master data, with inconsistencies corrected.",
        "ETL automated in Power Query plus a Python script to process datasets and send e-mails.",
      ],
      resultados: [
        "BRL 50k+ in additional sales from opportunities found in the portfolio analysis.",
        "E-mail dispatch cut from ~30 minutes to ~2 minutes, triggered once.",
        "Supported ~BRL 900k in deals, processing nearly 3,000 pairs through Excel and Pipefy.",
      ],
      stack: ["Power BI", "Power Query", "Python", "Advanced Excel", "Pipefy"],
      eixos: ["dados", "negocio"],
    },
    {
      cargo: "Pricing and Data Analyst",
      empresa: "Moro e Messias",
      periodo: "Oct 2020 — Dec 2023",
      contexto: "Four-person dermatology clinic, with a multi-role scope across operations, pricing, data and financial controls.",
      entregas: [
        "Supplier and competitor price research feeding pricing decisions.",
        "Inventory control for medical supplies: quantity, cost and consumption.",
        "Demographic analysis of patient records to define personas and guide marketing.",
        "Excel/VBA integrating datasets and automating supply reports and financial calculations.",
      ],
      resultados: ["Cost and accounting reports automated, simplifying the managing partner's cash analysis."],
      stack: ["Excel", "VBA", "Power Query"],
      eixos: ["negocio", "dados"],
    },
  ],

  linhaDoTempo: [
    { ano: "2020", titulo: "Moro e Messias", detalhe: "Operations, pricing and the first controls in Excel/VBA." },
    { ano: "2024", titulo: "Transition", detalhe: "Google Data Analytics completed in November." },
    { ano: "2024", titulo: "Ativação Group", detalhe: "First dedicated data role: sell-out, OTB and Python." },
    { ano: "2025", titulo: "Superus Engenharia", detalhe: "Market intelligence, CRM on Supabase, 40+ dashboards." },
    { ano: "2025", titulo: "Data Science degree", detalhe: "Started at Estácio, graduating Jul 2027." },
    { ano: "2026", titulo: "Airflow 3", detalhe: "Astronomer certification in orchestration." },
  ],

  projetos: {
    eyebrow: "Projects",
    titulo: "What I built, and what each one solved",
    apoio: "Corporate project, technical case study and portfolio project are labelled as such. Where the scope has limits, the limits are stated.",
    itens: [
      {
        titulo: "Aviation data intelligence",
        natureza: "Corporate project",
        org: "ASAP Facilities",
        resumo:
          "~10 years of Brazilian civil aviation flight data, in the millions of records, turned into performance tracking, market share and commercial prioritisation.",
        destaques: [
          "26 dashboards built from 35 different data sources.",
          "Passengers, fuel, baggage, RPK, RTK, ASK, ATK and departures by airport and aircraft.",
          "Inflation, economic activity, policy rate, FX, GDP and jet fuel prices joined to the base.",
          "Consumer complaint data cross-referenced to find service quality patterns.",
          "Competitor benchmarking by revenue, market share and client base.",
        ],
        stack: ["Power BI", "DAX", "Power Query", "Python", "Excel"],
        eixos: ["dados", "negocio"],
        imagem: {
          src: "projetos/aviacao-dashboard.png",
          alt: "Aviation market scenario dashboard, with month, year, nature and origin airport filters above a KPI row.",
          legenda: "Scenario analysis by origin airport — figures blurred for confidentiality.",
        },
      },
      {
        titulo: "Sector scenario analysis",
        natureza: "Corporate project",
        org: "Superus Engenharia",
        resumo:
          "Market dashboard by industrial sector — mining, steel, pulp and paper — combining output, exports and financial indicators to size addressable demand.",
        destaques: [
          "Sector indicators on a single scale, comparable to one another.",
          "Historical series filtered by year for trend reading.",
          "Used by sales leadership to prioritise accounts.",
        ],
        stack: ["Power BI", "DAX", "SQL", "Python"],
        eixos: ["dados", "negocio"],
        imagem: {
          src: "projetos/mercado-setorial-dashboard.png",
          alt: "Market scenario dashboard with blocks per industrial sector showing output and export indicators.",
          legenda: "Indicators by industrial sector — figures blurred for confidentiality.",
        },
      },
      {
        titulo: "Weather Data Pipeline",
        natureza: "Corporate project",
        org: "ASAP Facilities",
        resumo:
          "Hourly weather ingestion for Brazil's 27 state capitals, orchestrated in Airflow and persisted to a data warehouse on Azure, supporting ground operations planning.",
        destaques: [
          "DAGs with explicit dependencies, scheduler, retries, logging and monitoring.",
          "External API extraction under rate limiting, with error handling.",
          "Payload validated and normalised before persistence.",
          "Partitioned by capital in Blob Storage.",
        ],
        stack: ["Apache Airflow", "Python", "Azure", "REST APIs"],
        ressalva:
          "Used in production for a period and then discontinued for lack of ongoing support: maintenance, infrastructure and API cost. The takeaway was the full cycle — ingestion, orchestration, observability and operational ownership.",
        eixos: ["engenharia"],
        imagem: {
          src: "projetos/weather-azure-blob.png",
          alt: "weather-container on Azure Blob Storage, with the capitais-batch folder listing one directory per Brazilian state capital.",
          legenda: "Pipeline output on Azure Blob Storage, partitioned by capital.",
        },
      },
      {
        titulo: "Prospecting with generative AI",
        natureza: "Portfolio project",
        resumo:
          "The Claude API wired to Apollo.io: a natural-language command becomes a structured sales intelligence and sourcing query.",
        destaques: [
          "Prompt engineering, tool calling and validation of the structured response.",
          "Contact mapping from ~2 hours to under 2 minutes.",
          "Adopted by the Sales and HR teams.",
        ],
        stack: ["Python", "Claude API", "Apollo.io API", "REST", "Tool calling"],
        eixos: ["engenharia", "negocio"],
      },
      {
        titulo: "Riskified — approval threshold and guarantee pricing",
        natureza: "Technical case study",
        resumo:
          "An order dataset linking risk score, approval rate, chargeback and the unit economics of a guarantee — from the calculation to an operating recommendation.",
        destaques: [
          "Threshold set at the 10th percentile of the score distribution: cut-off at ~0.86.",
          "~90% approval rate and 0.42% chargeback among approved orders.",
          "USD 15.41M in approved revenue against USD 15.09k in chargebacks.",
          "Minimum fee of 0.20%; recommendation to operate at 0.25–0.30% to absorb volatility.",
          "Drift monitoring with recalibration if approval drifts ±1% or chargeback exceeds 0.60%.",
        ],
        stack: ["Python", "pandas", "NumPy", "SciPy", "Matplotlib"],
        ressalva: "The monitoring criteria are hypotheses produced within the case study, not external market validation.",
        eixos: ["dados", "negocio"],
        imagem: {
          src: "projetos/riskified-distribuicao.png",
          alt: "Two histograms of the classification_score distribution with the threshold line at 0.8608: the full distribution and the left tail.",
          legenda: "Score distribution and left tail, with the approval cut-off at 0.8608.",
        },
      },
      {
        titulo: "CAPEX forecasting model",
        natureza: "Portfolio project",
        resumo:
          "Investment history, financial indicators, commodity prices and macro variables combined in XGBoost to estimate future investment and prioritise addressable accounts.",
        destaques: [
          "Feature engineering with macroeconomic and commodity variables.",
          "Support for commercial prioritisation, not automated decisions.",
        ],
        stack: ["Python", "pandas", "XGBoost"],
        ressalva:
          "Exploratory model: validation strategy and error metric against a baseline are not yet formalised, so it is presented as prioritisation support rather than a validated predictor.",
        eixos: ["dados"],
      },
      {
        titulo: "Unstructured data extraction",
        natureza: "Portfolio project",
        resumo:
          "PDFs, reports, invoices and contracts structured automatically, plus scraping of macro indicators and commodity prices, delivered straight into Power BI.",
        destaques: ["OCR and PDF parsing replacing manual reading.", "Higher refresh frequency and less repeated work."],
        stack: ["Python", "OCR", "Web scraping", "Claude", "Power Query", "Power BI"],
        eixos: ["engenharia", "dados"],
      },
      {
        titulo: "Life-OS",
        natureza: "Portfolio project",
        resumo:
          "A personal app for habits, mood, finances and career in React, TypeScript, Tailwind and Supabase. It is the design system behind this portfolio.",
        destaques: [
          "Supabase/PostgreSQL with authentication and row-level security.",
          "Hand-built SVG charts — line, bar, funnel, heatmap — with no charting library.",
          "Palette and typography in CSS tokens, with light and dark themes.",
        ],
        stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
        eixos: ["engenharia"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    titulo: "Tools I use in real work",
    apoio: "Grouped by the three axes the career runs along.",
    grupos: [
      {
        titulo: "BI and visualisation",
        eixo: "dados",
        itens: ["Power BI", "Advanced DAX", "Time intelligence", "Star schema", "Semantic layer", "Row-level security", "Power Query (M)"],
      },
      {
        titulo: "SQL and modelling",
        eixo: "engenharia",
        itens: ["PostgreSQL", "Supabase", "Analytical views", "LEFT JOIN LATERAL", "JSONB", "CTEs", "Data contracts", "Surrogate keys"],
      },
      {
        titulo: "Python and automation",
        eixo: "engenharia",
        itens: ["pandas", "NumPy", "requests", "REST APIs", "JSON normalisation", "ETL/ELT", "Web scraping", "OCR and PDF"],
      },
      {
        titulo: "Data engineering",
        eixo: "engenharia",
        itens: ["Apache Airflow", "DAGs and sensors", "Azure Blob Storage", "Azure Functions", "Data warehouse", "Retries and rate limiting", "Observability"],
      },
      {
        titulo: "Analytics and statistics",
        eixo: "dados",
        itens: ["EDA", "Time series", "Cohorts", "Quantiles and thresholds", "Unit economics", "Funnel", "Market share", "XGBoost"],
      },
      {
        titulo: "Generative AI",
        eixo: "engenharia",
        itens: ["Claude API", "Prompt engineering", "Tool calling", "Structured output", "MCP servers", "MarkItDown"],
      },
      {
        titulo: "Data governance",
        eixo: "dados",
        itens: ["Data quality", "Auditing", "Standardisation", "Referential integrity", "Access control", "Metadata"],
      },
      {
        titulo: "Business and domain",
        eixo: "negocio",
        itens: ["Market intelligence", "CRM analytics", "Pipeline", "CAPEX", "IR reports", "Benchmarking", "Pricing", "Sell-out and OTB"],
      },
    ],
  },

  formacao: {
    eyebrow: "Education",
    titulo: "Academic background and certifications",
    itens: [
      {
        titulo: "Associate Degree in Data Science",
        instituicao: "Estácio",
        periodo: "Jan 2025 — Jul 2027",
        detalhe: "Statistics, programming, Python, SQL, databases, cloud, machine learning and visualisation.",
        tipo: "graduacao",
        andamento: true,
      },
      {
        titulo: "Astronomer Certification — Apache Airflow 3 Fundamentals",
        instituicao: "Astronomer",
        periodo: "Feb 2026",
        detalhe: "Airflow 3 architecture, modular DAGs, scheduler, sensors, datasets, retries and observability.",
        tipo: "certificacao",
      },
      {
        titulo: "Google Data Analytics Professional Certificate",
        instituicao: "Google",
        periodo: "Nov 2024",
        detalhe: "The full analytics cycle, with SQL, spreadsheets, R and Tableau.",
        tipo: "certificacao",
      },
    ],
    emDesenvolvimento: [
      "Version-controlled transformation with dbt, including tests and documentation.",
      "CI/CD for data pipelines and containerisation with Docker.",
      "Distributed processing (Spark/Databricks) and columnar formats.",
      "AI beyond API consumption: RAG, embeddings and LLM evaluation.",
    ],
  },

  contato: {
    eyebrow: "Contact",
    titulo: "Have a data role this profile fits?",
    apoio: "I reply quickly on LinkedIn and by e-mail. If you'd rather see code first, GitHub is open.",
  },

  rotulos: {
    navegacao: "Navigation",
    links: "Links",
    secoes: {
      inicio: "Overview",
      trajetoria: "Career",
      projetos: "Projects",
      stack: "Stack",
      formacao: "Education",
      contato: "Contact",
    },
    eixos: { dados: "Analytics & BI", engenharia: "Data Engineering", negocio: "Business Intelligence" },
    disponivel: "Open to new opportunities",
    buscoPosicoes: "Looking for roles in",
    verProjetos: "See the projects",
    papelAtual: "Market Intelligence Analyst · Superus Engenharia",
    formacaoEmCurso: "Data Science degree in progress",
    atual: "Current",
    resultados: "Results",
    mostrarEntregas: (n) => `What I built (${n})`,
    ocultarEntregas: "Hide details",
    filtrarProjetos: "Filter projects by axis",
    todos: "All",
    linhaDoTempo: "Timeline",
    emCurso: "In progress",
    emDesenvolvimento: "Currently learning",
    emDesenvolvimentoApoio: "What I don't master yet, stated on purpose: more useful in an interview than discovering it halfway through.",
    enviarEmail: "Send e-mail",
    tema: "Theme",
    idioma: "Language",
    pularParaConteudo: "Skip to content",
    comoApurado: (label) => `How "${label}" is calculated`,
    rodape: "React · TypeScript · Tailwind — same design system as Life-OS",
  },
};
