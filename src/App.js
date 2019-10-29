// Imported dependencies / functions
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";

// Imported pages
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ArticlesPage from "./pages/ArticlesPage";
import NewArticlePage from "./pages/NewArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import SubmitPage from "./pages/SubmitPage";

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Route exact path="/" component={ArticlesPage} />
          <Route exact path="/articles/new" component={NewArticlePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/submit" component={SubmitPage} />
          <Route exact path="/fault" component={ErrorPage} />
          <Route path="/articles/edit/:articleId" component={EditArticlePage} />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
