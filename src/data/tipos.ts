/**
 * Formato do conteúdo do portfólio. Cada idioma entrega um objeto deste tipo
 * (`pt.ts`, `en.ts`), então o TypeScript reclama se uma tradução esquecer um
 * campo — é o que mantém as duas versões em sincronia sem revisão manual.
 */

export type Idioma = "pt" | "en";

export type Eixo = "dados" | "engenharia" | "negocio";

export interface Imagem {
  /** Caminho relativo dentro de `public/`, sem barra inicial. */
  src: string;
  /** Descrição para leitor de tela e para quando a imagem não carrega. */
  alt: string;
  /** Legenda curta sob a imagem. */
  legenda: string;
}

export interface Kpi {
  label: string;
  valor: string;
  sufixo?: string;
  contexto: string;
  /** Como o número foi apurado, no balão de informação. */
  nota?: string;
}

export interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  atual?: boolean;
  contexto: string;
  entregas: string[];
  resultados: string[];
  stack: string[];
  eixos: Eixo[];
}

export interface Projeto {
  titulo: string;
  natureza: string;
  org?: string;
  resumo: string;
  destaques: string[];
  stack: string[];
  eixos: Eixo[];
  /** Observação honesta sobre limite, escopo ou descontinuação. */
  ressalva?: string;
  imagem?: Imagem;
}

export interface GrupoStack {
  titulo: string;
  eixo: Eixo;
  itens: string[];
}

export interface Formacao {
  titulo: string;
  instituicao: string;
  periodo: string;
  detalhe: string;
  tipo: "graduacao" | "certificacao";
  andamento?: boolean;
}

export interface Marco {
  ano: string;
  titulo: string;
  detalhe: string;
}

/** Rótulos da interface — o que não é conteúdo de currículo. */
export interface Rotulos {
  navegacao: string;
  links: string;
  secoes: Record<"inicio" | "trajetoria" | "projetos" | "stack" | "formacao" | "contato", string>;
  eixos: Record<Eixo, string>;
  disponivel: string;
  buscoPosicoes: string;
  verProjetos: string;
  papelAtual: string;
  formacaoEmCurso: string;
  atual: string;
  resultados: string;
  mostrarEntregas: (n: number) => string;
  ocultarEntregas: string;
  filtrarProjetos: string;
  todos: string;
  linhaDoTempo: string;
  emCurso: string;
  emDesenvolvimento: string;
  emDesenvolvimentoApoio: string;
  enviarEmail: string;
  tema: string;
  idioma: string;
  pularParaConteudo: string;
  comoApurado: (label: string) => string;
  rodape: string;
}

export interface Conteudo {
  idioma: Idioma;
  /** Valor do atributo `lang` do documento. */
  lang: string;
  manchete: string;
  resumo: string;
  cargo: string;
  cargosAlvo: string[];
  kpis: Kpi[];
  trajetoria: { eyebrow: string; titulo: string; apoio: string };
  experiencias: Experiencia[];
  linhaDoTempo: Marco[];
  projetos: { eyebrow: string; titulo: string; apoio: string; itens: Projeto[] };
  stack: { eyebrow: string; titulo: string; apoio: string; grupos: GrupoStack[] };
  formacao: { eyebrow: string; titulo: string; itens: Formacao[]; emDesenvolvimento: string[] };
  contato: { eyebrow: string; titulo: string; apoio: string };
  rotulos: Rotulos;
}
