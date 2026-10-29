import type { Conteudo } from "@/data/tipos";

/**
 * Versão em português. Escrita do jeito que eu falo: frase curta, primeira
 * pessoa e direto ao ponto. Cada linha é uma entrega ou um número.
 */
export const PT: Conteudo = {
  idioma: "pt",
  lang: "pt-BR",
  manchete: "Trabalho com dados, BI e inteligência de mercado.",
  resumo:
    "Tenho mais de 5 anos de experiência com análise de dados, BI, inteligência de mercado e automação com IA. Hoje estou na Superus Engenharia cuidando dos dados de um funil comercial de R$ 3,5 bilhões. Escrevo o SQL em cima do CRM, monto os dashboards e entrego os relatórios que a diretoria usa para decidir onde focar.",
  cargo: "Analista de Dados e Inteligência de Mercado",
  areasFoco: ["Analista de Dados", "Analista de BI", "Analytics Engineer", "Inteligência de Mercado"],

  kpis: [
    {
      label: "Funil acompanhado",
      valor: "R$ 3,5",
      sufixo: "bi+",
      contexto: "Negociações do time comercial da Superus",
      nota: "Soma das oportunidades em aberto na carteira comercial que eu acompanho.",
    },
    {
      label: "Nova unidade de negócio",
      valor: "R$ 10",
      sufixo: "mi+/ano",
      contexto: "Faturamento da unidade que saiu do meu estudo de mercado de CAPEX",
      nota: "Fiz o dimensionamento do mercado de CAPEX industrial usando os relatórios de RI de quase 100 clientes. Esse estudo deu origem a uma unidade de negócio nova, com equipe própria e funil de R$ 600 mi+.",
    },
    {
      label: "Dashboards em Power BI",
      valor: "40",
      sufixo: "+",
      contexto: "Juntando mais de 30 fontes, usados toda semana pela diretoria",
      nota: "Indicadores comerciais, carteira, pipeline, auditoria e reporting para a diretoria. Fora outros 26 no projeto da ASAP Facilities.",
    },
    {
      label: "Busca de contatos",
      valor: "2h → 5min",
      contexto: "Automação Claude + Apollo.io, usada pelo Comercial e pelo RH",
      nota: "Antes eu levava umas 2 horas para mapear os contatos de uma conta na mão. Depois que integrei a API do Claude com a do Apollo.io, caiu para uns 5 minutos.",
    },
  ],

  trajetoria: {
    eyebrow: "Trajetória",
    titulo: "Por onde eu passei",
    apoio: "Comecei com operações e pricing numa clínica, fui para análise comercial no varejo e hoje trabalho com dados e inteligência de mercado numa empresa de engenharia.",
  },

  experiencias: [
    {
      cargo: "Analista de Dados e Inteligência de Mercado",
      empresa: "Superus Engenharia",
      periodo: "jul/2025 a presente",
      atual: true,
      contexto:
        "Empresa de engenharia e manutenção industrial que atende mineração, siderurgia, petroquímica, papel e celulose e energia. Cuido de dados, inteligência comercial e de mercado, CRM, BI e automação.",
      entregas: [
        "Dimensionei o mercado de CAPEX industrial no Brasil, extraindo e modelando os dados de investimento dos relatórios de RI de quase 100 clientes.",
        "Liderei a parte técnica da migração da carteira comercial para um CRM próprio, com acesso aos dados via Supabase/PostgreSQL.",
        "Criei views SQL de OPEX e CAPEX que ficam entre o CRM e o Power BI. Assim a regra de negócio mora no banco e não precisa ser repetida em DAX.",
        "Usei LEFT JOIN LATERAL para extrair a fase do workflow que fica em JSONB, CASE para classificar os estados e COALESCE para tratar valor de contrato faltando.",
        "Fiz mais de 40 dashboards em star schema juntando mais de 30 fontes, com DAX avançado, inteligência temporal e RLS por perfil.",
        "Montei dashboards de auditoria para checar a qualidade dos dados, como campo obrigatório vazio, cobertura da carteira e previsão de fechamento vencida.",
        "Criei um dicionário de métricas tirado direto do modelo com INFO.VIEW.MEASURES().",
        "Automatizei o envio dos relatórios semanais pelo Power Automate, um para cada vendedor.",
        "Criei uma chave única por oportunidade para garantir integridade referencial e permitir análise de market share.",
        "Puxo indicadores do IpeaData (IBC, Selic, câmbio, confiança da indústria) por API REST em Python e trato tudo em pandas.",
        "Montei fluxos com IA generativa (Claude API, MCP) para prospecção, relatórios e apresentações no padrão visual da empresa.",
        "Uso MCP de Supabase e Power BI no Claude Code para consultar e modelar em linguagem natural, inclusive uma medida DAX que gera o HTML do visual HTML Content.",
      ],
      resultados: [
        "O estudo de mercado de CAPEX deu origem a uma unidade de negócio nova, com equipe própria, R$ 10 mi+ de faturamento por ano e funil de R$ 600 mi+.",
        "Reduzi as inconsistências do CRM em 12% com views em PostgreSQL, regras de negócio e checagens de qualidade.",
        "A diretoria e a presidência usam os dashboards toda semana para priorizar mais de 50 oportunidades.",
        "Acabei com 3h semanais de trabalho manual automatizando a coleta do IpeaData.",
        "Com IA generativa, a busca de contatos caiu de ~2h para ~5 min e a criação de apresentações de 3h+ para menos de 1h.",
        "Economizo mais de 6h por semana na modelagem de dashboards em PBIP usando Claude + powerbi-modelling-mcp.",
      ],
      stack: ["Power BI", "DAX", "Power Query", "PostgreSQL", "Supabase", "SQL", "Python", "pandas", "APIs REST", "Power Automate", "MCP", "Claude API"],
      eixos: ["dados", "negocio", "engenharia"],
    },
    {
      cargo: "Analista de Dados Comerciais",
      empresa: "Ativação Group",
      periodo: "dez/2024 a jul/2025",
      contexto: "Varejo de calçados. Trabalhei com sell-out, carteira de clientes e Open-to-Buy para apoiar as decisões de compra com base em demanda e giro.",
      entregas: [
        "Fiz análises exploratórias de sell-out no Power BI em mais de 30 SKUs e lojas para achar padrões de consumo.",
        "Montei o Open-to-Buy (OTB) com histórico de demanda e giro de estoque para orientar compra e mix.",
        "Estruturei e modelei as bases usadas nas análises, nos indicadores e nas séries temporais.",
        "Cuidei das bases de clientes e lojas, corrigindo o que estava inconsistente.",
        "Automatizei o ETL de sell-out no Power Query.",
        "Escrevi um script em Python (pandas) que trata as bases e manda os relatórios por e-mail sozinho.",
      ],
      resultados: [
        "R$ 50 mil+ em vendas a mais com oportunidades que encontrei nas análises.",
        "Excesso de estoque 7% menor com as decisões tomadas a partir do OTB.",
        "O processamento do sell-out caiu de 1h para 5 min.",
        "O tratamento e envio dos relatórios caiu de ~30 min para ~2 min.",
        "Estruturei dados de ~3.000 unidades usados em negociações de ~R$ 5 milhões.",
      ],
      stack: ["Power BI", "Power Query", "Python", "pandas", "Excel avançado", "Pipefy"],
      eixos: ["dados", "negocio"],
    },
    {
      cargo: "Analista de Pricing e Dados",
      empresa: "Moro e Messias",
      periodo: "out/2020 a dez/2023",
      contexto: "Clínica de dermatologia com quatro pessoas. Eu fazia um pouco de tudo, de operações e pricing a dados e controle financeiro.",
      entregas: [
        "Acompanhava os preços de fornecedores e concorrentes em mais de 50 produtos para definir nossos preços.",
        "Controlava o estoque de insumos com indicadores de consumo e custo.",
        "Integrei as bases de pacientes, produtos e fornecedores, com regras de qualidade e integridade referencial.",
        "Fiz análise e segmentação demográfica dos pacientes para definir personas e ajudar no marketing.",
        "Automatizei relatórios de insumos e cálculos financeiros com Power Query e VBA.",
      ],
      resultados: [
        "O relatório financeiro do mês passou a levar ~70% menos tempo.",
        "Margem 3% maior com as decisões de preço.",
        "Rupturas e perdas de insumos 6% menores.",
        "Eliminei 22% de registros duplicados ou inconsistentes.",
      ],
      stack: ["Excel", "VBA", "Power Query"],
      eixos: ["negocio", "dados"],
    },
  ],

  linhaDoTempo: [
    { ano: "2020", titulo: "Moro e Messias", detalhe: "Operações, pricing e meus primeiros controles em Excel e VBA." },
    { ano: "2024", titulo: "Foco total em Dados", detalhe: "Passei o ano estudando dados e terminei o Google Data Analytics em novembro." },
    { ano: "2024", titulo: "Ativação Group", detalhe: "Primeiro cargo só com dados. Sell-out, OTB e Python." },
    { ano: "2025", titulo: "Superus Engenharia", detalhe: "Inteligência de mercado, CRM no Supabase e mais de 40 dashboards." },
    { ano: "2025", titulo: "Ciência de Dados", detalhe: "Comecei o tecnólogo na Estácio, com término previsto para jul/2027." },
    { ano: "2026", titulo: "Airflow 3", detalhe: "Tirei a certificação da Astronomer em orquestração." },
  ],

  projetos: {
    eyebrow: "Projetos",
    titulo: "Algumas coisas que eu fiz",
    apoio: "Separei entre projetos de empresa, case técnico e projetos pessoais. Quando tem alguma limitação, deixei escrito. Dá para clicar nas imagens para ampliar.",
    itens: [
      {
        titulo: "Inteligência de dados para aviação",
        natureza: "Projeto corporativo",
        org: "ASAP Facilities",
        resumo:
          "Peguei cerca de 10 anos de dados de voos da ANAC, na casa dos milhões de registros, e transformei em análises de performance da aviação brasileira, market share e priorização comercial.",
        destaques: [
          "26 dashboards a partir de 35 bases diferentes.",
          "Passageiros, combustível, bagagens, RPK, RTK, ASK, ATK e decolagens por aeroporto e aeronave.",
          "IPCA, IBC, Selic, câmbio, PIB e preço do querosene integrados à base.",
          "Cruzei as reclamações do consumidor.gov para ver padrões na qualidade do serviço.",
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
          "Painel de mercado por setor industrial (mineração, siderurgia, papel e celulose) que junta produção, exportação e indicadores financeiros para estimar o tamanho da demanda que a gente consegue atender.",
        destaques: [
          "Indicadores de todos os setores na mesma escala, para dar para comparar.",
          "Séries históricas com filtro por ano para ver a tendência.",
          "A diretoria comercial usa para priorizar clientes.",
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
          "Integrei a API do Claude com a do Apollo.io. A pessoa escreve o que precisa em linguagem natural, isso vira uma consulta estruturada e o resultado sai como uma base de contatos pronta para o comercial usar.",
        destaques: [
          "Engenharia de prompt, tool calling e validação do retorno.",
          "Contatos separados por empresa, cargo, planta e nível de decisão (decisor, influenciador, operacional).",
          "A busca de contatos de uma conta caiu de ~2 horas para ~5 minutos.",
          "Os times Comercial e RH usam no dia a dia.",
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
          "Puxei o uso de IA generativa na Superus. Comecei com uma prova de conceito com ganho medido, depois fiz apresentações de boas práticas para os times, e hoje sou quem o pessoal procura quando o assunto é IA.",
        destaques: [
          "A prova de conceito mostrou ganho e a empresa liberou licenças para outros setores.",
          "Fiz apresentações e guias sobre como usar IA no dia a dia e qual modelo escolher para cada tarefa.",
          "Montei base de conhecimento e prompts para relatórios e apresentações no padrão visual da empresa, que passaram de 3h+ para menos de 1h.",
          "Uso Claude Code com MCP de Power BI e Supabase para modelar dashboards e economizo mais de 6h por semana.",
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
            legenda: "Pessoal de várias áreas acompanhando a apresentação.",
            retrato: true,
          },
        ],
      },
      {
        titulo: "Weather Data Pipeline",
        natureza: "Projeto corporativo",
        org: "ASAP Facilities",
        resumo:
          "Coleta de hora em hora do clima das 27 capitais, orquestrada no Airflow e salva num data warehouse no Azure, para ajudar no planejamento das operações de solo.",
        destaques: [
          "DAGs com dependências explícitas, scheduler, retry, logging e monitoramento.",
          "Extração de API externa respeitando o rate limit e tratando erro.",
          "Validação e normalização do payload antes de salvar.",
          "Particionamento por capital no Blob Storage.",
        ],
        stack: ["Apache Airflow", "Python", "Azure", "APIs REST"],
        ressalva:
          "A operação usou por um tempo, mas foi descontinuado porque não tinha estrutura para manter (manutenção, infraestrutura e custo da API). Mesmo assim, foi onde eu passei pelo ciclo completo de ingestão, orquestração, observabilidade e manutenção em produção.",
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
          "Case de risco em e-commerce com uma base de pedidos que liga score de risco, aprovação, chargeback e o unit economics de uma garantia. Fui do cálculo até a recomendação de como operar.",
        destaques: [
          "Threshold no percentil 10% do score, com corte em ~0,86.",
          "~90% de aprovação e 0,42% de chargeback entre os aprovados.",
          "US$ 15,41 mi de receita aprovada contra US$ 15,09 mil de chargeback.",
          "Fee mínima de 0,20%, com recomendação de operar entre 0,25% e 0,30% para absorver variação.",
          "Monitoramento de drift, recalibrando se a aprovação variar ±1% ou o chargeback passar de 0,60%.",
        ],
        stack: ["Python", "pandas", "NumPy", "SciPy", "Matplotlib"],
        ressalva: "Os critérios de monitoramento são hipóteses que eu defini no próprio case, sem validação externa.",
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
        natureza: "Projeto pessoal",
        resumo:
          "Modelo em XGBoost que junta histórico de investimento, indicadores financeiros, commodities e dados macro para estimar investimentos futuros e ajudar a priorizar clientes.",
        destaques: [
          "Feature engineering com variáveis macroeconômicas e de commodities.",
          "Serve para apoiar a priorização comercial. A decisão continua com o time.",
        ],
        stack: ["Python", "pandas", "XGBoost"],
        ressalva:
          "Ainda é exploratório. Não formalizei a validação nem a métrica de erro contra um baseline, então uso só como apoio.",
        eixos: ["dados"],
      },
      {
        titulo: "Life-OS",
        natureza: "Projeto pessoal",
        resumo:
          "App que eu fiz para acompanhar hábitos, humor, finanças e carreira, em React, TypeScript, Tailwind e Supabase, com os painéis de estatística feitos do zero.",
        destaques: [
          "Supabase/PostgreSQL com autenticação e row-level security.",
          "Gráficos em SVG feitos na mão (linha, barra, funil, heatmap), sem biblioteca de gráficos.",
          "Métricas como aderência, sequência, comparação com o mês anterior e projeção de gastos no ritmo atual.",
          "Cores e tipografia em tokens CSS, com tema claro e escuro.",
        ],
        stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
        eixos: ["engenharia", "dados"],
        destaque: true,
        video: {
          src: "projetos/lifeos-video.mp4",
          poster: "projetos/lifeos-video-poster.jpg",
          alt: "Vídeo de apresentação do Life-OS: telas de início, hábitos, finanças e estatísticas, e as decisões por trás das métricas de aderência, comparação e projeção.",
          legenda: "Apresentação em 1min26s, narrada em inglês e com legendas. Dados de demonstração fictícios.",
        },
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
    titulo: "Ferramentas que eu uso no dia a dia",
    apoio: "Separei pelos três eixos em que eu trabalho.",
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
    titulo: "Formação e certificações",
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
        detalhe: "O ciclo de análise de ponta a ponta, com SQL, planilhas, R e Tableau.",
        tipo: "certificacao",
      },
    ],
    emDesenvolvimento: [
      "dbt para transformação versionada, com testes e documentação.",
      "CI/CD para pipelines de dados e Docker.",
      "Processamento distribuído (Spark/Databricks) e formatos colunares.",
      "IA além de chamar API, como RAG, embeddings e avaliação de LLM.",
    ],
  },

  contato: {
    eyebrow: "Contato",
    titulo: "Quer conversar?",
    apoio: "Pode me chamar no WhatsApp, no LinkedIn ou por e-mail. Se quiser ver código antes, meu GitHub é aberto.",
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
    verProjetos: "Ver projetos",
    papelAtual: "Analista de Dados e Inteligência de Mercado · Superus Engenharia",
    formacaoEmCurso: "Cursando Tecnólogo em Ciência de Dados",
    atual: "Atual",
    resultados: "Resultados",
    mostrarEntregas: (n) => `O que eu fiz (${n})`,
    ocultarEntregas: "Esconder",
    filtrarProjetos: "Filtrar projetos por eixo",
    projetoDestaque: "Projeto em destaque",
    todos: "Todos",
    linhaDoTempo: "Linha do tempo",
    emCurso: "Em curso",
    emDesenvolvimento: "Estudando agora",
    emDesenvolvimentoApoio: "Coisas que eu ainda não domino e estou estudando.",
    enviarEmail: "Enviar e-mail",
    qrWhatsapp: "Aponte a câmera para falar comigo no WhatsApp",
    faleComigo: "Fale comigo",
    tema: "Tema",
    idioma: "Idioma",
    pularParaConteudo: "Pular para o conteúdo",
    comoApurado: (label) => `Como cheguei em "${label}"`,
    rodape: "React · TypeScript · Tailwind",
  },
};
