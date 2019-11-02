// Imported dependencies
import { useHistory } from "react-router-dom";

export default function useRedirectTo() {
  const history = useHistory();

  function redirectTo(path) {
    history.push(path);
  }

  return redirectTo;
}
