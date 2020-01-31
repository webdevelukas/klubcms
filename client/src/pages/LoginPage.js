// Import dependencies
import React from "react";
import usePostUserLogin from "../hooks/usePostUserLogin";
import useRedirectTo from "../hooks/useRedirectTo";

// Import components
import ColoredMainArea from "../components/Container/ColoredMainArea";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import Label from "../components/Inputs/Label";
import Form from "../components/Container/Form";
import { paths } from "../lib/paths";

export default function LoginPage() {
  const handlePostUserLogin = usePostUserLogin();
  const redirectTo = useRedirectTo();

  redirectTo(paths.articlesPage);

  return (
    <ColoredMainArea colorScheme="main">
      <h1>Hello again, what‘s your..</h1>
      <Form onSubmit={event => handlePostUserLogin(event)}>
        <Label htmlFor="username">Username?</Label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="My bad.. what was your username again?"
        />
        <Label htmlFor="password">Password?</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Tell me your secret"
        />
        <Button>Login</Button>
      </Form>
    </ColoredMainArea>
  );
}
