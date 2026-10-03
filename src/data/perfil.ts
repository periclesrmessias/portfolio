import type { Eixo } from "@/data/tipos";

/**
 * O que não muda com o idioma: identidade, contatos e as cores dos três eixos.
 * O conteúdo traduzido mora em `pt.ts` e `en.ts`.
 */
export const PERFIL = {
  nome: "Péricles Messias",
  email: "periclesrmessias@gmail.com",
  github: "https://github.com/periclesrmessias",
  linkedin: "https://www.linkedin.com/in/pericles-messias/",
  /** Foto em `public/`; sai da tela sozinha se o arquivo não existir. */
  foto: "foto.jpg",
} as const;

/** Cor de cada eixo. O rótulo vem dos `rotulos.eixos` do idioma ativo. */
export const CORES_EIXO: Record<Eixo, { ponto: string }> = {
  dados: { ponto: "bg-area-corpo" },
  engenharia: { ponto: "bg-area-carreira" },
  negocio: { ponto: "bg-area-lazer" },
};
