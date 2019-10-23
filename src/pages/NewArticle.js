import React from "react";
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button, {
  ButtonWithIconFullWidth,
  SquareButtonWithIcon
} from "../components/Button";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import AddPhotosIcon from "../icons/AddPhotosIcon";

export default function NewArticle() {
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
        <ButtonWithIconFullWidth>
          <ArrowDropDownIcon />
          Event variable
        </ButtonWithIconFullWidth>
        <h2>Title</h2>
        <TextareaWithBoldText placeholder="What are you talking about?" />
        <h2>Content</h2>
        <Textarea placeholder="What you wanna tell the people out there?" />
        <h2>Photos</h2>
        <SquareButtonWithIcon>
          <AddPhotosIcon />
          Add Photos
        </SquareButtonWithIcon>
        <hr />
        <Button>Save article</Button>
      </MainArea>
    </>
  );
}
