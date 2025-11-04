import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", system-ui, sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.card};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.pagePadding};
  }

  #root {
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.maxWidth};
  }

  h1, h2, h3 {
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  button {
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.default};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
`;
