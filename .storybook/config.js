import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyles";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/themes/default";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
