// Imported dependencies
import React from "react";
import useRedirectTo from "../hooks/useRedirectTo";

// Imported components
import Button from "../components/Button";
import { ColoredMainArea } from "../components/MainArea";

// Imported data
import { paths } from "../lib/paths";

export default function SubmitPage() {
  const redirectTo = useRedirectTo();

  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>
        Nice Article! <br /> Thanks for your commitment Herbert
      </h1>
      <Button onClick={() => redirectTo(paths.articlesPage)}>
        Back to articles page
      </Button>
    </ColoredMainArea>
  );
}
