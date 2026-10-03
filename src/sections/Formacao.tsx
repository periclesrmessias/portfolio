import { Award, BookOpen, GraduationCap } from "lucide-react";
import { Card, Chip, Revelar, SectionHeader } from "@/components/ui";
import { useConteudo } from "@/utils/idioma";

export function Formacao() {
  const c = useConteudo();

  return (
    <section id="formacao" className="mt-20 scroll-mt-24 md:mt-28">
      <Revelar>
        <SectionHeader eyebrow={c.formacao.eyebrow} titulo={c.formacao.titulo} />
      </Revelar>

      <div className="grid gap-4 md:grid-cols-3">
        {c.formacao.itens.map((f, i) => (
          <Revelar key={f.titulo} atraso={i * 60} className="h-full">
            <Card className="flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-md bg-surface-2 text-text-dim" aria-hidden="true">
                  {f.tipo === "graduacao" ? <GraduationCap size={17} strokeWidth={1.9} /> : <Award size={17} strokeWidth={1.9} />}
                </span>
                {f.andamento && <Chip tom="primario">{c.rotulos.emCurso}</Chip>}
              </div>
              <h3 className="m-0 mt-3.5 text-base font-semibold leading-snug text-text">{f.titulo}</h3>
              <p className="m-0 mt-1 text-sm text-text-dim">
                {f.instituicao} · <span className="tabular-nums">{f.periodo}</span>
              </p>
              <p className="m-0 mt-3 text-sm leading-6 text-text-faint">{f.detalhe}</p>
            </Card>
          </Revelar>
        ))}
      </div>

      <Revelar atraso={120}>
        <Card className="mt-5 p-5 md:p-6">
          <p className="m-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-faint">
            <BookOpen size={13} strokeWidth={2.2} aria-hidden="true" />
            {c.rotulos.emDesenvolvimento}
          </p>
          <p className="m-0 mt-2 max-w-2xl text-sm leading-6 text-text-dim">{c.rotulos.emDesenvolvimentoApoio}</p>
          <ul className="m-0 mt-4 grid list-none gap-2.5 p-0 sm:grid-cols-2">
            {c.formacao.emDesenvolvimento.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-6 text-text-dim">
                <span className="mt-[10px] h-1 w-1 flex-shrink-0 rounded-full bg-mark-strong" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Revelar>
    </section>
  );
}
