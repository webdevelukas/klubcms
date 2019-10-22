import React from "react";
import Articles from "./pages/Articles";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Articles />
    </ThemeProvider>
  );
}

export default App;
