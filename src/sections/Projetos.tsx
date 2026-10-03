import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { EIXOS, PROJETOS, type Eixo, type Projeto } from "@/data/perfil";
import { Card, Chip, Revelar, SectionHeader } from "@/components/ui";
import { cn } from "@/utils/cn";

type Filtro = "todos" | Eixo;

const FILTROS: { id: Filtro; rotulo: string }[] = [
  { id: "todos", rotulo: "Todos" },
  { id: "dados", rotulo: EIXOS.dados.label },
  { id: "engenharia", rotulo: EIXOS.engenharia.label },
  { id: "negocio", rotulo: EIXOS.negocio.label },
];

/** Projeto corporativo pesa diferente de case de portfólio — e o chip diz qual é qual. */
function CartaoProjeto({ projeto }: { projeto: Projeto }) {
  return (
    <Card className="flex h-full flex-col p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Chip tom={projeto.natureza === "Projeto corporativo" ? "primario" : "contorno"}>{projeto.natureza}</Chip>
        {projeto.org && <span className="text-xs text-text-faint">{projeto.org}</span>}
      </div>

      <h3 className="m-0 mt-3 text-lg font-semibold leading-snug text-text">{projeto.titulo}</h3>
      <p className="m-0 mt-2 text-sm leading-6 text-text-dim">{projeto.resumo}</p>

      <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
        {projeto.destaques.map((d) => (
          <li key={d} className="flex gap-2.5 text-sm leading-6 text-text-dim">
            <span className="mt-[10px] h-1 w-1 flex-shrink-0 rounded-full bg-mark-strong" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>

      {projeto.ressalva && (
        <p className="m-0 mt-4 flex gap-2 rounded-md border border-border bg-surface-2/60 p-3 text-xs leading-5 text-text-faint">
          <Info size={14} strokeWidth={2} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
          {projeto.ressalva}
        </p>
      )}

      {/* `mt-auto` empurra a stack para o rodapé: numa grade, cartões de alturas
          diferentes terminam com as pílulas alinhadas. */}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {projeto.stack.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Card>
  );
}

export function Projetos() {
  const [filtro, definirFiltro] = useState<Filtro>("todos");
  const visiveis = useMemo(
    () => (filtro === "todos" ? PROJETOS : PROJETOS.filter((p) => p.eixos.includes(filtro))),
    [filtro],
  );

  return (
    <section id="projetos" className="mt-20 scroll-mt-24 md:mt-28">
      <Revelar>
        <SectionHeader
          eyebrow="Projetos"
          titulo="O que eu construí, e o que cada coisa resolveu"
          apoio="Projetos corporativos e cases técnicos estão marcados como tais. Onde o escopo tem limite — modelo exploratório, pipeline descontinuado —, o limite está escrito."
        />
      </Revelar>

      <Revelar>
        <div
          role="tablist"
          aria-label="Filtrar projetos por eixo"
          className="mb-6 inline-flex flex-wrap gap-1 rounded-full bg-controle p-1"
        >
          {FILTROS.map(({ id, rotulo }) => {
            const ativo = filtro === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={ativo}
                onClick={() => definirFiltro(id)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  ativo ? "bg-controle-ativo font-semibold text-text shadow-pilula" : "font-medium text-text-dim hover:text-text",
                )}
              >
                {rotulo}
              </button>
            );
          })}
        </div>
      </Revelar>

      <div className="grid gap-5 md:grid-cols-2">
        {visiveis.map((p, i) => (
          // A chave inclui o filtro para o cartão remontar na troca e a animação
          // de entrada rodar de novo, em vez de a grade saltar sem transição.
          <Revelar key={`${filtro}-${p.titulo}`} atraso={i * 60} className="h-full">
            <CartaoProjeto projeto={p} />
          </Revelar>
        ))}
      </div>
    </section>
  );
}
