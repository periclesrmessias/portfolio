/**
 * Conteúdo do portfólio em um lugar só. Todo número aqui vem da Trajetória
 * Profissional; nada é estimado na tela. Quando um dado é de projeto pessoal ou
 * case técnico, o campo `natureza` registra isso — projeto de portfólio não é
 * apresentado como experiência corporativa.
 */

export const PERFIL = {
  nome: "Péricles Messias",
  cargo: "Analista de Inteligência de Mercado",
  empresa: "Superus Engenharia",
  // O resumo de uma linha que um recrutador lê em dois segundos.
  manchete: "Transformo dado disperso em decisão comercial.",
  resumo:
    "Analista de Dados atuando entre Analytics/BI, inteligência de mercado e automação. Hoje acompanho um funil comercial de mais de R$ 3,5 bilhões na Superus Engenharia — da camada SQL no CRM até o reporting que a diretoria usa para priorizar negociação.",
  email: "periclesrmessias@gmail.com",
  github: "https://github.com/periclesrmessias",
  linkedin: "https://www.linkedin.com/in/pericles-messias/",
  cargosAlvo: [
    "Analista de Dados",
    "Analista de BI",
    "Analytics Engineer",
    "Analista de Inteligência de Mercado",
  ],
} as const;

export interface Kpi {
  label: string;
  valor: string;
  /** Unidade ou prefixo pequeno, ao lado do número. */
  sufixo?: string;
  contexto: string;
  /** Explica como o número foi apurado, no balão de informação. */
  nota?: string;
}

/** A faixa de indicadores do topo: os quatro números que sustentam o pitch. */
export const KPIS: Kpi[] = [
  {
    label: "Funil comercial acompanhado",
    valor: "R$ 3,5",
    sufixo: "bi+",
    contexto: "Em negociações do time comercial da Superus",
    nota: "Soma das oportunidades em aberto na carteira comercial acompanhada analiticamente.",
  },
  {
    label: "Dashboards em Power BI",
    valor: "40",
    sufixo: "+",
    contexto: "Desenvolvidos e mantidos na Superus",
    nota: "Indicadores comerciais, carteira, pipeline, auditoria e reporting executivo. Outros 26 foram construídos no projeto da ASAP Facilities.",
  },
  {
    label: "Mapeamento de contatos",
    valor: "2h → 2min",
    contexto: "Automação Claude + Apollo.io, adotada por Comercial e RH",
    nota: "Tempo de mapear contatos de uma conta, antes manual, depois da integração entre a API do Claude e a do Apollo.io.",
  },
  {
    label: "Clientes sob inteligência de mercado",
    valor: "~100",
    contexto: "Relatórios de RI, notícias e CAPEX monitorados",
    nota: "Carteira acompanhada via relatórios corporativos, Relações com Investidores e fontes públicas, em mineração, siderurgia, papel e celulose, energia e petroquímica.",
  },
];

export type Eixo = "dados" | "engenharia" | "negocio";

export const EIXOS: Record<Eixo, { label: string; classe: string; ponto: string }> = {
  dados: { label: "Analytics & BI", classe: "text-area-corpo", ponto: "bg-area-corpo" },
  engenharia: { label: "Engenharia de Dados", classe: "text-area-carreira", ponto: "bg-area-carreira" },
  negocio: { label: "Inteligência de Negócio", classe: "text-area-lazer", ponto: "bg-area-lazer" },
};

export interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  atual?: boolean;
  contexto: string;
  /** Uma entrega por linha, começando pelo que mudou — não pela rotina. */
  entregas: string[];
  resultados: string[];
  stack: string[];
  eixos: Eixo[];
}

