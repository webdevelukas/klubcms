// Imported dependencies
import React from "react";

// Imported components
import { ColoredMainArea } from "../components/Container/MainArea";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import Label from "../components/Inputs/Label";
import Form from "../components/Container/Form";

export default function LoginPage() {
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>Hello again, what‘s your..</h1>
      <Form>
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
