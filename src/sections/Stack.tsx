import { EIXOS, STACK } from "@/data/perfil";
import { Card, Revelar, SectionHeader } from "@/components/ui";
import { cn } from "@/utils/cn";

export function Stack() {
  return (
    <section id="stack" className="mt-20 scroll-mt-24 md:mt-28">
      <Revelar>
        <SectionHeader
          eyebrow="Stack"
          titulo="Ferramentas que eu uso em trabalho real"
          apoio="Agrupadas pelos três eixos que a trajetória percorre: Analytics & BI, Engenharia de Dados e Inteligência de Negócio."
        />
      </Revelar>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((grupo, i) => (
          <Revelar key={grupo.titulo} atraso={i * 50} className="h-full">
            <Card className="h-full p-5">
              <div className="flex items-center gap-2">
                <span className={cn("h-1.5 w-1.5 flex-shrink-0 rounded-full", EIXOS[grupo.eixo].ponto)} aria-hidden="true" />
                <h3 className="m-0 text-sm font-semibold text-text">{grupo.titulo}</h3>
              </div>
              <ul className="m-0 mt-3 flex list-none flex-col gap-1.5 p-0">
                {grupo.itens.map((item) => (
                  <li key={item} className="text-sm leading-6 text-text-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Revelar>
        ))}
      </div>
    </section>
  );
}
