import React from "react";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";

export default {
  title: "Textarea"
};

export const Default = () => (
  <Textarea placeholder="What you wanna tell the people out there?" />
);

export const BoldText = () => (
  <TextareaWithBoldText placeholder="What are you talking about?" />
);
