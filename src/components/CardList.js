import React from "react";
import Card from "./Card";
import { getArticles } from "../api/fetch";

export default function CardList() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getArticles().then(fetchedArticles => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <section>
      {articles.map(article => {
        return <Card key={article.articleId} article={article} />;
      })}
    </section>
  );
}
