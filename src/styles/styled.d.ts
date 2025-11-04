// src/styles/styled.d.ts
import "styled-components";
import theme from "./theme";

type ThemeType = typeof theme;

declare module "styled-components" {
  // informa que DefaultTheme tem a mesma forma do objeto `theme`
  export interface DefaultTheme extends ThemeType {}
}
