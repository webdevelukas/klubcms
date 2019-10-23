import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { ColoredMainArea } from "../components/MainArea";

const StyledButton = styled(Button)`
  background: ${props =>
    props.active ? props.theme.highlightContrast : props.theme.main};
  box-shadow: ${props =>
      props.active ? props.theme.main : props.theme.highlightContrast}
    3px 3px 0;
`;

export default function Error() {
  return (
    <ColoredMainArea bgColor={({ theme }) => theme.highlight}>
      <h1>No worries, you just forgot to add content</h1>
      <StyledButton>Back to articles page</StyledButton>
    </ColoredMainArea>
  );
}
