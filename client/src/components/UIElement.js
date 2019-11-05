// Imported dependencies
import styled from "styled-components";

const UIElement = styled.div`
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

export const UIElementIconTop = styled(UIElement)`
  grid-template-rows: 2em 1em;
  svg {
    width: 3em;
    height: 3em;
  }
`;

export const UIElementIconLeft = styled(UIElement)`
  grid-template-columns: 0.5fr 1fr;
`;

export const UIElementIconRight = styled(UIElement)`
  grid-template-columns: 1fr 1fr;
  align-self: right;
`;

export default UIElement;
