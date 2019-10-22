import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";
import EditArticle from "./pages/EditArticle";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <EditArticle />
    </ThemeProvider>
  );
}

export default App;
