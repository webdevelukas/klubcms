// Import dependencies
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  return (
    <ColoredMainArea colorScheme="error">
      <h1>No worries, you just forgot to add content</h1>
      <StyledButton onClick={() => history.goBack()}>
        Back to the article
      </StyledButton>
    </ColoredMainArea>
  );
}
