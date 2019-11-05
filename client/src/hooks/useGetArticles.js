// Imported dependencies
import { useState, useEffect } from "react";
import { getArticles } from "../api/articles";

export default function useGetArticles() {
  const [articles, setArticles] = useState(false);

  useEffect(() => {
    getArticles().then(fetchedArticles => {
      setArticles(fetchedArticles);
    });
  }, []);

  return articles;
}
