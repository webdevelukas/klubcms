import React from "react";

// Imported components / icons
import Menu from "../components/Menu";
import { SquareButtonWithIcon, ButtonWithIcon } from "../components/Button";
import NewspaperIcon from "../icons/NewspaperIcon";
import CardList from "../components/CardList";
import FunctionBar from "../components/FunctionBar";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import ProgressGlossary from "../components/ProgressGlossary";
import MainArea from "../components/MainArea";

export default function Articles() {
  return (
    <>
      <Menu />
      <MainArea>
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
      </MainArea>
    </>
  );
}
