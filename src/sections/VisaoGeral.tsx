import { useState } from "react";
import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { PERFIL } from "@/data/perfil";
import { Chip, InfoTip, LinkButton, Revelar } from "@/components/ui";
import { useConteudo } from "@/utils/idioma";
import type { Kpi as TipoKpi } from "@/data/tipos";

/** Um indicador da faixa do topo: rótulo, número grande e contexto. */
function Kpi({ kpi, rotuloNota }: { kpi: TipoKpi; rotuloNota: string }) {
  return (
    <div className="flex min-w-0 flex-col">
      <div className="flex items-center gap-1.5 text-sm text-text-dim">
        <span className="truncate">{kpi.label}</span>
        {kpi.nota && <InfoTip rotulo={rotuloNota}>{kpi.nota}</InfoTip>}
      </div>
      <div className="numero mt-1 flex items-baseline gap-1 text-2xl font-semibold text-text sm:text-3xl">
        {kpi.valor}
        {kpi.sufixo && <span className="text-lg font-semibold text-text-dim sm:text-xl">{kpi.sufixo}</span>}
      </div>
      <p className="m-0 mt-1.5 text-xs leading-5 text-text-faint">{kpi.contexto}</p>
    </div>
  );
}

/** Retrato. Some da tela se o arquivo não existir, como a figura dos projetos. */
function Foto() {
  const [falhou, definirFalhou] = useState(false);
  if (falhou) return null;
  return (
    <img
      src={PERFIL.foto}
      alt={PERFIL.nome}
      onError={() => definirFalhou(true)}
      className="h-20 w-20 flex-shrink-0 rounded-full border border-border object-cover shadow-card md:h-24 md:w-24"
    />
  );
}

export function VisaoGeral() {
  const c = useConteudo();

  return (
    <section id="inicio" className="scroll-mt-24">
      {/* A malha de pontos sangra para fora do contêiner do conteúdo e some nas
          bordas; fica atrás do texto, nunca por cima. */}
      <div className="relative">
        <div className="malha pointer-events-none absolute -inset-x-10 -top-16 h-72" aria-hidden="true" />

        <div className="relative">
          <Revelar>
            <div className="mb-5 flex items-center gap-4">
              <Foto />
              <div className="min-w-0">
                <Chip tom="ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
                  {c.rotulos.disponivel}
                </Chip>
                <p className="m-0 mt-2 text-sm font-semibold text-text">{PERFIL.nome}</p>
              </div>
            </div>
          </Revelar>

          <Revelar atraso={60}>
            <h1 className="m-0 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-text md:text-4xl lg:text-5xl">
              {c.manchete}
            </h1>
          </Revelar>

          <Revelar atraso={120}>
            <p className="m-0 mt-4 max-w-2xl text-base leading-7 text-text-dim md:text-lg">{c.resumo}</p>
          </Revelar>

          <Revelar atraso={180}>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-faint">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                {c.rotulos.papelAtual}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={14} strokeWidth={2} aria-hidden="true" />
                {c.rotulos.formacaoEmCurso}
              </span>
            </div>
          </Revelar>

          <Revelar atraso={240}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <LinkButton href="#projetos" icone={<ArrowDown size={16} strokeWidth={2.2} />}>
                {c.rotulos.verProjetos}
              </LinkButton>
              <LinkButton href={PERFIL.linkedin} variante="secundario" icone={<Linkedin size={16} strokeWidth={2} />}>
                LinkedIn
              </LinkButton>
              <LinkButton href={PERFIL.github} variante="secundario" icone={<Github size={16} strokeWidth={2} />}>
                GitHub
              </LinkButton>
            </div>
          </Revelar>
        </div>
      </div>

      <Revelar atraso={300}>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 rounded-lg border border-border bg-surface p-5 shadow-card md:mt-12 md:grid-cols-4 md:p-6">
          {c.kpis.map((kpi) => (
            <Kpi key={kpi.label} kpi={kpi} rotuloNota={c.rotulos.comoApurado(kpi.label)} />
          ))}
        </div>
      </Revelar>

      <Revelar atraso={340}>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-text-faint">{c.rotulos.buscoPosicoes}</span>
          {c.cargosAlvo.map((cargo) => (
            <Chip key={cargo} tom="contorno">
              {cargo}
            </Chip>
          ))}
        </div>
      </Revelar>
    </section>
  );
}
