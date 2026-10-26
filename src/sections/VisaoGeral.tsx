import { useState, type ReactNode } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
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

/** Uma linha de contato do cartão do topo: ícone, rótulo e o endereço em si. */
function LinhaContato({ href, icone, rotulo, valor }: { href: string; icone: ReactNode; rotulo: string; valor: string }) {
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3 rounded-md px-2 py-2 no-underline transition-colors duration-150 hover:bg-surface-2/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-surface-2 text-text-dim">{icone}</span>
      <span className="min-w-0">
        <span className="block text-xs text-text-faint">{rotulo}</span>
        <span className="block truncate text-sm font-medium text-text">{valor}</span>
      </span>
    </a>
  );
}

/**
 * Contato logo no topo, para ninguém precisar rolar até o fim: QR do WhatsApp
 * e os links, lado a lado no celular e empilhados na coluna do desktop.
 */
function CartaoContato() {
  const c = useConteudo();
  return (
    <aside className="rounded-lg border border-border bg-surface p-5 shadow-card">
      <p className="m-0 text-xs font-medium uppercase tracking-[0.08em] text-text-faint">{c.rotulos.faleComigo}</p>
      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
        <figure className="m-0 flex flex-shrink-0 flex-col items-center gap-2">
          <img
            src={PERFIL.qrWhatsapp}
            alt={`QR Code WhatsApp · ${PERFIL.nome}`}
            width={160}
            height={160}
            className="h-40 w-40 rounded-md border border-border bg-white p-2"
          />
          <figcaption className="max-w-44 text-center text-xs leading-4 text-text-faint">{c.rotulos.qrWhatsapp}</figcaption>
        </figure>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 lg:border-t lg:border-border lg:pt-3">
          <LinhaContato href={`mailto:${PERFIL.email}`} icone={<Mail size={15} strokeWidth={2} />} rotulo="E-mail" valor={PERFIL.email} />
          <LinhaContato href={PERFIL.linkedin} icone={<Linkedin size={15} strokeWidth={2} />} rotulo="LinkedIn" valor="in/pericles-messias" />
          <LinhaContato href={PERFIL.github} icone={<Github size={15} strokeWidth={2} />} rotulo="GitHub" valor="periclesrmessias" />
        </div>
      </div>
    </aside>
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

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
          <Revelar>
            <div className="mb-5 flex items-center gap-4">
              <Foto />
              <div className="min-w-0">
                <p className="m-0 text-base font-semibold text-text">{PERFIL.nome}</p>
                <p className="m-0 mt-0.5 text-sm text-text-faint">{c.cargo}</p>
              </div>
            </div>
          </Revelar>

          <Revelar atraso={60}>
            <h1 className="m-0 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-text md:text-4xl lg:text-5xl">
              {c.manchete}
            </h1>
          </Revelar>

          <Revelar atraso={120}>
            <p className="m-0 mt-4 max-w-3xl text-base leading-7 text-text-dim md:text-lg">{c.resumo}</p>
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
              <LinkButton href={`mailto:${PERFIL.email}`} variante="secundario" icone={<Mail size={16} strokeWidth={2} />}>
                {c.rotulos.enviarEmail}
              </LinkButton>
            </div>
          </Revelar>
          </div>

          <Revelar atraso={120}>
            <CartaoContato />
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
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-text-faint">{c.rotulos.areasDeAtuacao}</span>
          {c.areasFoco.map((area) => (
            <Chip key={area} tom="contorno">
              {area}
            </Chip>
          ))}
        </div>
      </Revelar>
    </section>
  );
}
