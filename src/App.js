import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";
import Submit from "./pages/Submit";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Submit />
    </ThemeProvider>
  );
}

export default App;
