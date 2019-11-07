// Import dependencies
import React from "react";
import styled from "styled-components";

// Import components
import ColoredSquare from "./ColoredSquare";

const StyledProgressGlossary = styled.div`
  display: flex;
  align-items: center;
`;

export default function ProgressGlossary() {
  return (
    <StyledProgressGlossary>
      In Progress
      <ColoredSquare done={false} />
      Done
      <ColoredSquare done />
    </StyledProgressGlossary>
  );
}
