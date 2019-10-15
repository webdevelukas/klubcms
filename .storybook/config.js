import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "../src/themes/default";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

const Main = styled.div`
  width: 360px;
  min-height: 100vh;
  height: auto;
  background: #e1e1e1;
  padding: 1.25em;
`;

const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <Main>
      <GlobalStyles />
      {storyFn()}
    </Main>
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
