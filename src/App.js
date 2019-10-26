import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";
import Fault from "./pages/Fault";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import NewArticle from "./pages/NewArticle";
import EditArticle from "./pages/EditArticle";
import Submit from "./pages/Submit";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Articles} />
        <Route path="/editarticle" exact component={EditArticle} />
        <Route path="/newarticle" exact component={NewArticle} />
        <Route path="/login" exact component={Login} />
        <Route path="/submit" exact component={Submit} />
        <Route path="/fault" exact component={Fault} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
