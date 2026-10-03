import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { Info, Moon, Sun } from "lucide-react";
import { cn } from "@/utils/cn";
import { useTema } from "@/utils/tema";

/**
 * Bloco de conteúdo, na mesma geometria do Life-OS: no tema claro a separação
 * vem da borda fina e de uma sombra quase imperceptível; no escuro, da
 * superfície um degrau mais clara que o fundo.
 */
export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-5 shadow-card", className)} {...props}>
      {children}
    </div>
  );
}

/** Pílula de rótulo: tecnologia, natureza do projeto, eixo de atuação. */
export function Chip({
  children,
  tom = "neutro",
  className,
}: {
  children: ReactNode;
  tom?: "neutro" | "primario" | "ok" | "contorno";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium",
        tom === "neutro" && "bg-surface-2 text-text-dim",
        tom === "primario" && "bg-primary-soft text-primary-text",
        tom === "ok" && "bg-ok-soft text-ok",
        tom === "contorno" && "border border-border text-text-dim",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Botão em pílula. O principal é neutro invertido (preto no claro, quase branco
 * no escuro) para a cor de destaque ficar reservada ao dado.
 */
export function LinkButton({
  href,
  children,
  variante = "primario",
  icone,
  className,
  ...props
}: {
  href: string;
  children: ReactNode;
  variante?: "primario" | "secundario";
  icone?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLAnchorElement>, "children">) {
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      // `noopener` evita que a aba aberta alcance esta janela via `window.opener`.
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex h-10 select-none items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold no-underline",
        "transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variante === "primario" && "bg-inverse text-inverse-text hover:bg-inverse-hover",
        variante === "secundario" &&
          "border border-border bg-surface text-text shadow-card hover:border-border-strong hover:bg-surface-2",
        className,
      )}
      {...props}
    >
      {icone}
      {children}
    </a>
  );
}

/**
 * Metodologia em balão: como o número foi apurado. Abre no clique (e não só no
 * hover) para funcionar no toque, e fecha no Esc ou no clique fora.
 */
export function InfoTip({ children, rotulo }: { children: ReactNode; rotulo: string }) {
  const [aberto, definirAberto] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const aoClicar = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) definirAberto(false);
    };
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && definirAberto(false);
    document.addEventListener("mousedown", aoClicar);
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("mousedown", aoClicar);
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  return (
    <span ref={ref} className="relative inline-flex">
      <button
        type="button"
        aria-label={rotulo}
        aria-expanded={aberto}
        onClick={() => definirAberto((v) => !v)}
        className="grid h-4 w-4 place-items-center rounded-full text-text-faint transition-colors hover:text-text-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Info size={13} strokeWidth={2} aria-hidden="true" />
      </button>
      {aberto && (
        <span
          role="tooltip"
          className="absolute left-1/2 top-6 z-30 w-64 -translate-x-1/2 rounded-md border border-border bg-surface p-3 text-left text-xs leading-5 text-text-dim shadow-overlay"
        >
          {children}
        </span>
      )}
    </span>
  );
}

/** Troca de tema, no canto da navegação. */
export function ThemeToggle({ className }: { className?: string }) {
  const { escuro, alternar } = useTema();
  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-text-dim shadow-card",
        "transition-colors duration-150 hover:border-border-strong hover:text-text",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
    >
      {escuro ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
    </button>
  );
}

/**
 * Cabeçalho de seção. O rótulo pequeno em versalete dá o contexto, o título é a
 * manchete e a linha de apoio explica o recorte — mesma hierarquia do
 * `PageHeader` do Life-OS.
 */
export function SectionHeader({
  eyebrow,
  titulo,
  apoio,
  className,
}: {
  eyebrow: string;
  titulo: string;
  apoio?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 md:mb-8", className)}>
      <p className="m-0 mb-1.5 text-xs font-medium uppercase tracking-[0.08em] text-text-faint">{eyebrow}</p>
      <h2 className="m-0 text-2xl font-semibold text-text md:text-3xl">{titulo}</h2>
      {apoio && <p className="m-0 mt-2 max-w-2xl text-sm text-text-dim md:text-base">{apoio}</p>}
    </div>
  );
}

/**
 * Entrada em cascata: o bloco sobe alguns pixels enquanto aparece.
 *
 * É CSS puro, de propósito. A versão anterior escondia o bloco e esperava um
 * IntersectionObserver para revelá-lo, e isso significa conteúdo invisível
 * sempre que o observador não dispara — aba carregada em segundo plano, por
 * exemplo. Em um portfólio o custo desse modo de falha é alto demais: aqui
 * nenhum texto depende de JavaScript para existir, e o movimento é só o
 * acabamento. Sob `prefers-reduced-motion` a animação é neutralizada no CSS
 * global, e o bloco simplesmente já nasce no lugar.
 */
export function Revelar({
  children,
  atraso = 0,
  className,
}: {
  children: ReactNode;
  /** Escalonamento em ms, para listas entrarem em cascata. */
  atraso?: number;
  className?: string;
}) {
  return (
    <div className={cn("animate-subir", className)} style={atraso ? { animationDelay: `${atraso}ms` } : undefined}>
      {children}
    </div>
  );
}
