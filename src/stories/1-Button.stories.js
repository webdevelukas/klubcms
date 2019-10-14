import React from "react";
import Button, {
  ButtonWithIcon,
  SquareButtonWithIcon
} from "../components/Button";
import ArrowDropDown from "../icons/ArrowDropDown";
import NewsPaper from "../icons/NewsPaper";
import Text from "../icons/Text";
import AddPhotos from "../icons/AddPhotos";

export default {
  title: "Button"
};

export const Default = () => <Button>Save article</Button>;

export const Active = () => <Button active>Save article</Button>;

export const Dropdown = () => (
  <ButtonWithIcon>
    <ArrowDropDown />
    Save article
  </ButtonWithIcon>
);

export const SquareNewsPaper = () => (
  <SquareButtonWithIcon>
    <NewsPaper />
    Add Article
  </SquareButtonWithIcon>
);

export const SquareTextActive = () => (
  <SquareButtonWithIcon active>
    <Text />
    Add Text
  </SquareButtonWithIcon>
);

export const SquarePhotos = () => (
  <SquareButtonWithIcon>
    <AddPhotos />
    Add Photos
  </SquareButtonWithIcon>
);
