# Portfólio — Péricles Messias

Portfólio profissional de Analytics/BI, Engenharia de Dados e Inteligência de Mercado.
Página única em React + TypeScript + Tailwind, construída sobre o mesmo sistema de
design do [Life-OS](https://github.com/periclesrmessias): paleta em tokens CSS,
tipografia Geist, tema claro e escuro sem classe condicional espalhada pelas telas.

## Como rodar

```bash
npm install
npm run dev     # http://localhost:5174
npm run build   # gera dist/
```

## Estrutura

```
src/
  data/perfil.ts      # todo o conteúdo: experiências, projetos, stack, formação
  components/
    Shell.tsx         # casca: barra lateral no desktop, barra superior no celular
    ui.tsx            # Card, Chip, LinkButton, InfoTip, ThemeToggle, SectionHeader
  sections/           # Visão geral, Trajetória, Projetos, Stack, Formação, Contato
  styles/tokens.css   # paleta — fonte única de cor, herdada do Life-OS
  utils/              # cn (classes) e tema (claro/escuro/sistema)
```

Para atualizar o conteúdo, mexa só em `src/data/perfil.ts`. As seções leem tudo de lá.

## Decisões

- **Nenhum número inventado.** Todo indicador vem da trajetória real, e cada KPI traz
  no balão de informação como foi apurado.
- **Natureza do trabalho explícita.** Projeto corporativo, case técnico e projeto de
  portfólio são rotulados como tais — projeto pessoal não é vendido como experiência
  corporativa.
- **Limites declarados.** Pipeline descontinuado, modelo sem métrica formalizada e a
  seção "Em desenvolvimento" estão na página de propósito: é o que um entrevistador
  técnico vai perguntar de qualquer forma.
- **Conteúdo não depende de animação.** A entrada em cascata é CSS puro, sem
  `IntersectionObserver` escondendo texto — nada fica invisível se o JavaScript falhar.

## Publicação

O `base` do Vite é relativo (`./`), então o `dist/` funciona tanto em domínio raiz
quanto em `usuario.github.io/portfolio/`. O deploy no GitHub Pages roda pelo workflow
em `.github/workflows/deploy.yml` a cada push na `main`; basta habilitar
**Settings → Pages → Source: GitHub Actions** no repositório.
