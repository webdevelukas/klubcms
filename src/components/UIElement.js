import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUIElement = styled.div`
  display: inline-grid;
  justify-items: center;
  align-items: center;
  fill: ${props => props.theme.highlight};
  color: ${props => props.theme.highlight};
  cursor: pointer;

  svg {
    width: 2em;
    height: 2em;
  }
`;

export const UIElementIconTop = styled(StyledUIElement)`
  grid-template-rows: 2em 1em;
  svg {
    width: 3em;
    height: 3em;
  }
`;

export const UIElementIconLeft = styled(StyledUIElement)`
  grid-template-columns: 0.5fr 1fr;
`;

export const UIElementIconRight = styled(StyledUIElement)`
  grid-template-columns: 1fr 1fr;
`;

export default function UIElement({ onClick, children }) {
  return <StyledUIElement onClick={onClick}>{children}</StyledUIElement>;
}

UIElement.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};
