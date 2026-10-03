/** @type {import('tailwindcss').Config} */

/**
 * Mesma regra do Life-OS: nenhuma cor literal aqui dentro. Tudo aponta para as
 * variáveis de `src/styles/tokens.css`, no formato que preserva o modificador
 * de opacidade do Tailwind (`border-warn/40`).
 */
const cor = (nome) => `rgb(var(--c-${nome}) / <alpha-value>)`;

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: cor("bg"),
        surface: { DEFAULT: cor("surface"), 2: cor("surface-2"), 3: cor("surface-3") },
        border: { DEFAULT: cor("border"), strong: cor("border-strong") },
        text: { DEFAULT: cor("text"), dim: cor("text-dim"), faint: cor("text-faint") },
        inverse: { DEFAULT: cor("inverse"), hover: cor("inverse-hover"), text: cor("inverse-text") },
        primary: {
          DEFAULT: cor("primary"),
          hover: cor("primary-hover"),
          active: cor("primary-active"),
          soft: cor("primary-soft"),
          text: cor("primary-text"),
        },
        mark: { DEFAULT: cor("mark"), strong: cor("mark-strong") },
        grid: cor("grid"),
        ok: { DEFAULT: cor("ok"), soft: cor("ok-soft") },
        warn: { DEFAULT: cor("warn"), soft: cor("warn-soft") },
        danger: { DEFAULT: cor("danger"), soft: cor("danger-soft") },
        info: { DEFAULT: cor("info"), soft: cor("info-soft") },
        // As três áreas do Life-OS viram os três eixos da trajetória:
        // dados/BI, engenharia e negócio.
        area: { corpo: cor("area-corpo"), carreira: cor("area-carreira"), lazer: cor("area-lazer") },
        veu: cor("veu"),
        controle: { DEFAULT: cor("controle"), ativo: cor("controle-ativo") },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px", letterSpacing: "0.005em" }],
        sm: ["13px", { lineHeight: "20px" }],
        base: ["15px", { lineHeight: "24px" }],
        lg: ["17px", { lineHeight: "26px", letterSpacing: "-0.01em" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.015em" }],
        "2xl": ["24px", { lineHeight: "30px", letterSpacing: "-0.02em" }],
        "3xl": ["30px", { lineHeight: "36px", letterSpacing: "-0.025em" }],
        "4xl": ["38px", { lineHeight: "44px", letterSpacing: "-0.03em" }],
        "5xl": ["52px", { lineHeight: "56px", letterSpacing: "-0.035em" }],
      },
      borderRadius: { sm: "8px", md: "12px", lg: "16px", xl: "20px", "2xl": "24px" },
      boxShadow: {
        card: "var(--sombra-card)",
        overlay: "var(--sombra-overlay)",
        pilula: "var(--sombra-pilula)",
      },
      fontFamily: {
        sans: ['"Geist Variable"', '"Geist Fallback"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      keyframes: {
        subir: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
        desenhar: { from: { strokeDashoffset: "var(--traco)" }, to: { strokeDashoffset: "0" } },
      },
      animation: {
        subir: "subir 0.5s cubic-bezier(0.22,1,0.36,1) both",
        desenhar: "desenhar 1.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
