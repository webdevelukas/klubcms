import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { getArticles } from "../api/fetch";

const StyledCardList = styled.section``;

export default function CardList() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getArticles().then(fetchedArticles => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <StyledCardList>
      {articles.map(article => {
        return <Card key={article.articleId} article={article} />;
      })}
    </StyledCardList>
  );
}
