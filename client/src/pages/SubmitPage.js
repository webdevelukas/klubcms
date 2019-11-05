// Imported dependencies
import React, { useContext } from "react";
import useRedirectTo from "../hooks/useRedirectTo";
import { UserContext } from "../context/UserContext";

// Imported components
import Button from "../components/Button";
import { ColoredMainArea } from "../components/MainArea";

// Imported data
import { paths } from "../lib/paths";

export default function SubmitPage() {
  const redirectTo = useRedirectTo();
  const user = useContext(UserContext);

  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>
        Nice Article! <br /> Thanks for your commitment {user.prename}
      </h1>
      <Button onClick={() => redirectTo(paths.articlesPage)}>
        Back to articles page
      </Button>
    </ColoredMainArea>
  );
}
