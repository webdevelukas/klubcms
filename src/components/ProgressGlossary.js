import React from "react";
import styled from "styled-components";
import ColoredSquare from "./ColoredSquare";

const StyledProgressGlossary = styled.div`
  display: flex;
  align-items: center;
`;

export default function ProgressGlossary() {
  return (
    <StyledProgressGlossary>
      In Progress
      <ColoredSquare backgroundColor={({ theme }) => theme.progressOpen} />
      Done
      <ColoredSquare backgroundColor={({ theme }) => theme.progressDone} />
    </StyledProgressGlossary>
  );
}