export const EXPERIENCIAS: Experiencia[] = [
  {
    cargo: "Analista de Inteligência de Mercado",
    empresa: "Superus Engenharia",
    periodo: "jul/2025 — presente",
    atual: true,
    contexto:
      "Serviços de engenharia, manutenção, andaimes e projetos para mineração, siderurgia, metalurgia, petroquímica, papel e celulose, energia e logística. A função combina análise de dados, inteligência comercial e de mercado, governança de CRM, BI e automação.",
    entregas: [
      "Liderança técnica na migração da carteira comercial para CRM próprio, com acesso aos dados via Supabase/PostgreSQL e estruturação para consumo analítico no Power BI.",
      "Views SQL de OPEX e CAPEX funcionando como camada semântica e contrato de dados entre o CRM transacional e o Power BI — regra de negócio empurrada para o banco em vez de duplicada em DAX.",
      "Extração da fase de workflow armazenada em JSONB com LEFT JOIN LATERAL; CASE para classificar estados de negócio e COALESCE para encadear fallback de valor de contrato.",
      "Mais de 40 dashboards em Power BI com star schema, DAX avançado e inteligência temporal, incluindo RLS para segregar dado sensível por perfil.",
      "Dashboards de auditoria operando como data quality checks: completude de campo obrigatório, cobertura de carteira e expectativa de fechamento vencida.",
      "Documentação de modelo orientada a metadados via INFO.VIEW.MEASURES(), gerando dicionário de métricas auditável.",
      "Distribuição push-based de relatórios semanais via Power Automate, individualizados por vendedor e coerentes com o escopo do RLS.",
      "Identificador único por oportunidade e chave de negócio para reforçar integridade referencial, rastreabilidade e análise de market share.",
      "Leitura de relatórios de Relações com Investidores e fontes públicas para ligar CAPEX, expansão de capacidade, paradas e problemas operacionais a oportunidades endereçáveis.",
      "Ingestão de indicadores macroeconômicos do IpeaData (IBC, Selic, câmbio, confiança da indústria, preços) em Python, normalizados em pandas para junção com a base comercial.",
      "Servidores MCP de Supabase e Power BI integrados ao Claude Code para consulta de dados e modelagem em linguagem natural — incluindo medida DAX que gera HTML consumido pelo visual HTML Content.",
    ],
    resultados: [
      "Recorrência de inconsistências que aparecia em pelo menos 2 de 5 fechamentos semanais eliminada após as correções de governança, removendo ao menos 2 retrabalhos semanais.",
      "Mais de 6 horas semanais poupadas na modelagem e criação de dashboards em PBIP com a integração Claude + powerbi-modelling-mcp.",
      "Mais de 1 hora mensal poupada por setor (Comercial, FP&A e diretoria) na consolidação CRM + Supabase dentro do dashboard comercial em HTML.",
    ],
    stack: ["Power BI", "DAX", "PostgreSQL", "Supabase", "SQL", "Python", "pandas", "Power Automate", "MCP", "Claude API"],
    eixos: ["dados", "negocio", "engenharia"],
  },
  {
    cargo: "Analista de Dados Comerciais",
    empresa: "Ativação Group",
    periodo: "dez/2024 — jul/2025",
    contexto:
      "Varejo calçadista. Análise de sell-out, carteira de clientes e Open-to-Buy, apoiando decisões de compra conforme demanda e giro.",
    entregas: [
      "Análises de sell-out no Power BI, identificando padrões de consumo e oportunidades comerciais.",
      "Análise de carteira e Open-to-Buy (OTB) para orientar decisão de compra por demanda e giro.",
      "Estruturação, limpeza e modelagem de bases para EDA, indicadores e análise de tendência e séries temporais.",
      "Governança das bases de clientes e lojas, com identificação e correção de inconsistências.",
      "Automação de ETL em Power Query e script Python para processamento de bases e envio automático de e-mails.",
      "Participação na pesquisa anual de satisfação do cliente, da elaboração das perguntas à consolidação dos resultados.",
    ],
    resultados: [
      "Mais de R$ 50 mil em vendas adicionais associados a oportunidades identificadas na análise de carteira.",
      "Envio de e-mails reduzido de ~30 minutos para ~2 minutos, com um único acionamento.",
      "Atuação em negociações de aproximadamente R$ 900 mil, com quase 3 mil pares processados via Excel e Pipefy.",
    ],
    stack: ["Power BI", "Power Query", "Python", "Excel avançado", "Pipefy"],
    eixos: ["dados", "negocio"],
  },
  {
    cargo: "Analista de Pricing e Dados",
    empresa: "Moro e Messias",
    periodo: "out/2020 — dez/2023",
    contexto:
      "Clínica dermatológica de quatro pessoas, com atuação multifuncional em operações, pricing, dados e controles financeiros. Média de 10 atendimentos por dia e ticket médio de cerca de R$ 600.",
    entregas: [
      "Pesquisa de preços de fornecedores e concorrentes, com manutenção dos registros e apoio às decisões de pricing.",
      "Controle de estoque de insumos: quantidades, custos e consumo de materiais.",
      "Integração de planilhas de pacientes e produtos para análises operacionais e gerenciais.",
      "Análise demográfica das fichas de pacientes (idade, perfil de renda, características de consumo) para definir personas e orientar ações de marketing.",
      "Excel/VBA para integração de bases e automação de relatórios de insumos médicos e cálculos financeiros; Power Query em processos ETL recorrentes.",
    ],
    resultados: [
      "Relatórios de custos e contábeis automatizados em Excel, simplificando a análise de caixa do sócio administrador.",
    ],
    stack: ["Excel", "VBA", "Power Query"],
    eixos: ["negocio", "dados"],
  },
];

