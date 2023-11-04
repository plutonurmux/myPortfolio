import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/globalstyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="/portfolio">
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
