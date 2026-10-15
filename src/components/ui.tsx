import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Info, Maximize2, Moon, Sun, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { useTema } from "@/utils/tema";
import { useIdioma } from "@/utils/idioma";

/**
 * Bloco de conteúdo: no tema claro a separação
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

/** Troca de idioma, ao lado do tema. Dois estados, sem menu suspenso. */
export function LanguageToggle({ className }: { className?: string }) {
  const { idioma, definirIdioma } = useIdioma();
  return (
    <div
      className={cn("inline-flex items-center gap-0.5 rounded-full bg-controle p-0.5", className)}
      role="group"
      aria-label="Idioma / Language"
    >
      {(["pt", "en"] as const).map((valor) => {
        const ativo = idioma === valor;
        return (
          <button
            key={valor}
            type="button"
            onClick={() => definirIdioma(valor)}
            aria-pressed={ativo}
            lang={valor === "pt" ? "pt-BR" : "en"}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              ativo ? "bg-controle-ativo text-text shadow-pilula" : "text-text-faint hover:text-text-dim",
            )}
          >
            {valor}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Imagem de projeto. Se o arquivo não existir, a figura inteira sai do fluxo em
 * vez de deixar o ícone de imagem quebrada no cartão. `loading="lazy"` porque
 * quase todas estão abaixo da dobra.
 *
 * A imagem mantém a própria proporção: são capturas de dashboard e de console,
 * onde recortar a borda tira o filtro, o cabeçalho ou a coluna que provam o que
 * está sendo mostrado. Um clique abre a imagem ampliada (`Ampliacao`), para
 * quem quiser ler os detalhes.
 */
export function Figura({ src, alt, legenda, className }: { src: string; alt: string; legenda: string; className?: string }) {
  const [falhou, definirFalhou] = useState(false);
  const [ampliada, definirAmpliada] = useState(false);
  const { idioma } = useIdioma();
  if (falhou) return null;

  const rotuloAmpliar = idioma === "pt" ? `Ampliar imagem: ${legenda}` : `Enlarge image: ${legenda}`;

  return (
    <figure className={cn("m-0 mt-4 overflow-hidden rounded-md border border-border bg-surface-2", className)}>
      <button
        type="button"
        onClick={() => definirAmpliada(true)}
        aria-label={rotuloAmpliar}
        className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      >
        <img
          // `base` relativo: o caminho não pode começar com barra.
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => definirFalhou(true)}
          className="block h-auto w-full"
        />
        <span
          className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-80 transition-opacity duration-150 group-hover:opacity-100"
          aria-hidden="true"
        >
          <Maximize2 size={15} strokeWidth={2} />
        </span>
      </button>
      <figcaption className="border-t border-border px-3 py-2 text-xs leading-5 text-text-faint">{legenda}</figcaption>
      {ampliada && <Ampliacao src={src} alt={alt} legenda={legenda} aoFechar={() => definirAmpliada(false)} />}
    </figure>
  );
}

/**
 * Imagem em tela cheia. Abre ajustada à janela; um clique na imagem alterna
 * para o tamanho original, com rolagem, para ler texto pequeno. Fecha no Esc,
 * no botão ou no clique fora da imagem, e trava a rolagem da página enquanto
 * está aberta.
 */
function Ampliacao({ src, alt, legenda, aoFechar }: { src: string; alt: string; legenda: string; aoFechar: () => void }) {
  const [original, definirOriginal] = useState(false);
  const { idioma } = useIdioma();
  const fechar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && aoFechar();
    document.addEventListener("keydown", aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focoAnterior = document.activeElement as HTMLElement | null;
    fechar.current?.focus();
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
      focoAnterior?.focus();
    };
  }, [aoFechar]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={legenda}
      onClick={(e) => e.target === e.currentTarget && aoFechar()}
      className={cn(
        "fixed inset-0 z-50 flex bg-black/85 p-4 backdrop-blur-sm md:p-8",
        original ? "items-start justify-start overflow-auto" : "items-center justify-center",
      )}
    >
      <button
        ref={fechar}
        type="button"
        onClick={aoFechar}
        aria-label={idioma === "pt" ? "Fechar imagem" : "Close image"}
        className="fixed right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X size={20} strokeWidth={2} />
      </button>
      <figure className={cn("m-0 flex flex-col items-center gap-3", original && "mx-auto")} onClick={(e) => e.target === e.currentTarget && aoFechar()}>
        <img
          src={src}
          alt={alt}
          onClick={() => definirOriginal((v) => !v)}
          className={cn(
            "block rounded-md shadow-overlay",
            original ? "max-w-none cursor-zoom-out" : "max-h-[82vh] max-w-full cursor-zoom-in object-contain",
          )}
        />
        <figcaption className="max-w-2xl text-center text-xs leading-5 text-white/75">
          {legenda}
          <span className="ml-1 text-white/50">
            {idioma === "pt"
              ? original
                ? "Clique na imagem para ajustar à tela."
                : "Clique na imagem para ver no tamanho original."
              : original
                ? "Click the image to fit the screen."
                : "Click the image to view it at full size."}
          </span>
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}

/**
 * Cabeçalho de seção. O rótulo pequeno em versalete dá o contexto, o título é a
 * manchete e a linha de apoio explica o recorte.
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
 * sempre que o observador não dispara, aba carregada em segundo plano, por
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
