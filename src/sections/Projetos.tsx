import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { Card, Chip, Figura, FiguraVideo, Revelar, SectionHeader } from "@/components/ui";
import { useConteudo } from "@/utils/idioma";
import { cn } from "@/utils/cn";
import type { Eixo, Projeto } from "@/data/tipos";

type Filtro = "todos" | Eixo;

function Capturas({ projeto, className, lado }: { projeto: Projeto; className?: string; lado?: boolean }) {
  if (!projeto.imagens || projeto.imagens.length === 0) return null;
  return (
    // Fotos em pé ficam lado a lado; capturas de tela, uma sob a outra. Lado a
    // lado (`lado`), as figuras esticam até a mais alta e a legenda desce para
    // o rodapé, para a faixa terminar alinhada.
    <div className={cn("mt-4 grid gap-3", projeto.imagens.every((i) => i.retrato) && projeto.imagens.length > 1 && "grid-cols-2", className)}>
      {projeto.imagens.map((img) => (
        <Figura key={img.src} {...img} className={cn("mt-0", lado && "flex h-full flex-col justify-between")} />
      ))}
    </div>
  );
}

function Destaques({ projeto }: { projeto: Projeto }) {
  return (
    <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
      {projeto.destaques.map((d) => (
        <li key={d} className="flex gap-2.5 text-sm leading-6 text-text-dim">
          <span className="mt-[10px] h-1 w-1 flex-shrink-0 rounded-full bg-mark-strong" aria-hidden="true" />
          {d}
        </li>
      ))}
    </ul>
  );
}

function Ressalva({ projeto }: { projeto: Projeto }) {
  if (!projeto.ressalva) return null;
  return (
    <p className="m-0 mt-4 flex gap-2 rounded-md border border-border bg-surface-2/60 p-3 text-xs leading-5 text-text-faint">
      <Info size={14} strokeWidth={2} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
      {projeto.ressalva}
    </p>
  );
}

function Stack({ projeto }: { projeto: Projeto }) {
  return (
    // `mt-auto` empurra a stack para o rodapé: numa grade, cartões de alturas
    // diferentes terminam com as pílulas alinhadas.
    <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
      {projeto.stack.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  );
}

/** Projeto corporativo pesa diferente de case de portfólio, e o chip diz qual é qual. */
function CartaoProjeto({ projeto, corporativo }: { projeto: Projeto; corporativo: boolean }) {
  return (
    <Card className="flex h-full flex-col p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Chip tom={corporativo ? "primario" : "contorno"}>{projeto.natureza}</Chip>
        {projeto.org && <span className="text-xs text-text-faint">{projeto.org}</span>}
      </div>

      <h3 className="m-0 mt-3 text-lg font-semibold leading-snug text-text">{projeto.titulo}</h3>
      <p className="m-0 mt-2 text-sm leading-6 text-text-dim">{projeto.resumo}</p>

      {projeto.video && <FiguraVideo {...projeto.video} />}
      <Capturas projeto={projeto} />
      <Destaques projeto={projeto} />
      <Ressalva projeto={projeto} />
      <Stack projeto={projeto} />
    </Card>
  );
}

/**
 * Projeto em destaque: largura toda, acima da grade. No desktop o vídeo fica
 * ao lado do texto e as capturas vão para uma faixa embaixo; no celular tudo
 * empilha como no cartão comum.
 */
function CartaoDestaque({ projeto, rotulo }: { projeto: Projeto; rotulo: string }) {
  return (
    <Card className="p-5 ring-1 ring-primary/30 md:p-6">
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        {projeto.video && <FiguraVideo {...projeto.video} className="mt-0" />}

        <div className="flex h-full flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <Chip tom="primario">{rotulo}</Chip>
            <Chip tom="contorno">{projeto.natureza}</Chip>
          </div>
          <h3 className="m-0 mt-3 text-xl font-semibold leading-snug text-text md:text-2xl">{projeto.titulo}</h3>
          <p className="m-0 mt-2 text-sm leading-6 text-text-dim md:text-base md:leading-7">{projeto.resumo}</p>
          <Destaques projeto={projeto} />
          <Ressalva projeto={projeto} />
          <Stack projeto={projeto} />
        </div>
      </div>

      <Capturas projeto={projeto} className="mt-6 sm:grid-cols-2" lado />
    </Card>
  );
}

export function Projetos() {
  const c = useConteudo();
  const [filtro, definirFiltro] = useState<Filtro>("todos");

  const filtros: { id: Filtro; rotulo: string }[] = [
    { id: "todos", rotulo: c.rotulos.todos },
    { id: "dados", rotulo: c.rotulos.eixos.dados },
    { id: "engenharia", rotulo: c.rotulos.eixos.engenharia },
    { id: "negocio", rotulo: c.rotulos.eixos.negocio },
  ];

  const itens = c.projetos.itens;
  const visiveis = useMemo(
    () => (filtro === "todos" ? itens : itens.filter((p) => p.eixos.includes(filtro))),
    [filtro, itens],
  );
  const emDestaque = visiveis.filter((p) => p.destaque);
  const grade = visiveis.filter((p) => !p.destaque);

  // A natureza é texto traduzido, então a comparação olha o primeiro item da
  // lista (sempre corporativo) em vez de uma string fixa em português.
  const naturezaCorporativa = itens[0].natureza;

  return (
    <section id="projetos" className="mt-20 scroll-mt-24 md:mt-28">
      <Revelar>
        <SectionHeader eyebrow={c.projetos.eyebrow} titulo={c.projetos.titulo} apoio={c.projetos.apoio} />
      </Revelar>

      <Revelar>
        <div role="tablist" aria-label={c.rotulos.filtrarProjetos} className="mb-6 inline-flex flex-wrap gap-1 rounded-full bg-controle p-1">
          {filtros.map(({ id, rotulo }) => {
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

      {emDestaque.map((p) => (
        <Revelar key={`${c.idioma}-${filtro}-${p.titulo}`} className="mb-5">
          <CartaoDestaque projeto={p} rotulo={c.rotulos.projetoDestaque} />
        </Revelar>
      ))}

      <div className="grid gap-5 md:grid-cols-2">
        {grade.map((p, i) => (
          // A chave inclui filtro e idioma para o cartão remontar na troca e a
          // animação de entrada rodar de novo, em vez de a grade saltar seca.
          // Com número ímpar de cartões, o último ocupa as duas colunas para
          // não deixar buraco na grade.
          <Revelar
            key={`${c.idioma}-${filtro}-${p.titulo}`}
            atraso={i * 60}
            className={cn("h-full", grade.length % 2 === 1 && i === grade.length - 1 && "md:col-span-2")}
          >
            <CartaoProjeto projeto={p} corporativo={p.natureza === naturezaCorporativa} />
          </Revelar>
        ))}
      </div>
    </section>
  );
}
