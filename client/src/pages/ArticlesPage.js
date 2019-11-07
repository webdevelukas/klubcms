// Import dependencies
import React, { useContext } from "react";
import useRedirectTo from "../hooks/useRedirectTo";
import useGetArticles from "../hooks/useGetArticles";
import { UserContext } from "../context/UserContext";
import { paths } from "../lib/paths";

// Import components / icons
import Menu from "../components/Navigation/Menu";
import { SquareButtonWithIcon } from "../components/Buttons/Button";
import CardList from "../components/Cards/CardList";
import FunctionBar from "../components/FunctionBar/FunctionBar";
import ProgressGlossary from "../components/FunctionBar/ProgressGlossary";
import MainArea from "../components/Container/MainArea";
import Dropdown from "../components/Selects/Dropdown";
import NewspaperIcon from "../icons/NewspaperIcon";

export default function ArticlesPage() {
  const redirectTo = useRedirectTo();
  const articles = useGetArticles();
  const user = useContext(UserContext);

  return (
    <>
      <Menu />
      {!articles && "Loading Content"}
      {articles && (
        <MainArea>
          <h1>
            Welcome back, {user.prename}
            <span role="img" aria-label="waving hand">
              &nbsp;👋
            </span>
          </h1>
          <SquareButtonWithIcon
            onClick={() => redirectTo(paths.newArticlePage)}
          >
            <NewspaperIcon />
            Add Article
          </SquareButtonWithIcon>
          <hr />
          <FunctionBar>
            <Dropdown>
              <option>Your Articles</option>
            </Dropdown>
            <ProgressGlossary />
          </FunctionBar>
          <h2>Your latest articles</h2>
          <CardList articles={articles} />
        </MainArea>
      )}
    </>
  );
}
