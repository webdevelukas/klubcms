import { postArticle } from "../api/articles";
import { articleTemplate } from "../api/articleTemplate";
import useRedirectTo from "../hooks/useRedirectTo";
import { paths } from "./paths";

export function handlePostArticle(event) {
  const redirectTo = useRedirectTo();

  const formData = Object.fromEntries(new FormData(event.target).entries());
  const data = Object.assign(articleTemplate, formData);

  postArticle(data);
  redirectTo(paths.submitPage);
}
