// Imported dependencies
import { useEffect, useState } from "react";
import { getUser } from "../api/users";

export default function useGetUser(userId) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    getUser(userId).then(fetcheduser => setUser(fetcheduser));
    // eslint-disable-next-line
  }, []);

  return user;
}
