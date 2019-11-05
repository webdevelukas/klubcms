import { postArticle } from "../api/articles";
import { articleTemplate } from "../api/articleTemplate";

export function handlePostArticle(event) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target).entries());
  const data = Object.assign(articleTemplate, formData);

  postArticle(data);
}