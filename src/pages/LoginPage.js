import React from "react";
import { ColoredMainArea } from "../components/MainArea";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";
import Form from "../components/Form";

export default function LoginPage() {
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>Hello again, what's your..</h1>
      <Form>
        <Label for="username">Username?</Label>
        <Input
          type="text"
          id="username"
          placeholder="My bad.. what was your username again?"
        />
        <Label for="password">Password?</Label>
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
