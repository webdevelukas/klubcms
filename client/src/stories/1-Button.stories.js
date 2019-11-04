import React from "react";
import Button, {
  ButtonWithIcon,
  SquareButtonWithIcon
} from "../components/Button";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import NewspaperIcon from "../icons/NewspaperIcon";
import TextIcon from "../icons/TextIcon";
import AddPhotosIcon from "../icons/AddPhotosIcon";

export default {
  title: "Button"
};

export const Default = () => <Button>Save article</Button>;

export const Active = () => <Button active>Save article</Button>;

export const Dropdown = () => (
  <ButtonWithIcon>
    <ArrowDropDownIcon />
    Save article
  </ButtonWithIcon>
);

export const SquareNewsPaper = () => (
  <SquareButtonWithIcon>
    <NewspaperIcon />
    Add Article
  </SquareButtonWithIcon>
);

export const SquareTextActive = () => (
  <SquareButtonWithIcon active>
    <TextIcon />
    Add Text
  </SquareButtonWithIcon>
);

export const SquarePhotos = () => (
  <SquareButtonWithIcon>
    <AddPhotosIcon />
    Add Photos
  </SquareButtonWithIcon>
);
