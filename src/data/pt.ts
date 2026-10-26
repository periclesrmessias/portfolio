import type { Conteudo } from "@/data/tipos";

/**
 * Versão em português. Os textos são curtos de propósito: recrutador escaneia,
 * não lê. Cada linha é uma entrega ou um número, não um parágrafo sobre rotina.
 */
export const PT: Conteudo = {
  idioma: "pt",
  lang: "pt-BR",
  manchete: "Transformo dado disperso em decisão comercial.",
  resumo:
    "Analista de Dados com mais de 5 anos entre Analytics/BI, inteligência de mercado e automação com IA. Na Superus Engenharia, estruturo a camada analítica de um funil comercial de R$ 3,5 bilhões, do SQL no CRM ao reporting que a diretoria usa para priorizar.",
  cargo: "Analista de Dados e Inteligência de Mercado",
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
      label: "Nova unidade de negócio",
      valor: "R$ 10",
      sufixo: "mi+/ano",
      contexto: "Faturamento da unidade criada a partir do meu estudo de mercado de CAPEX",
      nota: "O dimensionamento do mercado de CAPEX industrial, feito com relatórios de RI de quase 100 clientes, originou uma unidade de negócio com equipe dedicada e funil de R$ 600 mi+.",
    },
    {
      label: "Dashboards em Power BI",
      valor: "40",
      sufixo: "+",
      contexto: "Integrando 30+ fontes, usados semanalmente pela diretoria",
      nota: "Indicadores comerciais, carteira, pipeline, auditoria e reporting executivo. Outros 26 no projeto da ASAP Facilities.",
    },
    {
      label: "Busca de contatos",
      valor: "2h → 5min",
      contexto: "Automação Claude + Apollo.io, usada por Comercial e RH",
      nota: "Tempo de mapear os contatos de uma conta, antes manual, depois da integração entre a API do Claude e a do Apollo.io.",
    },
  ],

  trajetoria: {
    eyebrow: "Trajetória",
    titulo: "De pricing em planilha a camada analítica em produção",
    apoio: "Comecei em operações, passei por análise comercial no varejo e hoje atuo onde o dado encontra a decisão.",
  },

  experiencias: [
    {
      cargo: "Analista de Dados e Inteligência de Mercado",
      empresa: "Superus Engenharia",
      periodo: "jul/2025 a presente",
      atual: true,
      contexto:
        "Serviços de engenharia e manutenção industrial para mineração, siderurgia, petroquímica, papel e celulose e energia. Escopo: dados, inteligência comercial e de mercado, governança de CRM, BI e automação.",
      entregas: [
        "Dimensionamento do mercado de CAPEX industrial no Brasil, extraindo e modelando dados de investimento de relatórios de RI de quase 100 clientes.",
        "Liderança técnica da migração da carteira comercial para CRM próprio, com acesso analítico via Supabase/PostgreSQL.",
        "Views SQL de OPEX e CAPEX como camada semântica e contrato de dados entre o CRM e o Power BI: regra de negócio no banco, não duplicada em DAX.",
        "Fase de workflow em JSONB extraída com LEFT JOIN LATERAL; CASE para classificar estados e COALESCE para fallback de valor de contrato.",
        "40+ dashboards em star schema integrando 30+ fontes, com DAX avançado, inteligência temporal e RLS por perfil.",
        "Dashboards de auditoria como data quality checks: campo obrigatório vazio, cobertura de carteira e expectativa de fechamento vencida.",
        "Dicionário de métricas auditável, extraído do modelo via INFO.VIEW.MEASURES().",
        "Relatórios semanais distribuídos por Power Automate, individualizados por vendedor.",
        "Chave única por oportunidade para garantir integridade referencial e análise de market share.",
        "Indicadores do IpeaData (IBC, Selic, câmbio, confiança da indústria) ingeridos via API REST em Python e normalizados em pandas.",
        "Fluxos com IA generativa (Claude API, MCP) para prospecção, relatórios e apresentações com a identidade visual da empresa.",
        "MCP de Supabase e Power BI no Claude Code para consulta e modelagem em linguagem natural, incluindo medida DAX que gera o HTML do visual HTML Content.",
      ],
      resultados: [
        "Estudo de mercado de CAPEX originou uma nova unidade de negócio, com equipe dedicada, R$ 10 mi+ em faturamento anual e funil de R$ 600 mi+.",
        "Inconsistências no CRM reduzidas em 12% com views em PostgreSQL, regras de negócio e checagens de qualidade de dados.",
        "Dashboards usados semanalmente pela diretoria e presidência para priorizar 50+ oportunidades.",
        "3h semanais de trabalho manual eliminadas com a ingestão automatizada do IpeaData.",
        "Busca de contatos de ~2h para ~5 min e criação de apresentações de 3h+ para menos de 1h com IA generativa.",
        "6h+ por semana poupadas na modelagem de dashboards em PBIP com Claude + powerbi-modelling-mcp.",
      ],
      stack: ["Power BI", "DAX", "Power Query", "PostgreSQL", "Supabase", "SQL", "Python", "pandas", "APIs REST", "Power Automate", "MCP", "Claude API"],
      eixos: ["dados", "negocio", "engenharia"],
    },
    {
      cargo: "Analista de Dados Comerciais",
      empresa: "Ativação Group",
      periodo: "dez/2024 a jul/2025",
      contexto: "Varejo calçadista. Sell-out, carteira de clientes e Open-to-Buy orientando decisão de compra por demanda e giro.",
      entregas: [
        "Análises exploratórias (EDA) de sell-out no Power BI em 30+ SKUs e lojas, identificando padrões de consumo.",
        "Open-to-Buy (OTB) com séries históricas de demanda e giro de estoque para orientar compra e mix.",
        "Bases estruturadas e modeladas para EDA, indicadores e séries temporais.",
        "Governança das bases de clientes e lojas, com correção de inconsistências.",
        "Pipeline de ETL de sell-out automatizado em Power Query.",
        "Script em Python (pandas) para tratar bases e distribuir relatórios por e-mail automaticamente.",
      ],
      resultados: [
        "R$ 50 mil+ em vendas incrementais a partir de oportunidades identificadas na EDA.",
        "Excesso de estoque reduzido em 7% com as decisões orientadas pelo OTB.",
        "Ciclo de processamento do sell-out de 1h para 5 min.",
        "Rotina de tratamento e envio de relatórios de ~30 min para ~2 min.",
        "Dados de ~3.000 unidades estruturados para negociações comerciais de ~R$ 5 milhões.",
      ],
      stack: ["Power BI", "Power Query", "Python", "pandas", "Excel avançado", "Pipefy"],
      eixos: ["dados", "negocio"],
    },
    {
      cargo: "Analista de Pricing e Dados",
      empresa: "Moro e Messias",
      periodo: "out/2020 a dez/2023",
      contexto:
        "Clínica dermatológica de quatro pessoas, com atuação multifuncional em operações, pricing, dados e controles financeiros.",
      entregas: [
        "Monitoramento de preços de fornecedores e concorrentes em 50+ produtos como base para as decisões de pricing.",
        "Controle de estoque de insumos com indicadores de consumo e custo.",
        "Integração das bases de pacientes, produtos e fornecedores com integridade referencial e regras de qualidade.",
        "Análise exploratória e segmentação demográfica de pacientes para definir personas e orientar o marketing.",
        "Rotinas de ETL em Power Query e VBA automatizando relatórios de insumos e cálculos financeiros.",
      ],
      resultados: [
        "Tempo de preparação do relatório financeiro mensal reduzido em ~70%.",
        "Margem 3% maior a partir das decisões de precificação.",
        "Rupturas e perdas de insumos reduzidas em 6%.",
        "22% de registros duplicados ou inconsistentes eliminados.",
      ],
      stack: ["Excel", "VBA", "Power Query"],
      eixos: ["negocio", "dados"],
    },
  ],

  linhaDoTempo: [
    { ano: "2020", titulo: "Moro e Messias", detalhe: "Operações, pricing e os primeiros controles em Excel/VBA." },
    { ano: "2024", titulo: "Foco total em Dados", detalhe: "Ano dedicado a aprofundar a base técnica em Dados, com o Google Data Analytics concluído em novembro." },
    { ano: "2024", titulo: "Ativação Group", detalhe: "Primeira função dedicada a dados: sell-out, OTB e Python." },
    { ano: "2025", titulo: "Superus Engenharia", detalhe: "Inteligência de mercado, CRM em Supabase, 40+ dashboards." },
    { ano: "2025", titulo: "Ciência de Dados", detalhe: "Início do tecnólogo na Estácio, conclusão em jul/2027." },
    { ano: "2026", titulo: "Airflow 3", detalhe: "Certificação Astronomer em orquestração." },
  ],

  projetos: {
    eyebrow: "Projetos",
    titulo: "O que eu construí, e o que cada coisa resolveu",
    apoio: "Projeto corporativo, case técnico e projeto de portfólio estão rotulados. Onde o escopo tem limite, o limite está escrito. Clique nas imagens para ampliar.",
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
        imagens: [
          {
            src: "projetos/aviacao-dashboard.png",
            alt: "Dashboard de análise de cenário do mercado de aviação, com filtros de mês, ano, natureza e aeroporto de origem sobre uma faixa de indicadores.",
            legenda: "Análise de cenário por aeroporto de origem. Valores desfocados por confidencialidade.",
          },
        ],
      },
      {
        titulo: "Análise de cenário setorial",
        natureza: "Projeto corporativo",
        org: "Superus Engenharia",
        resumo:
          "Painel de mercado por setor industrial (mineração, siderurgia, papel e celulose) cruzando produção, exportação e indicadores financeiros para dimensionar demanda endereçável.",
        destaques: [
          "Indicadores por setor na mesma régua, comparáveis entre si.",
          "Séries históricas com corte por ano, para leitura de tendência.",
          "Usado pela diretoria comercial na priorização de clientes.",
        ],
        stack: ["Power BI", "DAX", "SQL", "Python"],
        eixos: ["dados", "negocio"],
        imagens: [
          {
            src: "projetos/mercado-setorial-dashboard.png",
            alt: "Dashboard de análise de cenário de mercado com blocos por setor industrial e indicadores de produção e exportação.",
            legenda: "Indicadores por setor industrial. Valores desfocados por confidencialidade.",
          },
        ],
      },
      {
        titulo: "Prospecção com IA generativa",
        natureza: "Projeto corporativo",
        org: "Superus Engenharia",
        resumo:
          "API do Claude integrada à do Apollo.io: um comando em linguagem natural vira consulta estruturada de inteligência comercial, e o resultado sai como base de contatos pronta para o time comercial.",
        destaques: [
          "Engenharia de prompt, tool calling e validação do retorno estruturado.",
          "Base por empresa, cargo, planta e nível de decisão (decisor, influenciador, operacional).",
          "Busca de contatos de uma conta de ~2 horas para ~5 minutos.",
          "Adotada pelos times Comercial e RH.",
        ],
        stack: ["Python", "Claude API", "Apollo.io API", "REST", "Tool calling"],
        eixos: ["engenharia", "negocio"],
        imagens: [
          {
            src: "projetos/prospeccao-base-contatos.png",
            alt: "Planilha gerada pela automação com colunas de empresa, nome, cargo, planta, nível de decisão, e-mail, LinkedIn e telefone; nomes e contatos desfocados.",
            legenda: "Base de contatos gerada pela automação. Nomes e dados de contato desfocados.",
          },
        ],
      },
      {
        titulo: "Adoção de IA generativa na empresa",
        natureza: "Projeto corporativo",
        org: "Superus Engenharia",
        resumo:
          "Puxei a adoção de IA generativa na Superus: da prova de conceito com ganho medido à apresentação de boas práticas para os times, e virei referência interna no assunto.",
        destaques: [
          "Prova de conceito com ganho mensurável levou a empresa a expandir as licenças para outros setores.",
          "Apresentações e guias para os times sobre uso de IA no dia a dia e escolha do modelo certo para cada tarefa.",
          "Base de conhecimento e prompts estruturados para relatórios e apresentações com a identidade visual da empresa: de 3h+ para menos de 1h.",
          "Claude Code com MCP de Power BI e Supabase na modelagem de dashboards: 6h+ por semana poupadas.",
        ],
        stack: ["Claude", "Claude Code", "MCP", "Engenharia de prompt", "Gestão da mudança"],
        eixos: ["engenharia", "negocio"],
        imagens: [
          {
            src: "projetos/apresentacao-ia-1.jpg",
            alt: "Pericles, de camisa verde da Superus, apresentando sobre IA generativa para colegas em pé no escritório.",
            legenda: "Apresentação sobre IA generativa para os times.",
            retrato: true,
          },
          {
            src: "projetos/apresentacao-ia-2.jpg",
            alt: "Visão ampla do escritório com os colaboradores reunidos acompanhando a apresentação sobre IA.",
            legenda: "Times de várias áreas acompanhando a apresentação.",
            retrato: true,
          },
        ],
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
          "Usado pela operação por um período e depois descontinuado por falta de estrutura de sustentação: manutenção, infraestrutura e custo de API. O aprendizado foi o ciclo completo: ingestão, orquestração, observabilidade e ownership em produção.",
        eixos: ["engenharia"],
        imagens: [
          {
            src: "projetos/weather-azure-blob.png",
            alt: "Container weather-container no Azure Blob Storage, com a pasta capitais-batch listando um diretório por capital brasileira.",
            legenda: "Saída do pipeline no Azure Blob Storage, particionada por capital.",
          },
        ],
      },
      {
        titulo: "Threshold de aprovação e preço de garantia",
        natureza: "Case técnico",
        resumo:
          "Case de risco em e-commerce: dataset de pedidos ligando score de risco, aprovação, chargeback e unit economics de uma garantia, do cálculo à recomendação de operação.",
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
        imagens: [
          {
            src: "projetos/case-threshold-distribuicao.png",
            alt: "Dois histogramas da distribuição do classification_score com a linha do threshold em 0,8608: a distribuição completa e a cauda esquerda.",
            legenda: "Distribuição do score e a cauda esquerda, com o corte de aprovação em 0,8608.",
          },
        ],
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
        titulo: "Life-OS",
        natureza: "Projeto de portfólio",
        resumo:
          "Aplicação pessoal de hábitos, humor, finanças e carreira em React, TypeScript, Tailwind e Supabase, com painéis de estatística construídos do zero.",
        destaques: [
          "Supabase/PostgreSQL com autenticação e row-level security.",
          "Gráficos próprios em SVG (linha, barra, funil, heatmap) sem biblioteca de charting.",
          "Métricas derivadas: aderência, sequência, comparação com o mês anterior e projeção de gastos no ritmo atual.",
          "Paleta e tipografia em tokens CSS, com tema claro e escuro.",
        ],
        stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
        eixos: ["engenharia", "dados"],
        imagens: [
          {
            src: "projetos/lifeos-habitos.png",
            alt: "Painel de hábitos com aderência, sequência atual, heatmap de conclusão diária, frequência por hábito e aderência por dia da semana.",
            legenda: "Estatísticas de hábitos. Alguns valores desfocados.",
          },
          {
            src: "projetos/lifeos-financas.png",
            alt: "Painel de finanças com despesas, saldo, gastos fixos, projeção do mês, despesas acumuladas contra o mês anterior e despesas por categoria.",
            legenda: "Estatísticas de finanças. Valores desfocados.",
          },
        ],
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
        periodo: "jan/2025 a jul/2027",
        detalhe: "Estatística, programação, Python, SQL, bancos de dados, cloud, machine learning e visualização.",
        tipo: "graduacao",
        andamento: true,
      },
      {
        titulo: "Astronomer Certification: Apache Airflow 3 Fundamentals",
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
    papelAtual: "Analista de Dados e Inteligência de Mercado · Superus Engenharia",
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
    qrWhatsapp: "Escaneie para falar comigo no WhatsApp",
    tema: "Tema",
    idioma: "Idioma",
    pularParaConteudo: "Pular para o conteúdo",
    comoApurado: (label) => `Como "${label}" é apurado`,
    rodape: "React · TypeScript · Tailwind",
  },
};
