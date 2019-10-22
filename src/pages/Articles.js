import React from "react";
import styled from "styled-components";

// Imported components / icons
import Menu from "../components/Menu";
import { SquareButtonWithIcon, ButtonWithIcon } from "../components/Button";
import NewspaperIcon from "../icons/NewspaperIcon";
import CardList from "../components/CardList";
import FunctionBar from "../components/FunctionBar";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import ProgressGlossary from "../components/ProgressGlossary";

const StyledArticles = styled.main`
  display: grid;
  grid-auto-rows: auto;
  justify-items: center;
  padding: 0 1em;
  margin-top: 1em;
`;

export default function Articles() {
  return (
    <>
      <Menu />
      <StyledArticles>
        <h1>Welcome back, Herbert 👋</h1>
        <SquareButtonWithIcon>
          <NewspaperIcon />
          Add Article
        </SquareButtonWithIcon>
        <hr />
        <FunctionBar>
          <ButtonWithIcon>
            <ArrowDropDownIcon />
            Your Articles
          </ButtonWithIcon>
          <ProgressGlossary />
        </FunctionBar>
        <h2>Your latest articles</h2>
        <CardList />
      </StyledArticles>
    </>
  );
}
