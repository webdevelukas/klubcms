import { patchArticle } from "../api/articles";

export function handlePatchArticle(event, articleId) {
  const data = Object.fromEntries(new FormData(event.target).entries());

  patchArticle(data, articleId);
}
