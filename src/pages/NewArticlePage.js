import React from "react";
import { useHistory } from "react-router-dom";
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button from "../components/Button";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";

import { DropdownFullWidth } from "../components/Dropdown";
import Input from "../components/Input";
import Form from "../components/Form";

export default function NewArticlePage() {
  const history = useHistory();

  function linkTo(pathAsString) {
    history.push(pathAsString);
  }
  return (
    <>
      <Menu />
      <MainArea>
        <h1>Keep on smiling while creating your new article</h1>
        <hr />
        <FunctionBar>
          <div>
            Date added: <b>12.10.2019</b>
          </div>
        </FunctionBar>
        <h2>Event</h2>
        <Form>
          <DropdownFullWidth>
            <option>Event variables</option>
          </DropdownFullWidth>
          <h2>Title</h2>
          <TextareaWithBoldText placeholder="What are you talking about?" />
          <h2>Content</h2>
          <Textarea placeholder="What you wanna tell the people out there?" />
          <h2>Photos</h2>
          <Input type="file" multiple />
          <hr />
          <Button onClick={() => linkTo("/submit")}>Save article</Button>
        </Form>
      </MainArea>
    </>
  );
}
