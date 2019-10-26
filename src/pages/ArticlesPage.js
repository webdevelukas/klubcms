import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// Imported components / icons
import Menu from "../components/Menu";
import { SquareButtonWithIcon } from "../components/Button";
import NewspaperIcon from "../icons/NewspaperIcon";
import CardList from "../components/CardList";
import FunctionBar from "../components/FunctionBar";
import ProgressGlossary from "../components/ProgressGlossary";
import MainArea from "../components/MainArea";
import Dropdown from "../components/Dropdown";

export default function ArticlesPage({ articles }) {
  const history = useHistory();

  function linkTo(pathAsString) {
    history.push(pathAsString);
  }
  return (
    <>
      <Menu />
      <MainArea>
        <h1>
          Welcome back, Herbert
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <SquareButtonWithIcon onClick={() => linkTo("/newarticle")}>
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
    </>
  );
}

ArticlesPage.propTypes = {
  articles: PropTypes.array
};