export interface Projeto {
  titulo: string;
  natureza: "Projeto corporativo" | "Case técnico" | "Projeto de portfólio";
  org?: string;
  resumo: string;
  destaques: string[];
  stack: string[];
  eixos: Eixo[];
  /** Observação honesta sobre limite, escopo ou descontinuação. */
  ressalva?: string;
}

export const PROJETOS: Projeto[] = [
  {
    titulo: "Inteligência de Dados para aviação",
    natureza: "Projeto corporativo",
    org: "ASAP Facilities",
    resumo:
      "Cerca de 10 anos de dados de voos da ANAC, na casa dos milhões de registros, transformados em acompanhamento de performance da aviação brasileira, market share e priorização comercial.",
    destaques: [
      "26 dashboards construídos a partir de 35 bases de dados diferentes.",
      "Indicadores de passageiros, combustível, bagagens, RPK, RTK, ASK, ATK, decolagens e assentos por aeroporto e aeronave.",
      "Integração de IPCA, IBC, Selic, câmbio, PIB e preço do querosene de aviação.",
      "Reclamações do consumidor.gov cruzadas com a base para achar padrão de qualidade de serviço e oportunidade de atuação.",
      "Benchmarking de concorrentes por receita, market share, número de clientes, serviços e percepção de atendimento.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Python", "Excel"],
    eixos: ["dados", "negocio"],
  },
  {
    titulo: "Weather Data Pipeline",
    natureza: "Projeto corporativo",
    org: "ASAP Facilities",
    resumo:
      "Ingestão batch horária de condições meteorológicas e previsão das 27 capitais brasileiras, orquestrada em Apache Airflow e persistida em data warehouse no Azure, para apoiar o planejamento das operações de solo.",
    destaques: [
      "DAGs com dependências explícitas, scheduler, política de retry, logging e monitoramento.",
      "Extração de API externa sob rate limiting, com tratamento de erro e retentativa.",
      "Validação e normalização do payload antes da persistência.",
      "Aplicações previstas: planejamento de equipe, logística de insumos, proteção de alimentos e equipamentos e priorização de contingências.",
    ],
    stack: ["Apache Airflow", "Python", "Azure", "APIs REST"],
    ressalva:
      "Usado pela operação por um período e depois descontinuado por falta de estrutura de sustentação recorrente — manutenção do pipeline, infraestrutura em Azure, custo de serviços e dependência da API. O aprendizado prático foi o ciclo completo: ingestão, tratamento, orquestração, observabilidade e ownership operacional em produção.",
    eixos: ["engenharia"],
  },
  {
    titulo: "Automação de prospecção com IA generativa",
    natureza: "Projeto de portfólio",
    resumo:
      "Integração entre a API do Claude e a do Apollo.io para converter comando em linguagem natural em consulta estruturada de inteligência comercial e sourcing.",
    destaques: [
      "Engenharia de prompt, tool calling e validação de dados para retorno estruturado de contatos.",
      "Mapeamento de contatos reduzido de aproximadamente 2 horas para menos de 2 minutos.",
      "Adotada pelos times Comercial e RH.",
    ],
    stack: ["Python", "Claude API", "Apollo.io API", "REST", "JSON", "Tool calling"],
    eixos: ["engenharia", "negocio"],
  },
  {
    titulo: "Riskified — threshold de aprovação e precificação de garantia",
    natureza: "Case técnico",
    resumo:
      "Análise estatística sobre um dataset de pedidos ligando classificação de risco, taxa de aprovação, chargeback e unit economics de uma solução de garantia — do cálculo quantitativo à recomendação de operação.",
    destaques: [
      "Threshold definido no percentil 10% da distribuição de classification_score: corte em ~0,86.",
      "Taxa de aprovação de ~90% e chargeback de 0,42% entre os aprovados.",
      "Receita dos aprovados de US$ 15,41 mi contra US$ 15,09 mil de custo de chargeback.",
      "Fee mínima de 0,1959% assumindo chargeback em no máximo 50% da receita de fees; recomendação de operar entre 0,25% e 0,30% para absorver volatilidade.",
      "Proposta de monitorar drift do threshold, com recalibração se a aprovação sair ±1% do alvo ou o chargeback passar de 0,60%.",
    ],
    stack: ["Python", "pandas", "NumPy", "SciPy", "Matplotlib"],
    ressalva:
      "Os benchmarks e critérios de monitoramento são hipóteses produzidas no próprio case, não validação externa de mercado.",
    eixos: ["dados", "negocio"],
  },
  {
    titulo: "Modelo preditivo de CAPEX",
    natureza: "Projeto de portfólio",
    resumo:
      "Histórico de investimentos, indicadores financeiros, preços de commodities e variáveis macroeconômicas combinados em um modelo XGBoost para estimar investimento futuro e apoiar a priorização de clientes endereçáveis.",
    destaques: [
      "Feature engineering com variáveis macroeconômicas e de commodities.",
      "Usado como apoio à priorização comercial, não como decisão automatizada.",
    ],
    stack: ["Python", "pandas", "XGBoost"],
    ressalva:
      "Modelo exploratório: a estratégia de validação e a métrica de erro contra baseline ainda não estão formalizadas, então ele é apresentado como apoio à priorização e não como preditor validado.",
    eixos: ["dados"],
  },
  {
    titulo: "Extração de dados não estruturados",
    natureza: "Projeto de portfólio",
    resumo:
      "Captura de dados em PDFs, relatórios, notas fiscais e contratos, somada a scraping de indicadores macroeconômicos e preços de commodities em portais públicos, com entrega direta no Power BI.",
    destaques: [
      "OCR e parsing de PDF para estruturar fonte que antes era lida à mão.",
      "Integração ao Power BI reduzindo trabalho manual e aumentando a frequência de atualização.",
    ],
    stack: ["Python", "OCR", "Web scraping", "Claude", "Power Query", "Power BI"],
    eixos: ["engenharia", "dados"],
  },
  {
    titulo: "Life-OS",
    natureza: "Projeto de portfólio",
    resumo:
      "Aplicação pessoal de acompanhamento de hábitos, humor, finanças, carreira e lazer — React, TypeScript, Tailwind e Supabase, com storytelling de dados, gráficos desenhados à mão em SVG e sistema de design em tokens. É a base visual deste portfólio.",
    destaques: [
      "Camada de dados em Supabase/PostgreSQL com autenticação e row-level security.",
      "Gráficos próprios em SVG (linha, barra, funil, heatmap de calendário, bullet) sem biblioteca de charting.",
      "Paleta e tipografia em tokens CSS, tema claro e escuro sem classe condicional espalhada pelas telas.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
    eixos: ["engenharia"],
  },
];

export interface GrupoStack {
  titulo: string;
  eixo: Eixo;
  itens: string[];
}

export const STACK: GrupoStack[] = [
  {
    titulo: "BI e visualização",
    eixo: "dados",
    itens: [
      "Power BI",
      "DAX avançado",
      "Inteligência temporal",
      "Modelagem dimensional (star schema)",
      "Camada semântica",
      "Row-Level Security",
      "Power Query (M)",
      "Dashboards executivos",
    ],
  },
  {
    titulo: "SQL e modelagem",
    eixo: "engenharia",
    itens: [
      "PostgreSQL",
      "Supabase",
      "Views analíticas",
      "LEFT JOIN LATERAL",
      "JSONB",
      "CTE",
      "Data contracts",
      "Chaves de negócio e surrogate keys",
    ],
  },
  {
    titulo: "Python e automação",
    eixo: "engenharia",
    itens: [
      "pandas",
      "NumPy",
      "requests",
      "APIs REST",
      "Parsing e normalização de JSON",
      "ETL/ELT",
      "Web scraping",
      "OCR e parsing de PDF",
    ],
  },
  {
    titulo: "Engenharia de dados",
    eixo: "engenharia",
    itens: [
      "Apache Airflow",
      "DAGs, sensores e datasets",
      "Azure Blob Storage",
      "Azure Functions",
      "Data warehouse",
      "Rate limiting e retry",
      "Observabilidade",
      "Data quality checks",
    ],
  },
  {
    titulo: "Analytics e estatística",
    eixo: "dados",
    itens: [
      "EDA",
      "Séries temporais",
      "Análise de coorte",
      "Quantis e otimização de threshold",
      "Unit economics",
      "Análise de funil",
      "Market share",
      "XGBoost",
    ],
  },
  {
    titulo: "IA generativa",
    eixo: "engenharia",
    itens: [
      "Claude API",
      "Engenharia de prompt",
      "Tool calling",
      "Validação de saída estruturada",
      "Servidores MCP (Supabase, Power BI)",
      "MarkItDown",
    ],
  },
  {
    titulo: "Governança de dados",
    eixo: "dados",
    itens: [
      "Qualidade de dados",
      "Auditoria",
      "Padronização",
      "Integridade referencial",
      "Controle de acesso",
      "Documentação de metadados",
    ],
  },
  {
    titulo: "Negócio e domínio",
    eixo: "negocio",
    itens: [
      "Inteligência de mercado",
      "CRM analytics",
      "Gestão de pipeline",
      "Análise de CAPEX",
      "Relatórios de RI",
      "SWOT e benchmarking",
      "Pricing",
      "Sell-out e OTB",
    ],
  },
];

export interface Formacao {
  titulo: string;
  instituicao: string;
  periodo: string;
  detalhe: string;
  tipo: "graduacao" | "certificacao";
  andamento?: boolean;
}

export const FORMACAO: Formacao[] = [
  {
    titulo: "Tecnólogo em Ciência de Dados",
    instituicao: "Estácio",
    periodo: "jan/2025 — jul/2027",
    detalhe:
      "Estatística, matemática aplicada, programação, Python, SQL, bancos de dados, cloud, machine learning, mineração de dados e visualização.",
    tipo: "graduacao",
    andamento: true,
  },
  {
    titulo: "Astronomer Certification for Apache Airflow 3 Fundamentals",
    instituicao: "Astronomer",
    periodo: "fev/2026",
    detalhe:
      "Arquitetura do Airflow 3, DAGs modulares, scheduler, sensores, operadores, datasets, execução dinâmica, retry, observabilidade e testes de DAG.",
    tipo: "certificacao",
  },
  {
    titulo: "Google Data Analytics Professional Certificate",
    instituicao: "Google",
    periodo: "nov/2024",
    detalhe:
      "Ciclo analítico completo: formulação de perguntas, coleta, limpeza, análise e comunicação, com SQL, planilhas, R e Tableau.",
    tipo: "certificacao",
  },
];

/** Marcos da linha do tempo, em ordem cronológica. */
export interface Marco {
  ano: string;
  titulo: string;
  detalhe: string;
}

export const LINHA_DO_TEMPO: Marco[] = [
  { ano: "2020", titulo: "Moro e Messias", detalhe: "Operações, pricing e os primeiros controles em Excel/VBA." },
  {
    ano: "2024",
    titulo: "Transição",
    detalhe: "Google Data Analytics concluído em novembro, voluntariado em ONG e trabalho como motorista de aplicativo no período.",
  },
  { ano: "2024", titulo: "Ativação Group", detalhe: "Primeira função dedicada a dados: sell-out, OTB e automação em Python." },
  { ano: "2025", titulo: "Superus Engenharia", detalhe: "Inteligência de mercado, CRM em Supabase, 40+ dashboards e governança." },
  { ano: "2025", titulo: "Ciência de Dados", detalhe: "Início do tecnólogo na Estácio, com conclusão prevista para jul/2027." },
  { ano: "2026", titulo: "Airflow 3", detalhe: "Certificação Astronomer em fundamentos de orquestração." },
];

/**
 * Seção deliberadamente incluída: declarar o que ainda não domino evita que o
 * portfólio prometa mais do que a trajetória sustenta — e é o que um
 * entrevistador técnico vai perguntar de qualquer forma.
 */
export const EM_DESENVOLVIMENTO = [
  "Transformação versionada com dbt, com testes e documentação de modelo.",
  "CI/CD para pipelines de dados (GitHub Actions) e containerização com Docker.",
  "Processamento distribuído (Spark/Databricks) e formatos colunares (Parquet/Delta).",
  "Projetos de IA além de consumo de API: RAG, embeddings, vector store e avaliação sistemática de LLM.",
];
