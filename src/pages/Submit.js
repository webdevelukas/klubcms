import React from "react";
import Button from "../components/Button";
import { ColoredMainArea } from "../components/MainArea";

export default function Submit() {
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>
        Nice Article! <br /> Thanks for your commitment Herbert
      </h1>
      <Button>Back to articles page</Button>
    </ColoredMainArea>
  );
}
