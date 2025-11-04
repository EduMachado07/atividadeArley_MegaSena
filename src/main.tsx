import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SuggestionsProvider } from "./context/SuggestionsContext";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SuggestionsProvider>
          <App />
        </SuggestionsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
