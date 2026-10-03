import { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import { CORES_EIXO } from "@/data/perfil";
import { Card, Chip, Revelar, SectionHeader } from "@/components/ui";
import { useConteudo } from "@/utils/idioma";
import { cn } from "@/utils/cn";
import type { Conteudo, Eixo, Experiencia } from "@/data/tipos";

/** Marcador do eixo de atuação: ponto colorido e rótulo traduzido. */
function MarcaEixo({ eixo, rotulo }: { eixo: Eixo; rotulo: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-text-faint">
      <span className={cn("h-1.5 w-1.5 rounded-full", CORES_EIXO[eixo].ponto)} aria-hidden="true" />
      {rotulo}
    </span>
  );
}

/**
 * Um cargo. Resultados primeiro, porque é por eles que o currículo é lido; as
 * entregas ficam atrás de um acordeão para a seção não virar um muro de texto —
 * mas continuam no DOM, acessíveis e indexáveis.
 */
function CartaoExperiencia({ exp, inicial, rotulos }: { exp: Experiencia; inicial: boolean; rotulos: Conteudo["rotulos"] }) {
  const [aberto, definirAberto] = useState(inicial);
  const idPainel = `entregas-${exp.empresa.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Card className="p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div className="min-w-0">
          <h3 className="m-0 text-lg font-semibold text-text">{exp.cargo}</h3>
          <p className="m-0 mt-0.5 text-sm text-text-dim">{exp.empresa}</p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          {exp.atual && <Chip tom="ok">{rotulos.atual}</Chip>}
          <span className="text-sm tabular-nums text-text-faint">{exp.periodo}</span>
        </div>
      </div>

      <p className="m-0 mt-4 text-sm leading-6 text-text-dim">{exp.contexto}</p>

      {exp.resultados.length > 0 && (
        <div className="mt-5 rounded-md border border-border bg-surface-2/60 p-4">
          <p className="m-0 mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-text-faint">
            <TrendingUp size={13} strokeWidth={2.2} aria-hidden="true" />
            {rotulos.resultados}
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {exp.resultados.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm leading-6 text-text">
                <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ok" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => definirAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls={idPainel}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-text-dim transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ChevronDown
          size={15}
          strokeWidth={2.2}
          className={cn("transition-transform duration-200", aberto && "rotate-180")}
          aria-hidden="true"
        />
        {aberto ? rotulos.ocultarEntregas : rotulos.mostrarEntregas(exp.entregas.length)}
      </button>

      <div id={idPainel} hidden={!aberto}>
        <ul className="m-0 mt-3 flex list-none flex-col gap-2.5 p-0">
          {exp.entregas.map((e) => (
            <li key={e} className="flex gap-2.5 text-sm leading-6 text-text-dim">
              <span className="mt-[10px] h-1 w-1 flex-shrink-0 rounded-full bg-mark-strong" aria-hidden="true" />
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4">
        {exp.eixos.map((eixo) => (
          <MarcaEixo key={eixo} eixo={eixo} rotulo={rotulos.eixos[eixo]} />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {exp.stack.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Card>
  );
}

export function Trajetoria() {
  const c = useConteudo();

  return (
    <section id="trajetoria" className="mt-20 scroll-mt-24 md:mt-28">
      <Revelar>
        <SectionHeader eyebrow={c.trajetoria.eyebrow} titulo={c.trajetoria.titulo} apoio={c.trajetoria.apoio} />
      </Revelar>

      <div className="flex flex-col gap-5">
        {c.experiencias.map((exp, i) => (
          // A chave inclui o idioma para o acordeão remontar na troca, em vez de
          // manter aberto um painel cujo rótulo acabou de mudar de língua.
          <Revelar key={`${c.idioma}-${exp.empresa}`} atraso={i * 70}>
            <CartaoExperiencia exp={exp} inicial={i === 0} rotulos={c.rotulos} />
          </Revelar>
        ))}
      </div>

      <Revelar atraso={120}>
        <Card className="mt-5 p-5 md:p-6">
          <p className="m-0 mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-text-faint">{c.rotulos.linhaDoTempo}</p>
          <ol className="relative m-0 list-none p-0">
            {/* Trilho contínuo atrás dos marcadores. */}
            <span className="absolute bottom-0 left-[5px] top-2 w-px bg-border" aria-hidden="true" />
            {c.linhaDoTempo.map((m, i) => (
              <li key={`${m.ano}-${m.titulo}`} className={cn("relative pl-6", i > 0 && "mt-5")}>
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-surface",
                    i === c.linhaDoTempo.length - 1 ? "bg-primary" : "bg-mark-strong",
                  )}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-2.5">
                  <span className="text-sm font-semibold tabular-nums text-text">{m.ano}</span>
                  <span className="text-sm font-medium text-text">{m.titulo}</span>
                </div>
                <p className="m-0 mt-0.5 text-sm leading-6 text-text-faint">{m.detalhe}</p>
              </li>
            ))}
          </ol>
        </Card>
      </Revelar>
    </section>
  );
}
