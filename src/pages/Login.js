import React from "react";
import { ColoredMainArea } from "../components/MainArea";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.main}>
      <h1>Hello again, what's your..</h1>
      <h2>Username?</h2>
      <Input placeholder="My bad.. what was your username again?" />
      <h2>Password?</h2>
      <Input placeholder="Tell me your secret" />
      <Button>Login</Button>
    </ColoredMainArea>
  );
}
