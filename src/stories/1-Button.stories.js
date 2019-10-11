import React from "react";
import Button, { DefaultWithIcon, SquareWithIcon } from "../components/Button";
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
  <DefaultWithIcon>
    <ArrowDropDown />
    Save article
  </DefaultWithIcon>
);

export const SquareNewsPaper = () => (
  <SquareWithIcon>
    <NewsPaper />
    Add Article
  </SquareWithIcon>
);

export const SquareTextActive = () => (
  <SquareWithIcon active>
    <Text />
    Add Text
  </SquareWithIcon>
);

export const SquarePhotos = () => (
  <SquareWithIcon>
    <AddPhotos />
    Add Photos
  </SquareWithIcon>
);
