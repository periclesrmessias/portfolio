import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, BarChart3, FolderGit2, GraduationCap, Github, Layers, Linkedin, Mail, Route } from "lucide-react";
import { PERFIL } from "@/data/perfil";
import { ThemeToggle } from "@/components/ui";
import { cn } from "@/utils/cn";

export interface Secao {
  id: string;
  rotulo: string;
  icone: typeof BarChart3;
}

export const SECOES: Secao[] = [
  { id: "inicio", rotulo: "Visão geral", icone: BarChart3 },
  { id: "trajetoria", rotulo: "Trajetória", icone: Route },
  { id: "projetos", rotulo: "Projetos", icone: FolderGit2 },
  { id: "stack", rotulo: "Stack", icone: Layers },
  { id: "formacao", rotulo: "Formação", icone: GraduationCap },
  { id: "contato", rotulo: "Contato", icone: Mail },
];

/**
 * Qual seção está sendo lida: a última cujo topo já cruzou a linha logo abaixo
 * do cabeçalho. Critério fixo e não proporcional à altura da janela, para a
 * âncora acender a seção certa também em viewport baixa — e mais estável que o
 * `isIntersecting` puro, que pisca quando duas seções curtas cabem juntas.
 */
function useSecaoAtiva(): string {
  const [ativa, definirAtiva] = useState(SECOES[0].id);

  useEffect(() => {
    const avaliar = () => {
      // Pouco acima do `scroll-padding-top` (80px) onde a âncora pousa.
      const limite = 120;
      let atual = SECOES[0].id;
      for (const secao of SECOES) {
        const topo = document.getElementById(secao.id)?.getBoundingClientRect().top;
        if (topo !== undefined && topo <= limite) atual = secao.id;
      }
      // Fim da página: a última seção costuma ser curta demais para cruzar o
      // limite, e sem isso "Contato" nunca acende.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        atual = SECOES[SECOES.length - 1].id;
      }
      definirAtiva(atual);
    };
    avaliar();
    window.addEventListener("scroll", avaliar, { passive: true });
    window.addEventListener("resize", avaliar);
    return () => {
      window.removeEventListener("scroll", avaliar);
      window.removeEventListener("resize", avaliar);
    };
  }, []);

  return ativa;
}

function Marca() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-md bg-inverse text-inverse-text" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="h-5 w-5">
          <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 23 L13 14 L19 18 L26 8" />
          </g>
          <circle cx="26" cy="8" r="2.4" fill="currentColor" />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="m-0 truncate text-sm font-semibold text-text">{PERFIL.nome}</p>
        <p className="m-0 truncate text-xs text-text-faint">Dados · BI · Inteligência de Mercado</p>
      </div>
    </div>
  );
}

function LinkExterno({ href, children, icone }: { href: string; children: string; icone: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-sm font-medium text-text-dim no-underline transition-colors duration-150 hover:bg-surface-2/70 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span className="flex-shrink-0 text-text-faint">{icone}</span>
      <span className="min-w-0 flex-1 truncate">{children}</span>
      <ArrowUpRight size={14} strokeWidth={2} className="flex-shrink-0 text-text-faint" aria-hidden="true" />
    </a>
  );
}

/**
 * Casca da página: barra lateral fixa no desktop, barra superior rolável no
 * celular. A navegação é por âncora — é uma página só, e o scroll-spy diz onde
 * o leitor está.
 */
export function Shell({ children }: { children: ReactNode }) {
  const ativa = useSecaoAtiva();

  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-inverse focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-inverse-text"
      >
        Pular para o conteúdo
      </a>

      {/* Barra lateral — desktop */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-border bg-surface px-3 py-5 lg:flex">
        <div className="px-1.5">
          <Marca />
        </div>

        <nav className="mt-7 flex flex-1 flex-col gap-0.5" aria-label="Seções">
          <p className="m-0 mb-1 px-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-faint">Navegação</p>
          {SECOES.map(({ id, rotulo, icone: Icone }) => {
            const atual = ativa === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={atual ? "true" : undefined}
                className={cn(
                  "flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-sm no-underline transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  atual ? "bg-surface-2 font-semibold text-text" : "font-medium text-text-dim hover:bg-surface-2/70 hover:text-text",
                )}
              >
                <Icone size={17} strokeWidth={atual ? 2.1 : 1.8} className="flex-shrink-0" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">{rotulo}</span>
              </a>
            );
          })}

          <p className="m-0 mb-1 mt-5 px-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-faint">Links</p>
          <LinkExterno href={PERFIL.linkedin} icone={<Linkedin size={17} strokeWidth={1.8} />}>
            LinkedIn
          </LinkExterno>
          <LinkExterno href={PERFIL.github} icone={<Github size={17} strokeWidth={1.8} />}>
            GitHub
          </LinkExterno>
          <LinkExterno href={`mailto:${PERFIL.email}`} icone={<Mail size={17} strokeWidth={1.8} />}>
            E-mail
          </LinkExterno>
        </nav>

        <div className="flex items-center justify-between border-t border-border px-1.5 pt-4">
          <span className="text-xs text-text-faint">Tema</span>
          <ThemeToggle />
        </div>
      </aside>

      {/* Barra superior — celular e tablet */}
      <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <Marca />
          <ThemeToggle className="flex-shrink-0" />
        </div>
        <nav className="sem-barra-rolagem flex gap-1 overflow-x-auto px-3 pb-2" aria-label="Seções">
          {SECOES.map(({ id, rotulo }) => {
            const atual = ativa === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={atual ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-1.5 text-sm no-underline transition-colors duration-150",
                  atual ? "bg-inverse font-semibold text-inverse-text" : "font-medium text-text-dim hover:bg-surface-2",
                )}
              >
                {rotulo}
              </a>
            );
          })}
        </nav>
      </header>

      <main id="conteudo" className="lg:pl-60">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 md:py-14 lg:px-10">{children}</div>
      </main>
    </div>
  );
}
