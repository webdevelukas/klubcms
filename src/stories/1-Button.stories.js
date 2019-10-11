import React from "react";
import Button, { DefaultWithIcon } from "../components/Button";
import ArrowDropDown from "../icons/ArrowDropDown";

export default {
  title: "Button"
};

export const Default = () => <Button>Save article</Button>;

export const Dropdown = () => (
  <DefaultWithIcon>
    <ArrowDropDown />
    Save article
  </DefaultWithIcon>
);

export const Active = () => <Button active>Save article</Button>;

export const SquareDefaultWithIcon = () => <Button>Save article</Button>;
