import { useEffect, useState } from "react";
import { getArticle } from "../api/fetch";

export default function useGetArticle({ match }) {
  const [article, setArticle] = useState(false);

  const {
    params: { articleId }
  } = match;

  function handleSubmit(event) {
    const data = Object.fromEntries(new FormData(event.target).entries());

    fetch(`/articles/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  useEffect(() => {
    getArticle(articleId).then(fetchedArticle => setArticle(fetchedArticle));
    // eslint-disable-next-line
  }, []);

  return [{ article }, handleSubmit];
}
