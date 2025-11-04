const theme = {
  colors: {
    bg: "#fcf8f0", // Fundo claro mas visível
    card: "#d6a161", // Cards brancos com destaque
    bgAlt: "#ff0000ff", // seções destacadas / cards
    primary: "#41597aff", // botões, ícones e elementos de destaque
    primaryDark: "#94a3faff", // hover do botão (mesma cor escurecida)
    text: "#683d26", // texto forte
    muted: "#f2f6f8ff", // texto secundário derivado da paleta
    border: "#B4BEC9", // bordas e separadores
    cardGlass: "rgba(255, 255, 255, 0.7)", // opcional futurista
  },

  radii: {
    sm: "8px",
    md: "12px",
    lg: "22px",
  },

  spacing: {
    pagePadding: "48px",
    container: "28px",
    gap: "20px",
  },

  sizes: {
    maxWidth: "980px",
  },

  shadows: {
    card: "0 4px 8px rgba(0,0,0,0.05)",
    focus: "0 0 0 3px rgba(195,212,219,0.4)",
  },

  transitions: {
    default: "180ms ease-in-out",
  },
} as const;

export default theme;
