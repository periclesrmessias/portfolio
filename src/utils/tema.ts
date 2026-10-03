import { useCallback, useEffect, useState } from "react";

export type Tema = "sistema" | "claro" | "escuro";

const CHAVE = "portfolio:tema";

function ler(): Tema {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo === "claro" || salvo === "escuro" || salvo === "sistema") return salvo;
  } catch {
    // Navegação privada ou storage bloqueado: segue o aparelho.
  }
  return "sistema";
}

function escuroAgora(tema: Tema) {
  if (tema === "escuro") return true;
  if (tema === "claro") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function aplicar(tema: Tema) {
  const escuro = escuroAgora(tema);
  document.documentElement.setAttribute("data-theme", escuro ? "dark" : "light");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", escuro ? "#0b0b0a" : "#f6f6f3");
}

/**
 * Tema em três estados, como no Life-OS. O script inline do `index.html` já
 * pintou o documento antes do primeiro quadro; aqui só se mantém a sincronia
 * com a preferência do aparelho enquanto o modo for "sistema".
 */
export function useTema() {
  const [tema, definirTema] = useState<Tema>(ler);

  useEffect(() => {
    aplicar(tema);
    try {
      localStorage.setItem(CHAVE, tema);
    } catch {
      // Sem persistência o tema ainda vale para esta sessão.
    }
    if (tema !== "sistema") return;
    const consulta = window.matchMedia("(prefers-color-scheme: dark)");
    const aoMudar = () => aplicar("sistema");
    consulta.addEventListener("change", aoMudar);
    return () => consulta.removeEventListener("change", aoMudar);
  }, [tema]);

  // Alterna entre claro e escuro a partir do que está visível, e não do modo
  // armazenado: com "sistema" em escuro, o clique precisa levar ao claro.
  const alternar = useCallback(() => {
    definirTema(escuroAgora(ler()) ? "claro" : "escuro");
  }, []);

  return { tema, definirTema, alternar, escuro: escuroAgora(tema) };
}
