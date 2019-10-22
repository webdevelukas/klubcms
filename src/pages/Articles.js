import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { SquareButtonWithIcon } from "../components/Button";
import NewspaperIcon from "../icons/NewspaperIcon";
import CardList from "../components/CardList";

const StyledArticles = styled.main`
  display: grid;
  grid-auto-rows: auto;
  justify-items: center;
  padding: 0 1em;
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
        <CardList />
      </StyledArticles>
    </>
  );
}
