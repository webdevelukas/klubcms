// Import dependencies
import React from "react";
import usePostUser from "../hooks/usePostUser";

// Import components
import ColoredMainArea from "../components/Container/ColoredMainArea";
import Input from "../components/Inputs/Input";
import Button from "../components/Buttons/Button";
import Label from "../components/Inputs/Label";
import Form from "../components/Container/Form";

export default function RegistrationPage() {
  const handlePostUser = usePostUser();

  return (
    <ColoredMainArea colorScheme="main">
      <h1>Welcome, what's your..</h1>
      <Form onSubmit={event => handlePostUser(event)}>
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
        <Button>Registrate me</Button>
      </Form>
    </ColoredMainArea>
  );
}
