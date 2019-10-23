import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";
import NewArticle from "./pages/NewArticle";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <NewArticle />
    </ThemeProvider>
  );
}

export default App;
