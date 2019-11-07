// Import dependencies
import { postArticle } from "../api/articles";
import useRedirectTo from "./useRedirectTo";
import { paths } from "../lib/paths";
import { articleTemplate } from "../api/articleTemplate";

export default function usePostArticle() {
  const redirectTo = useRedirectTo();

  function handlePostArticle(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());
    const data = Object.assign(articleTemplate, formData);

    if (formData.title) {
      postArticle(data);
      redirectTo(paths.submitPage);
    }
    if (!formData.title) {
      redirectTo(paths.errorPage);
    }
  }

  return handlePostArticle;
}
