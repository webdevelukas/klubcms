// Imported dependencies / functions
import React, { useContext } from "react";
import useRedirectTo from "../hooks/useRedirectTo";
import useGetArticles from "../hooks/useGetArticles";
import { UserContext } from "../context/UserContext";

// Imported components / icons
import Menu from "../components/Menu";
import { SquareButtonWithIcon } from "../components/Button";
import CardList from "../components/CardList";
import FunctionBar from "../components/FunctionBar";
import ProgressGlossary from "../components/ProgressGlossary";
import MainArea from "../components/MainArea";
import Dropdown from "../components/Dropdown";
import NewspaperIcon from "../icons/NewspaperIcon";

// Imported data
import { paths } from "../lib/paths";

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
              👋
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
