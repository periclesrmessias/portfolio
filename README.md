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
  data/
    tipos.ts          # formato do conteúdo — o contrato que as traduções cumprem
    pt.ts / en.ts     # conteúdo em português e em inglês
    perfil.ts         # o que não muda de idioma: nome, contatos, cores dos eixos
  components/
    Shell.tsx         # casca: barra lateral no desktop, barra superior no celular
    ui.tsx            # Card, Chip, LinkButton, InfoTip, Figura, toggles de tema e idioma
  sections/           # Visão geral, Trajetória, Projetos, Stack, Formação, Contato
  styles/tokens.css   # paleta — fonte única de cor, herdada do Life-OS
  utils/              # cn (classes), tema (claro/escuro) e idioma (pt/en)
public/
  foto.jpg            # retrato do topo
  projetos/           # capturas dos projetos, referenciadas em pt.ts e en.ts
```

Para atualizar o conteúdo, mexa em `src/data/pt.ts` e `src/data/en.ts`. Os dois
cumprem a interface `Conteudo` de `tipos.ts`, então o TypeScript acusa se uma
tradução esquecer um campo.

## Idiomas

Português e inglês, com o seletor PT/EN ao lado do tema. A primeira visita segue
o idioma do navegador (português para quem chega com `pt-*`, inglês para o
resto); depois disso vale a escolha salva. O `lang` do documento, o título da
aba e a meta descrição acompanham a troca.

## Imagens

As capturas ficam em `public/projetos/` e são declaradas no campo `imagem` de
cada projeto, com `alt` e legenda. Se um arquivo não existir, a figura inteira
sai do layout em vez de deixar imagem quebrada no cartão.

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
