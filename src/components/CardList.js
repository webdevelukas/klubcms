import React from "react";
import styled from "styled-components";
import { articles } from "../api/articles";
import Card from "./Card";

const StyledCardList = styled.section``;

export default function CardList() {
  return (
    <StyledCardList>
      {articles.map(article => {
        return <Card key={article.title} article={article} />;
      })}
    </StyledCardList>
  );
}
