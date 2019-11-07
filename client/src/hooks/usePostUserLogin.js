// Import dependencies
import useRedirectTo from "./useRedirectTo";
import { postUserLogin } from "../api/users";

export default function usePostUserLogin() {
  const redirectTo = useRedirectTo();

  function handlePostUserLogin(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());

    postUserLogin(formData);
    // redirectTo(paths.submitPage);
  }

  return handlePostUserLogin;
}
