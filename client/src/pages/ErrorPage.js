// Import dependencies
import React from "react";
import styled from "styled-components";

// Import components
import ColoredMainArea from "../components/Container/ColoredMainArea";
import Button from "../components/Buttons/Button";

const StyledButton = styled(Button)`
  background: ${({ active, theme }) =>
    active ? theme.highlightContrast : theme.main};
  box-shadow: ${({ active, theme }) =>
      active ? theme.main : theme.highlightContrast}
    3px 3px 0;
`;

export default function ErrorPage() {
  return (
    <ColoredMainArea submitSuccesful={false}>
      <h1>No worries, you just forgot to add content</h1>
      <StyledButton>Back to articles page</StyledButton>
    </ColoredMainArea>
  );
}
