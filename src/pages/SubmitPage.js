import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { ColoredMainArea } from "../components/MainArea";

export default function SubmitPage() {
  const history = useHistory();

  function linkTo(pathAsString) {
    history.push(pathAsString);
  }
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>
        Nice Article! <br /> Thanks for your commitment Herbert
      </h1>
      <Button onClick={() => linkTo("/")}>Back to articles page</Button>
    </ColoredMainArea>
  );
}
