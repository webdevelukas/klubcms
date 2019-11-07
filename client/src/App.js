// Import dependencies / functions
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import mainTheme from "./themes/main";
import GlobalStyles from "./GlobalStyles";
import { UserProvider } from "./context/UserContext";

// Import pages
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ArticlesPage from "./pages/ArticlesPage";
import NewArticlePage from "./pages/NewArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import SubmitPage from "./pages/SubmitPage";
import RegistrationPage from "./pages/RegistrationPage";

// Import data
import { paths } from "./lib/paths";

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <UserProvider>
        <GlobalStyles />
        <StyledApp>
          <Router>
            <Route exact path={paths.home} component={LoginPage} />
            <Route exact path={paths.articlesPage} component={ArticlesPage} />
            <Route
              exact
              path={paths.newArticlePage}
              component={NewArticlePage}
            />
            <Route exact path={paths.loginPage} component={LoginPage} />
            <Route
              exact
              path={paths.registrationPage}
              component={RegistrationPage}
            />
            <Route exact path={paths.submitPage} component={SubmitPage} />
            <Route exact path={paths.errorPage} component={ErrorPage} />
            <Route
              path={`${paths.editArticlePage}/:articleId`}
              component={EditArticlePage}
            />
          </Router>
        </StyledApp>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
