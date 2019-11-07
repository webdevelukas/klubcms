// Import dependencies
import React from "react";

// Import components
import ColoredMainArea from "../components/Container/ColoredMainArea";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import Label from "../components/Inputs/Label";
import Form from "../components/Container/Form";
import useRedirectTo from "../hooks/useRedirectTo";
import { paths } from "../lib/paths";

export default function LoginPage() {
  const redirectTo = useRedirectTo();

  return (
    <ColoredMainArea colorScheme="main">
      <h1>Hello again, what‘s your..</h1>
      <Form onSubmit={() => redirectTo(paths.articlesPage)}>
        <Label htmlFor="username">Username?</Label>
        <Input
          type="text"
          id="username"
          placeholder="My bad.. what was your username again?"
        />
        <Label htmlFor="password">Password?</Label>
        <Input
          type="password"
          id="password"
          placeholder="Tell me your secret"
        />
        <Button>Login</Button>
      </Form>
    </ColoredMainArea>
  );
}
