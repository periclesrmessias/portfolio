import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PT } from "@/data/pt";
import { EN } from "@/data/en";
import type { Conteudo, Idioma } from "@/data/tipos";

const CONTEUDOS: Record<Idioma, Conteudo> = { pt: PT, en: EN };
const CHAVE = "portfolio:idioma";

const TITULOS: Record<Idioma, string> = {
  pt: "Péricles Messias — Dados, BI e Inteligência de Mercado",
  en: "Péricles Messias — Data, BI & Market Intelligence",
};

function inicial(): Idioma {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo === "pt" || salvo === "en") return salvo;
  } catch {
    // Storage bloqueado: cai na preferência do navegador.
  }
  // Quem chega com navegador em português vê português; todo o resto, inglês.
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

interface Contexto {
  conteudo: Conteudo;
  idioma: Idioma;
  definirIdioma: (i: Idioma) => void;
}

const IdiomaContext = createContext<Contexto | null>(null);

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, definirIdiomaEstado] = useState<Idioma>(inicial);
  const conteudo = CONTEUDOS[idioma];

  useEffect(() => {
    // `lang` correto importa para leitor de tela (pronúncia), para a hifenização
    // do navegador e para o buscador saber em que idioma indexar a página.
    document.documentElement.lang = conteudo.lang;
    // Título e descrição acompanham o idioma: é o que aparece na aba, no
    // histórico e no cartão quando o link é compartilhado.
    document.title = TITULOS[idioma];
    document.querySelector('meta[name="description"]')?.setAttribute("content", conteudo.resumo);
    try {
      localStorage.setItem(CHAVE, idioma);
    } catch {
      // Sem persistência a escolha ainda vale para esta sessão.
    }
  }, [idioma, conteudo.lang]);

  const definirIdioma = useCallback((i: Idioma) => definirIdiomaEstado(i), []);
  const valor = useMemo(() => ({ conteudo, idioma, definirIdioma }), [conteudo, idioma, definirIdioma]);

  return <IdiomaContext.Provider value={valor}>{children}</IdiomaContext.Provider>;
}

/** Conteúdo e rótulos no idioma ativo. */
export function useConteudo(): Conteudo {
  const ctx = useContext(IdiomaContext);
  if (!ctx) throw new Error("useConteudo precisa estar dentro de IdiomaProvider");
  return ctx.conteudo;
}

export function useIdioma() {
  const ctx = useContext(IdiomaContext);
  if (!ctx) throw new Error("useIdioma precisa estar dentro de IdiomaProvider");
  return { idioma: ctx.idioma, definirIdioma: ctx.definirIdioma };
}
