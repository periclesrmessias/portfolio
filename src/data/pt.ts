import type { Conteudo } from "@/data/tipos";

/**
 * Versão em português. Os textos são curtos de propósito: recrutador escaneia,
 * não lê. Cada linha é uma entrega ou um número — não um parágrafo sobre rotina.
 */
export const PT: Conteudo = {
  idioma: "pt",
  lang: "pt-BR",
  manchete: "Transformo dado disperso em decisão comercial.",
  resumo:
    "Analista de Dados entre Analytics/BI, inteligência de mercado e automação. Acompanho um funil de R$ 3,5 bilhões na Superus Engenharia — da camada SQL no CRM ao reporting que a diretoria usa para priorizar.",
  cargo: "Analista de Inteligência de Mercado",
  areasFoco: ["Analista de Dados", "Analista de BI", "Analytics Engineer", "Inteligência de Mercado"],

  kpis: [
    {
      label: "Funil acompanhado",
      valor: "R$ 3,5",
      sufixo: "bi+",
      contexto: "Negociações do time comercial da Superus",
      nota: "Soma das oportunidades em aberto na carteira comercial acompanhada analiticamente.",
    },
    {
      label: "Dashboards em Power BI",
      valor: "40",
      sufixo: "+",
      contexto: "Desenvolvidos e mantidos na Superus",
      nota: "Indicadores comerciais, carteira, pipeline, auditoria e reporting executivo. Outros 26 no projeto da ASAP Facilities.",
    },
    {
      label: "Mapeamento de contatos",
      valor: "2h → 2min",
      contexto: "Automação Claude + Apollo.io, usada por Comercial e RH",
      nota: "Tempo de mapear contatos de uma conta, antes manual, depois da integração entre a API do Claude e a do Apollo.io.",
    },
    {
      label: "Clientes monitorados",
      valor: "~100",
      contexto: "Relatórios de RI, notícias e CAPEX",
      nota: "Carteira acompanhada via relatórios corporativos, Relações com Investidores e fontes públicas, em mineração, siderurgia, papel e celulose, energia e petroquímica.",
    },
  ],

  trajetoria: {
    eyebrow: "Trajetória",
    titulo: "De pricing em planilha a camada analítica em produção",
    apoio: "Comecei em operações, passei por análise comercial no varejo e hoje atuo onde o dado encontra a decisão.",
  },

  experiencias: [
    {
      cargo: "Analista de Inteligência de Mercado",
      empresa: "Superus Engenharia",
      periodo: "jul/2025 — presente",
      atual: true,
      contexto:
        "Serviços de engenharia e manutenção industrial para mineração, siderurgia, petroquímica, papel e celulose e energia. Escopo: dados, inteligência comercial e de mercado, governança de CRM, BI e automação.",
      entregas: [
        "Liderança técnica da migração da carteira comercial para CRM próprio, com acesso analítico via Supabase/PostgreSQL.",
        "Views SQL de OPEX e CAPEX como camada semântica e contrato de dados entre o CRM e o Power BI — regra de negócio no banco, não duplicada em DAX.",
        "Fase de workflow em JSONB extraída com LEFT JOIN LATERAL; CASE para classificar estados e COALESCE para fallback de valor de contrato.",
        "40+ dashboards em star schema, com DAX avançado, inteligência temporal e RLS por perfil.",
        "Dashboards de auditoria como data quality checks: campo obrigatório vazio, cobertura de carteira e expectativa de fechamento vencida.",
        "Dicionário de métricas auditável, extraído do modelo via INFO.VIEW.MEASURES().",
        "Relatórios semanais distribuídos por Power Automate, individualizados por vendedor.",
        "Chave única por oportunidade para garantir integridade referencial e análise de market share.",
        "Relatórios de RI e fontes públicas ligando CAPEX, expansão e paradas a oportunidades endereçáveis.",
        "Indicadores do IpeaData (IBC, Selic, câmbio, confiança da indústria) ingeridos em Python e normalizados em pandas.",
        "MCP de Supabase e Power BI no Claude Code para consulta e modelagem em linguagem natural, incluindo medida DAX que gera o HTML do visual HTML Content.",
      ],
      resultados: [
        "Inconsistências que apareciam em 2 de 5 fechamentos semanais eliminadas após a governança — ao menos 2 retrabalhos semanais a menos.",
        "6h+ por semana poupadas na modelagem de dashboards em PBIP com Claude + powerbi-modelling-mcp.",
        "1h+ por mês poupada por setor (Comercial, FP&A e diretoria) na consolidação CRM + Supabase.",
      ],
      stack: ["Power BI", "DAX", "PostgreSQL", "Supabase", "SQL", "Python", "pandas", "Power Automate", "MCP", "Claude API"],
      eixos: ["dados", "negocio", "engenharia"],
    },
    {
      cargo: "Analista de Dados Comerciais",
      empresa: "Ativação Group",
      periodo: "dez/2024 — jul/2025",
      contexto: "Varejo calçadista. Sell-out, carteira de clientes e Open-to-Buy orientando decisão de compra por demanda e giro.",
      entregas: [
        "Análises de sell-out no Power BI, identificando padrões de consumo e oportunidades.",
        "Análise de carteira e Open-to-Buy (OTB) para orientar a compra.",
        "Bases estruturadas e modeladas para EDA, indicadores e séries temporais.",
        "Governança das bases de clientes e lojas, com correção de inconsistências.",
        "ETL automatizado em Power Query e script Python para processar bases e disparar e-mails.",
      ],
      resultados: [
        "R$ 50 mil+ em vendas adicionais a partir de oportunidades identificadas na carteira.",
        "Envio de e-mails de ~30 min para ~2 min, com um único acionamento.",
        "Negociações de ~R$ 900 mil, com quase 3 mil pares processados via Excel e Pipefy.",
      ],
      stack: ["Power BI", "Power Query", "Python", "Excel avançado", "Pipefy"],
      eixos: ["dados", "negocio"],
    },
    {
      cargo: "Analista de Pricing e Dados",
      empresa: "Moro e Messias",
      periodo: "out/2020 — dez/2023",
      contexto:
        "Clínica dermatológica de quatro pessoas, com atuação multifuncional em operações, pricing, dados e controles financeiros.",
      entregas: [
        "Pesquisa de preços de fornecedores e concorrentes como base para as decisões de pricing.",
        "Controle de estoque de insumos: quantidade, custo e consumo.",
        "Análise demográfica das fichas de pacientes para definir personas e orientar o marketing.",
        "Excel/VBA integrando bases e automatizando relatórios de insumos e cálculos financeiros.",
      ],
      resultados: ["Relatórios de custos e contábeis automatizados, simplificando a análise de caixa do sócio administrador."],
      stack: ["Excel", "VBA", "Power Query"],
      eixos: ["negocio", "dados"],
    },
  ],

  linhaDoTempo: [
    { ano: "2020", titulo: "Moro e Messias", detalhe: "Operações, pricing e os primeiros controles em Excel/VBA." },
    { ano: "2024", titulo: "Transição", detalhe: "Google Data Analytics concluído em novembro." },
    { ano: "2024", titulo: "Ativação Group", detalhe: "Primeira função dedicada a dados: sell-out, OTB e Python." },
    { ano: "2025", titulo: "Superus Engenharia", detalhe: "Inteligência de mercado, CRM em Supabase, 40+ dashboards." },
    { ano: "2025", titulo: "Ciência de Dados", detalhe: "Início do tecnólogo na Estácio, conclusão em jul/2027." },
    { ano: "2026", titulo: "Airflow 3", detalhe: "Certificação Astronomer em orquestração." },
  ],

  projetos: {
    eyebrow: "Projetos",
    titulo: "O que eu construí, e o que cada coisa resolveu",
    apoio: "Projeto corporativo, case técnico e projeto de portfólio estão rotulados. Onde o escopo tem limite, o limite está escrito.",
    itens: [
      {
        titulo: "Inteligência de dados para aviação",
        natureza: "Projeto corporativo",
        org: "ASAP Facilities",
        resumo:
          "~10 anos de dados de voos da ANAC, na casa dos milhões de registros, viraram acompanhamento de performance da aviação brasileira, market share e priorização comercial.",
        destaques: [
          "26 dashboards a partir de 35 bases diferentes.",
          "Passageiros, combustível, bagagens, RPK, RTK, ASK, ATK e decolagens por aeroporto e aeronave.",
          "IPCA, IBC, Selic, câmbio, PIB e preço do querosene integrados à base.",
          "Reclamações do consumidor.gov cruzadas para achar padrão de qualidade de serviço.",
          "Benchmarking de concorrentes por receita, market share e carteira.",
        ],
        stack: ["Power BI", "DAX", "Power Query", "Python", "Excel"],
        eixos: ["dados", "negocio"],
        imagem: {
          src: "projetos/aviacao-dashboard.png",
          alt: "Dashboard de análise de cenário do mercado de aviação, com filtros de mês, ano, natureza e aeroporto de origem sobre uma faixa de indicadores.",
          legenda: "Análise de cenário por aeroporto de origem — valores desfocados por confidencialidade.",
        },
      },
      {
        titulo: "Análise de cenário setorial",
        natureza: "Projeto corporativo",
        org: "Superus Engenharia",
        resumo:
          "Painel de mercado por setor industrial — mineração, siderurgia, papel e celulose — cruzando produção, exportação e indicadores financeiros para dimensionar demanda endereçável.",
        destaques: [
          "Indicadores por setor na mesma régua, comparáveis entre si.",
          "Séries históricas com corte por ano, para leitura de tendência.",
          "Usado pela diretoria comercial na priorização de clientes.",
        ],
        stack: ["Power BI", "DAX", "SQL", "Python"],
        eixos: ["dados", "negocio"],
        imagem: {
          src: "projetos/mercado-setorial-dashboard.png",
          alt: "Dashboard de análise de cenário de mercado com blocos por setor industrial e indicadores de produção e exportação.",
          legenda: "Indicadores por setor industrial — valores desfocados por confidencialidade.",
        },
      },
      {
        titulo: "Weather Data Pipeline",
        natureza: "Projeto corporativo",
        org: "ASAP Facilities",
        resumo:
          "Ingestão horária do tempo das 27 capitais, orquestrada em Airflow e persistida em data warehouse no Azure, para apoiar o planejamento das operações de solo.",
        destaques: [
          "DAGs com dependências explícitas, scheduler, retry, logging e monitoramento.",
          "Extração de API externa sob rate limiting, com tratamento de erro.",
          "Payload validado e normalizado antes de persistir.",
          "Particionamento por capital no Blob Storage.",
        ],
        stack: ["Apache Airflow", "Python", "Azure", "APIs REST"],
        ressalva:
          "Usado pela operação por um período e depois descontinuado por falta de estrutura de sustentação: manutenção, infraestrutura e custo de API. O aprendizado foi o ciclo completo — ingestão, orquestração, observabilidade e ownership em produção.",
        eixos: ["engenharia"],
        imagem: {
          src: "projetos/weather-azure-blob.png",
          alt: "Container weather-container no Azure Blob Storage, com a pasta capitais-batch listando um diretório por capital brasileira.",
          legenda: "Saída do pipeline no Azure Blob Storage, particionada por capital.",
        },
      },
      {
        titulo: "Prospecção com IA generativa",
        natureza: "Projeto de portfólio",
        resumo:
          "API do Claude integrada à do Apollo.io: comando em linguagem natural vira consulta estruturada de inteligência comercial e sourcing.",
        destaques: [
          "Engenharia de prompt, tool calling e validação do retorno.",
          "Mapeamento de contatos de ~2 horas para menos de 2 minutos.",
          "Adotada pelos times Comercial e RH.",
        ],
        stack: ["Python", "Claude API", "Apollo.io API", "REST", "Tool calling"],
        eixos: ["engenharia", "negocio"],
      },
      {
        titulo: "Riskified — threshold de aprovação e preço de garantia",
        natureza: "Case técnico",
        resumo:
          "Dataset de pedidos ligando risco, aprovação, chargeback e unit economics de uma garantia — do cálculo à recomendação de operação.",
        destaques: [
          "Threshold no percentil 10% da distribuição de score: corte em ~0,86.",
          "~90% de aprovação e 0,42% de chargeback entre os aprovados.",
          "US$ 15,41 mi de receita aprovada contra US$ 15,09 mil de chargeback.",
          "Fee mínima de 0,20%; recomendação de operar entre 0,25% e 0,30% para absorver volatilidade.",
          "Monitoramento de drift com recalibração se a aprovação sair ±1% ou o chargeback passar de 0,60%.",
        ],
        stack: ["Python", "pandas", "NumPy", "SciPy", "Matplotlib"],
        ressalva: "Os critérios de monitoramento são hipóteses do próprio case, não validação externa de mercado.",
        eixos: ["dados", "negocio"],
        imagem: {
          src: "projetos/riskified-distribuicao.png",
          alt: "Dois histogramas da distribuição do classification_score com a linha do threshold em 0,8608: a distribuição completa e a cauda esquerda.",
          legenda: "Distribuição do score e a cauda esquerda, com o corte de aprovação em 0,8608.",
        },
      },
      {
        titulo: "Modelo preditivo de CAPEX",
        natureza: "Projeto de portfólio",
        resumo:
          "Histórico de investimento, indicadores financeiros, commodities e macro combinados em XGBoost para estimar investimento futuro e priorizar clientes endereçáveis.",
        destaques: [
          "Feature engineering com variáveis macroeconômicas e de commodities.",
          "Apoio à priorização comercial, não decisão automatizada.",
        ],
        stack: ["Python", "pandas", "XGBoost"],
        ressalva:
          "Modelo exploratório: validação e métrica de erro contra baseline ainda não formalizadas, então entra como apoio à priorização, não como preditor validado.",
        eixos: ["dados"],
      },
      {
        titulo: "Extração de dados não estruturados",
        natureza: "Projeto de portfólio",
        resumo:
          "PDFs, relatórios, notas fiscais e contratos estruturados automaticamente, somados a scraping de indicadores macro e preços de commodities, com entrega direta no Power BI.",
        destaques: [
          "OCR e parsing de PDF no lugar da leitura manual.",
          "Mais frequência de atualização e menos trabalho repetido.",
        ],
        stack: ["Python", "OCR", "Web scraping", "Claude", "Power Query", "Power BI"],
        eixos: ["engenharia", "dados"],
      },
      {
        titulo: "Life-OS",
        natureza: "Projeto de portfólio",
        resumo:
          "Aplicação pessoal de hábitos, humor, finanças e carreira em React, TypeScript, Tailwind e Supabase. É a base visual deste portfólio.",
        destaques: [
          "Supabase/PostgreSQL com autenticação e row-level security.",
          "Gráficos próprios em SVG — linha, barra, funil, heatmap — sem biblioteca de charting.",
          "Paleta e tipografia em tokens CSS, com tema claro e escuro.",
        ],
        stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
        eixos: ["engenharia"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    titulo: "Ferramentas que eu uso em trabalho real",
    apoio: "Agrupadas pelos três eixos da trajetória.",
    grupos: [
      {
        titulo: "BI e visualização",
        eixo: "dados",
        itens: ["Power BI", "DAX avançado", "Inteligência temporal", "Star schema", "Camada semântica", "Row-Level Security", "Power Query (M)"],
      },
      {
        titulo: "SQL e modelagem",
        eixo: "engenharia",
        itens: ["PostgreSQL", "Supabase", "Views analíticas", "LEFT JOIN LATERAL", "JSONB", "CTE", "Data contracts", "Surrogate keys"],
      },
      {
        titulo: "Python e automação",
        eixo: "engenharia",
        itens: ["pandas", "NumPy", "requests", "APIs REST", "Normalização de JSON", "ETL/ELT", "Web scraping", "OCR e PDF"],
      },
      {
        titulo: "Engenharia de dados",
        eixo: "engenharia",
        itens: ["Apache Airflow", "DAGs e sensores", "Azure Blob Storage", "Azure Functions", "Data warehouse", "Retry e rate limiting", "Observabilidade"],
      },
      {
        titulo: "Analytics e estatística",
        eixo: "dados",
        itens: ["EDA", "Séries temporais", "Coortes", "Quantis e threshold", "Unit economics", "Funil", "Market share", "XGBoost"],
      },
      {
        titulo: "IA generativa",
        eixo: "engenharia",
        itens: ["Claude API", "Engenharia de prompt", "Tool calling", "Saída estruturada", "Servidores MCP", "MarkItDown"],
      },
      {
        titulo: "Governança de dados",
        eixo: "dados",
        itens: ["Qualidade de dados", "Auditoria", "Padronização", "Integridade referencial", "Controle de acesso", "Metadados"],
      },
      {
        titulo: "Negócio e domínio",
        eixo: "negocio",
        itens: ["Inteligência de mercado", "CRM analytics", "Pipeline", "CAPEX", "Relatórios de RI", "Benchmarking", "Pricing", "Sell-out e OTB"],
      },
    ],
  },

  formacao: {
    eyebrow: "Formação",
    titulo: "Base acadêmica e certificações",
    itens: [
      {
        titulo: "Tecnólogo em Ciência de Dados",
        instituicao: "Estácio",
        periodo: "jan/2025 — jul/2027",
        detalhe: "Estatística, programação, Python, SQL, bancos de dados, cloud, machine learning e visualização.",
        tipo: "graduacao",
        andamento: true,
      },
      {
        titulo: "Astronomer Certification — Apache Airflow 3 Fundamentals",
        instituicao: "Astronomer",
        periodo: "fev/2026",
        detalhe: "Arquitetura do Airflow 3, DAGs modulares, scheduler, sensores, datasets, retry e observabilidade.",
        tipo: "certificacao",
      },
      {
        titulo: "Google Data Analytics Professional Certificate",
        instituicao: "Google",
        periodo: "nov/2024",
        detalhe: "Ciclo analítico completo, com SQL, planilhas, R e Tableau.",
        tipo: "certificacao",
      },
    ],
    emDesenvolvimento: [
      "Transformação versionada com dbt, com testes e documentação.",
      "CI/CD para pipelines de dados e containerização com Docker.",
      "Processamento distribuído (Spark/Databricks) e formatos colunares.",
      "IA além de consumo de API: RAG, embeddings e avaliação de LLM.",
    ],
  },

  contato: {
    eyebrow: "Contato",
    titulo: "Vamos conversar sobre dados?",
    apoio: "Respondo rápido no LinkedIn e por e-mail. Se quiser ver código antes de conversar, o GitHub está aberto.",
  },

  rotulos: {
    navegacao: "Navegação",
    links: "Links",
    secoes: {
      inicio: "Visão geral",
      trajetoria: "Trajetória",
      projetos: "Projetos",
      stack: "Stack",
      formacao: "Formação",
      contato: "Contato",
    },
    eixos: { dados: "Analytics & BI", engenharia: "Engenharia de Dados", negocio: "Inteligência de Negócio" },
    areasDeAtuacao: "Atuo como",
    verProjetos: "Ver os projetos",
    papelAtual: "Analista de Inteligência de Mercado · Superus Engenharia",
    formacaoEmCurso: "Tecnólogo em Ciência de Dados em curso",
    atual: "Atual",
    resultados: "Resultados",
    mostrarEntregas: (n) => `O que eu construí (${n})`,
    ocultarEntregas: "Ocultar entregas",
    filtrarProjetos: "Filtrar projetos por eixo",
    todos: "Todos",
    linhaDoTempo: "Linha do tempo",
    emCurso: "Em curso",
    emDesenvolvimento: "Em desenvolvimento",
    emDesenvolvimentoApoio: "O que ainda não domino, declarado de propósito: é mais útil numa entrevista do que descobrir no meio dela.",
    enviarEmail: "Enviar e-mail",
    tema: "Tema",
    idioma: "Idioma",
    pularParaConteudo: "Pular para o conteúdo",
    comoApurado: (label) => `Como "${label}" é apurado`,
    rodape: "React · TypeScript · Tailwind — mesmo sistema de design do Life-OS",
  },
};
