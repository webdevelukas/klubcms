import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  );
}

export default App;
