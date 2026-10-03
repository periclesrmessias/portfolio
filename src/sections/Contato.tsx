import { Github, Linkedin, Mail } from "lucide-react";
import { PERFIL } from "@/data/perfil";
import { LinkButton, Revelar } from "@/components/ui";
import { useConteudo } from "@/utils/idioma";

export function Contato() {
  const c = useConteudo();

  return (
    <section id="contato" className="mt-20 scroll-mt-24 md:mt-28">
      <Revelar>
        <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-7 shadow-card md:p-10">
          <div className="malha pointer-events-none absolute inset-x-0 -top-8 h-48" aria-hidden="true" />
          <div className="relative">
            <p className="m-0 mb-1.5 text-xs font-medium uppercase tracking-[0.08em] text-text-faint">{c.contato.eyebrow}</p>
            <h2 className="m-0 max-w-xl text-2xl font-semibold leading-tight text-text md:text-3xl">{c.contato.titulo}</h2>
            <p className="m-0 mt-3 max-w-xl text-sm leading-6 text-text-dim md:text-base">{c.contato.apoio}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <LinkButton href={`mailto:${PERFIL.email}`} icone={<Mail size={16} strokeWidth={2} />}>
                {c.rotulos.enviarEmail}
              </LinkButton>
              <LinkButton href={PERFIL.linkedin} variante="secundario" icone={<Linkedin size={16} strokeWidth={2} />}>
                LinkedIn
              </LinkButton>
              <LinkButton href={PERFIL.github} variante="secundario" icone={<Github size={16} strokeWidth={2} />}>
                GitHub
              </LinkButton>
            </div>
          </div>
        </div>
      </Revelar>

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-text-faint">
        <span>
          © {new Date().getFullYear()} {PERFIL.nome}
        </span>
        <span>{c.rotulos.rodape}</span>
      </footer>
    </section>
  );
}
