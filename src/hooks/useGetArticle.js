// Imported dependencies
import { useEffect, useState } from "react";
import { getArticle } from "../api/articles";

export default function useGetArticle(articleId) {
  const [article, setArticle] = useState(false);

  useEffect(() => {
    getArticle(articleId).then(fetchedArticle => setArticle(fetchedArticle));
    // eslint-disable-next-line
  }, []);

  return article;
}
