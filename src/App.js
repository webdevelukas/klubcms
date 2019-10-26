import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ArticlesPage from "./pages/ArticlesPage";
import NewArticlePage from "./pages/NewArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import SubmitPage from "./pages/SubmitPage";
import { getArticles } from "./api/fetch";

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0;
  padding: 0;
`;

function App() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getArticles().then(fetchedArticles => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Route
            path="/"
            exact
            component={() => <ArticlesPage articles={articles} />}
          />
          <Route exact path="/newarticle" component={NewArticlePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/submit" component={SubmitPage} />
          <Route exact path="/fault" component={ErrorPage} />
          <Route
            path="/editarticle/:articleId"
            component={EditArticlePage}
            // component={() => <EditArticlePage articles={articles} />}
          />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
