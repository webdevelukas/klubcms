import React from "react";
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button, {
  SquareButtonWithIcon,
  ButtonWithIconFullWidth
} from "../components/Button";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import AddPhotosIcon from "../icons/AddPhotosIcon";
import Gallery from "../components/Gallery";

export default function EditArticle() {
  return (
    <>
      <Menu />
      <MainArea>
        <h1>What do you want to edit?</h1>
        <hr />
        <FunctionBar>
          <div>
            Date added: <b>12.10.2019</b>
          </div>
          <div>
            Date updated: <b>16.10.2019</b>
          </div>
        </FunctionBar>
        <h2>Event</h2>
        <ButtonWithIconFullWidth>
          <ArrowDropDownIcon />
          Event variable
        </ButtonWithIconFullWidth>
        <h2>Title</h2>
        <TextareaWithBoldText placeholder="What are you talking about?" />
        <h2>Text</h2>
        <Textarea placeholder="What you wanna tell the people out there?" />
        <h2>Photos</h2>
        <Gallery />
        <SquareButtonWithIcon>
          <AddPhotosIcon />
          Add Photos
        </SquareButtonWithIcon>
        <hr />
        <Button>Save Article</Button>
      </MainArea>
      ;
    </>
  );
}
