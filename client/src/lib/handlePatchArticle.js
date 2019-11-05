import { patchArticle } from "../api/articles";

export function handlePatchArticle(event, articleId) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  patchArticle(data, articleId);
}
