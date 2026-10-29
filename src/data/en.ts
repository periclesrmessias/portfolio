import type { Conteudo } from "@/data/tipos";

/**
 * English version. Same facts, same numbers, same plain first-person tone as
 * the Portuguese. Keeps the vocabulary data job descriptions use (semantic
 * layer, pipeline, star schema) so it still reads well to recruiters and ATS.
 */
export const EN: Conteudo = {
  idioma: "en",
  lang: "en",
  manchete: "I work with data, BI and market intelligence.",
  resumo:
    "I have 5+ years of experience in data analysis, and I also work with BI, market intelligence and AI automation. Right now I'm at Superus Engenharia, looking after the data behind a BRL 3.5 billion sales pipeline. I write the SQL on top of the CRM, build the dashboards and deliver the reports leadership uses to decide where to focus.",
  cargo: "Data & Market Intelligence Analyst",
  areasFoco: ["Data Analyst", "BI Analyst", "Analytics Engineer", "Market Intelligence"],

  kpis: [
    {
      label: "Pipeline tracked",
      valor: "BRL 3.5",
      sufixo: "bn+",
      contexto: "Open deals across the Superus sales team",
      nota: "Total value of the open opportunities in the sales portfolio I track.",
    },
    {
      label: "New business unit",
      valor: "BRL 10",
      sufixo: "M+/yr",
      contexto: "Revenue of the unit that came out of my CAPEX market study",
      nota: "I sized the industrial CAPEX market using investor-relations reports from nearly 100 accounts. That study led to a new business unit with its own team and a BRL 600M+ pipeline.",
    },
    {
      label: "Power BI dashboards",
      valor: "40",
      sufixo: "+",
      contexto: "Pulling from 30+ sources, used every week by leadership",
      nota: "Sales KPIs, portfolio, pipeline, auditing and leadership reporting. Plus another 26 in the ASAP Facilities project.",
    },
    {
      label: "Contact research",
      valor: "2h → 5min",
      contexto: "Claude + Apollo.io automation, used by Sales and HR",
      nota: "Mapping the contacts of an account used to take me about 2 hours by hand. After I connected the Claude API to the Apollo.io API, it dropped to about 5 minutes.",
    },
  ],

  trajetoria: {
    eyebrow: "Career",
    titulo: "Where I've worked",
    apoio: "I started in operations and pricing at a clinic, moved to commercial analysis in retail, and now work with data and market intelligence at an engineering company.",
  },

  experiencias: [
    {
      cargo: "Data & Market Intelligence Analyst",
      empresa: "Superus Engenharia",
      periodo: "Jul 2025 to present",
      atual: true,
      contexto:
        "Industrial engineering and maintenance company serving mining, steel, petrochemicals, pulp and paper and energy. I look after data, sales and market intelligence, the CRM, BI and automation.",
      entregas: [
        "Sized the Brazilian industrial CAPEX market by extracting and modelling investment data from the investor-relations reports of nearly 100 accounts.",
        "Led the technical side of moving the sales portfolio to an in-house CRM, with data access through Supabase/PostgreSQL.",
        "Built OPEX and CAPEX SQL views that sit between the CRM and Power BI, so business rules live in the database and don't have to be repeated in DAX.",
        "Used LEFT JOIN LATERAL to pull the workflow stage out of JSONB, CASE to classify states and COALESCE to handle missing contract values.",
        "Built 40+ star-schema dashboards pulling from 30+ sources, with advanced DAX, time intelligence and row-level security per profile.",
        "Built audit dashboards to check data quality, like empty required fields, portfolio coverage and overdue expected close dates.",
        "Created a metric dictionary pulled straight from the model with INFO.VIEW.MEASURES().",
        "Automated weekly reports through Power Automate, one for each sales rep.",
        "Created a unique key per opportunity to keep referential integrity and make market-share analysis possible.",
        "Pull IpeaData indicators (economic activity, policy rate, FX, industry confidence) through a REST API in Python and clean them up in pandas.",
        "Built generative AI workflows (Claude API, MCP) for prospecting, reports and presentations in the company's visual style.",
        "Use Supabase and Power BI MCP servers in Claude Code to query and model in plain language, including a DAX measure that renders the HTML Content visual.",
      ],
      resultados: [
        "The CAPEX market study led to a new business unit with its own team, BRL 10M+ in yearly revenue and a BRL 600M+ pipeline.",
        "Cut CRM inconsistencies by 12% with PostgreSQL views, business rules and data-quality checks.",
        "The board and CEO use the dashboards every week to prioritise 50+ opportunities.",
        "Got rid of 3 hours of manual work a week by automating IpeaData collection.",
        "With generative AI, contact research went from ~2 hours to ~5 minutes and building presentations from 3+ hours to under 1 hour.",
        "I save 6+ hours a week on PBIP dashboard modelling with Claude + powerbi-modelling-mcp.",
      ],
      stack: ["Power BI", "DAX", "Power Query", "PostgreSQL", "Supabase", "SQL", "Python", "pandas", "REST APIs", "Power Automate", "MCP", "Claude API"],
      eixos: ["dados", "negocio", "engenharia"],
    },
    {
      cargo: "Commercial Data Analyst",
      empresa: "Ativação Group",
      periodo: "Dec 2024 to Jul 2025",
      contexto: "Footwear retail. I worked with sell-out, the customer portfolio and Open-to-Buy to support purchasing decisions based on demand and turnover.",
      entregas: [
        "Ran exploratory analyses of sell-out data in Power BI across 30+ SKUs and stores to find buying patterns.",
        "Built the Open-to-Buy (OTB) from historical demand and inventory turnover to guide purchasing and mix.",
        "Structured and modelled the datasets behind the analyses, KPIs and time series.",
        "Looked after the customer and store data, fixing what was inconsistent.",
        "Automated the sell-out ETL in Power Query.",
        "Wrote a Python (pandas) script that cleans the data and e-mails the reports on its own.",
      ],
      resultados: [
        "BRL 50k+ in extra sales from opportunities I found in the analyses.",
        "Excess inventory down 7% from decisions based on the OTB.",
        "Sell-out processing went from 1 hour to 5 minutes.",
        "Report processing and sending went from ~30 minutes to ~2 minutes.",
        "Structured data for ~3,000 units used in negotiations worth ~BRL 5M.",
      ],
      stack: ["Power BI", "Power Query", "Python", "pandas", "Advanced Excel", "Pipefy"],
      eixos: ["dados", "negocio"],
    },
    {
      cargo: "Pricing & Data Analyst",
      empresa: "Moro e Messias",
      periodo: "Oct 2020 to Dec 2023",
      contexto: "Four-person dermatology clinic. I did a bit of everything, from operations and pricing to data and financial controls.",
      entregas: [
        "Tracked supplier and competitor prices across 50+ products to set our prices.",
        "Ran inventory control for supplies with consumption and cost KPIs.",
        "Brought the patient, product and supplier data together, with data-quality rules and referential integrity.",
        "Analysed and segmented patients by demographics to define personas and help marketing.",
        "Automated supply reports and financial calculations with Power Query and VBA.",
      ],
      resultados: [
        "The monthly financial report took ~70% less time to prepare.",
        "Margin up 3% from pricing decisions.",
        "Supply stockouts and waste down 6%.",
        "Removed 22% of duplicate or inconsistent records.",
      ],
      stack: ["Excel", "VBA", "Power Query"],
      eixos: ["negocio", "dados"],
    },
  ],

  linhaDoTempo: [
    { ano: "2020", titulo: "Moro e Messias", detalhe: "Operations, pricing and my first controls in Excel and VBA." },
    { ano: "2024", titulo: "Full focus on data", detalhe: "Spent the year studying data and finished Google Data Analytics in November." },
    { ano: "2024", titulo: "Ativação Group", detalhe: "First job fully in data. Sell-out, OTB and Python." },
    { ano: "2025", titulo: "Superus Engenharia", detalhe: "Market intelligence, a CRM on Supabase and 40+ dashboards." },
    { ano: "2025", titulo: "Data Science degree", detalhe: "Started at Estácio, expected to finish in Jul 2027." },
    { ano: "2026", titulo: "Airflow 3", detalhe: "Got the Astronomer certification in orchestration." },
  ],

  projetos: {
    eyebrow: "Projects",
    titulo: "Some things I've built",
    apoio: "Split into company projects, a technical case study and personal projects. Where there's a limitation, I wrote it down. Click any image to enlarge it.",
    itens: [
      {
        titulo: "Aviation data intelligence",
        natureza: "Corporate project",
        org: "ASAP Facilities",
        resumo:
          "I took about 10 years of Brazilian civil aviation flight data, millions of records, and turned it into performance tracking, market share and sales prioritisation.",
        destaques: [
          "26 dashboards built from 35 different data sources.",
          "Passengers, fuel, baggage, RPK, RTK, ASK, ATK and departures by airport and aircraft.",
          "Inflation, economic activity, policy rate, FX, GDP and jet fuel prices joined to the base.",
          "Cross-referenced consumer complaints to spot service quality patterns.",
          "Competitor benchmarking by revenue, market share and client base.",
        ],
        stack: ["Power BI", "DAX", "Power Query", "Python", "Excel"],
        eixos: ["dados", "negocio"],
        imagens: [
          {
            src: "projetos/aviacao-dashboard.png",
            alt: "Aviation market scenario dashboard, with month, year, nature and origin airport filters above a KPI row.",
            legenda: "Scenario analysis by origin airport. Figures blurred for confidentiality.",
          },
        ],
      },
      {
        titulo: "Sector scenario analysis",
        natureza: "Corporate project",
        org: "Superus Engenharia",
        resumo:
          "Market dashboard by industrial sector (mining, steel, pulp and paper) that brings together output, exports and financial indicators to estimate how much demand we can go after.",
        destaques: [
          "Every sector on the same scale, so they can be compared.",
          "Historical series with a year filter to see the trend.",
          "Sales leadership uses it to prioritise accounts.",
        ],
        stack: ["Power BI", "DAX", "SQL", "Python"],
        eixos: ["dados", "negocio"],
        imagens: [
          {
            src: "projetos/mercado-setorial-dashboard.png",
            alt: "Market scenario dashboard with blocks per industrial sector showing output and export indicators.",
            legenda: "Indicators by industrial sector. Figures blurred for confidentiality.",
          },
        ],
      },
      {
        titulo: "Prospecting with generative AI",
        natureza: "Corporate project",
        org: "Superus Engenharia",
        resumo:
          "I connected the Claude API to Apollo.io. You type what you need in plain language, it becomes a structured query, and the result comes out as a contact list ready for the sales team.",
        destaques: [
          "Prompt engineering, tool calling and validation of the response.",
          "Contacts split by company, role, plant and decision level (decision maker, influencer, operational).",
          "Contact research for an account went from ~2 hours to ~5 minutes.",
          "Sales and HR use it day to day.",
        ],
        stack: ["Python", "Claude API", "Apollo.io API", "REST", "Tool calling"],
        eixos: ["engenharia", "negocio"],
        imagens: [
          {
            src: "projetos/prospeccao-base-contatos.png",
            alt: "Spreadsheet produced by the automation with company, name, role, plant, decision level, e-mail, LinkedIn and phone columns; names and contact details blurred.",
            legenda: "Contact list produced by the automation. Names and contact details blurred.",
          },
        ],
      },
      {
        titulo: "Generative AI adoption across the company",
        natureza: "Corporate project",
        org: "Superus Engenharia",
        resumo:
          "I pushed generative AI adoption at Superus. I started with a proof of concept with measured gains, then gave good-practice talks to the teams, and now I'm the person people come to about AI.",
        destaques: [
          "The proof of concept showed gains and the company extended licences to other departments.",
          "Gave talks and wrote guides on using AI day to day and picking the right model for each task.",
          "Built a knowledge base and prompts for reports and decks in the company's visual style, which went from 3+ hours to under 1 hour.",
          "I use Claude Code with Power BI and Supabase MCP servers to model dashboards and save 6+ hours a week.",
        ],
        stack: ["Claude", "Claude Code", "MCP", "Prompt engineering", "Change management"],
        eixos: ["engenharia", "negocio"],
        imagens: [
          {
            src: "projetos/apresentacao-ia-1.jpg",
            alt: "Pericles, in a green Superus shirt, presenting on generative AI to colleagues standing in the office.",
            legenda: "Presenting generative AI to the teams.",
            retrato: true,
          },
          {
            src: "projetos/apresentacao-ia-2.jpg",
            alt: "Wide view of the office with employees gathered for the AI presentation.",
            legenda: "People from several departments at the presentation.",
            retrato: true,
          },
        ],
      },
      {
        titulo: "CAPEX forecasting model",
        natureza: "Corporate project",
        org: "Superus Engenharia",
        resumo:
          "An XGBoost model that combines investment history, financial indicators, commodities and macro data to estimate future investment and help prioritise accounts.",
        destaques: [
          "Identified BRL 800 million in SAM (Serviceable Available Market) across strategic accounts.",
          "Feature engineering with macroeconomic and commodity variables.",
          "It supports sales prioritisation. The decision stays with the team.",
        ],
        stack: ["Python", "pandas", "XGBoost"],
        eixos: ["dados"],
      },
      {
        titulo: "Weather Data Pipeline",
        natureza: "Corporate project",
        org: "ASAP Facilities",
        resumo:
          "Hourly weather collection for Brazil's 27 state capitals, orchestrated in Airflow and stored in a data warehouse on Azure, to help plan ground operations.",
        destaques: [
          "DAGs with explicit dependencies, scheduler, retries, logging and monitoring.",
          "External API extraction that respects the rate limit and handles errors.",
          "Payload validated and normalised before saving.",
          "Partitioned by capital in Blob Storage.",
        ],
        stack: ["Apache Airflow", "Python", "Azure", "REST APIs"],
        ressalva:
          "It was shut down because there wasn't a structure to keep it running (maintenance, infrastructure and API cost). Still, it's where I went through the full cycle of ingestion, orchestration, observability and running something in production.",
        eixos: ["engenharia"],
        imagens: [
          {
            src: "projetos/weather-azure-blob.png",
            alt: "weather-container on Azure Blob Storage, with the capitais-batch folder listing one directory per Brazilian state capital.",
            legenda: "Pipeline output on Azure Blob Storage, partitioned by capital.",
          },
        ],
      },
      {
        titulo: "Approval threshold and guarantee pricing",
        natureza: "Technical case study",
        resumo:
          "An e-commerce risk case with an order dataset linking risk score, approval, chargeback and the unit economics of a guarantee. I went from the calculation to a recommendation on how to operate.",
        destaques: [
          "Threshold at the 10th percentile of the score, with the cut-off at ~0.86.",
          "~90% approval rate and 0.42% chargeback among approved orders.",
          "USD 15.41M in approved revenue against USD 15.09k in chargebacks.",
          "Minimum fee of 0.20%, with a recommendation to operate between 0.25% and 0.30% to absorb swings.",
          "Drift monitoring, recalibrating if approval moves ±1% or chargeback goes above 0.60%.",
        ],
        stack: ["Python", "pandas", "NumPy", "SciPy", "Matplotlib"],
        eixos: ["dados", "negocio"],
        imagens: [
          {
            src: "projetos/case-threshold-distribuicao.png",
            alt: "Two histograms of the classification_score distribution with the threshold line at 0.8608: the full distribution and the left tail.",
            legenda: "Score distribution and left tail, with the approval cut-off at 0.8608.",
          },
        ],
      },
      {
        titulo: "Life-OS",
        natureza: "Personal project",
        resumo:
          "An app I built to track my life in one place: routine (goals, calendar, reminders and notes), body and mind (habits, mood and health), career and money (finances and studies), leisure (series, movies, books and places to visit) and home (subscriptions, maintenance and documents). Built in React, TypeScript, Tailwind and Supabase, with the stats dashboards made from scratch.",
        destaques: [
          "Supabase/PostgreSQL with authentication and row-level security.",
          "Hand-made SVG charts (line, bar, funnel, heatmap), no charting library.",
          "Metrics like adherence, streaks, month-over-month comparison and spending projection at the current pace.",
          "Colours and typography in CSS tokens, with light and dark themes.",
        ],
        stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
        eixos: ["engenharia", "dados"],
        destaque: true,
        video: {
          src: "projetos/lifeos-video.mp4",
          poster: "projetos/lifeos-video-poster.jpg",
          alt: "Life-OS walkthrough video: home, habits, finances and statistics screens, and the decisions behind the adherence, comparison and forecast metrics.",
          legenda: "1:26 walkthrough, narrated and captioned. Demo data is fictional.",
        },
        imagens: [
          {
            src: "projetos/lifeos-habitos.png",
            alt: "Habits dashboard with adherence, current streak, daily completion heatmap, frequency per habit and adherence by weekday.",
            legenda: "Habit statistics. Some values blurred.",
          },
          {
            src: "projetos/lifeos-financas.png",
            alt: "Finance dashboard with expenses, balance, fixed costs, month projection, cumulative expenses against the previous month and expenses by category.",
            legenda: "Finance statistics. Values blurred.",
          },
        ],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    titulo: "Tools I use day to day",
    apoio: "Grouped by the three areas I work in.",
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
    titulo: "Education and certifications",
    itens: [
      {
        titulo: "Associate Degree in Data Science",
        instituicao: "Estácio",
        periodo: "Jan 2025 to Jul 2027",
        detalhe: "Statistics, programming, Python, SQL, databases, cloud, machine learning and visualisation.",
        tipo: "graduacao",
        andamento: true,
      },
      {
        titulo: "Astronomer Certification: Apache Airflow 3 Fundamentals",
        instituicao: "Astronomer",
        periodo: "Feb 2026",
        detalhe: "Airflow 3 architecture, modular DAGs, scheduler, sensors, datasets, retries and observability.",
        tipo: "certificacao",
      },
      {
        titulo: "Google Data Analytics Professional Certificate",
        instituicao: "Google",
        periodo: "Nov 2024",
        detalhe: "The analysis cycle end to end, with SQL, spreadsheets, R and Tableau.",
        tipo: "certificacao",
      },
    ],
    emDesenvolvimento: [
      "dbt for version-controlled transformation, with tests and documentation.",
      "CI/CD for data pipelines and Docker.",
      "Distributed processing (Spark/Databricks) and columnar formats.",
      "AI beyond calling an API, like RAG, embeddings and LLM evaluation.",
    ],
  },

  contato: {
    eyebrow: "Contact",
    titulo: "Want to talk?",
    apoio: "Reach me on WhatsApp, LinkedIn or by e-mail. If you'd like to see code first, my GitHub is public.",
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
    areasDeAtuacao: "I work as",
    verProjetos: "See projects",
    papelAtual: "Data & Market Intelligence Analyst · Superus Engenharia",
    formacaoEmCurso: "Studying for a Data Science degree",
    atual: "Current",
    resultados: "Results",
    mostrarEntregas: (n) => `What I did (${n})`,
    ocultarEntregas: "Hide",
    filtrarProjetos: "Filter projects by area",
    projetoDestaque: "Featured project",
    todos: "All",
    linhaDoTempo: "Timeline",
    emCurso: "In progress",
    emDesenvolvimento: "Learning now",
    emDesenvolvimentoApoio: "Things I don't know well yet and am studying.",
    enviarEmail: "Send e-mail",
    qrWhatsapp: "Point your camera here to message me on WhatsApp",
    faleComigo: "Get in touch",
    tema: "Theme",
    idioma: "Language",
    pularParaConteudo: "Skip to content",
    comoApurado: (label) => `How I got to "${label}"`,
    rodape: "React · TypeScript · Tailwind",
  },
};
