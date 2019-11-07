// Imported dependencies
import styled from "styled-components";

const IconTextContainer = styled.div`
  display: inline-grid;
  justify-items: center;
  align-items: center;
  fill: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.highlight};
  cursor: pointer;

  svg {
    width: 2em;
    height: 2em;
  }
`;

export const IconTextContainerIconTop = styled(IconTextContainer)`
  grid-template-rows: 2em 1em;
  svg {
    width: 3em;
    height: 3em;
  }
`;

export const IconTextContainerIconLeft = styled(IconTextContainer)`
  grid-template-columns: 0.5fr 1fr;
`;

export const IconTextContainerIconRight = styled(IconTextContainer)`
  grid-template-columns: 1fr 1fr;
  align-self: right;
`;

export default IconTextContainer;
