// Import dependencies
import { postUser } from "../api/users";
import useRedirectTo from "./useRedirectTo";
import { paths } from "../lib/paths";
import { userTemplate } from "../api/userTemplate";

export default function usePostUser() {
  const redirectTo = useRedirectTo();

  function handlePostUser(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());
    const data = Object.assign(userTemplate, formData);

    if (formData.username && formData.password) {
      postUser(data);
      redirectTo(paths.submitPage);
    }
    if (!formData.username && !formData.password) {
      redirectTo(paths.errorPage);
    }
  }

  return handlePostUser;
}
