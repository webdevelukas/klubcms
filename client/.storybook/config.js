import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import mainTheme from "../src/themes/main";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
