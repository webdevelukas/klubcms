// Imported dependencies
import React from "react";
import styled from "styled-components";

// Imported components
import { ColoredMainArea } from "../components/MainArea";
import Button from "../components/Button";

const StyledButton = styled(Button)`
  background: ${({ active, theme }) =>
    active ? theme.highlightContrast : theme.main};
  box-shadow: ${({ active, theme }) =>
      active ? theme.main : theme.highlightContrast}
    3px 3px 0;
`;

export default function ErrorPage() {
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.highlight}>
      <h1>No worries, you just forgot to add content</h1>
      <StyledButton>Back to articles page</StyledButton>
    </ColoredMainArea>
  );
}
