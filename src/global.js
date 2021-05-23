import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }`;
