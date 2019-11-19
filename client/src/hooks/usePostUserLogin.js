// Import dependencies
import useRedirectTo from "./useRedirectTo";
import { postUserLogin } from "../api/users";
import { paths } from "../lib/paths";

export default function usePostUserLogin() {
  const redirectTo = useRedirectTo();

  function handlePostUserLogin(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());

    postUserLogin(formData)
      .then(response => response.json())
      .then(data => {
        if (data === "Success") {
          redirectTo(paths.articlesPage);
        }
      });
  }

  return handlePostUserLogin;
}
