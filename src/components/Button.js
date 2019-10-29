// Imported dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Basic styling for all buttons (default / active)
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: ${({ active, theme }) =>
    active ? theme.highlightContrast : theme.highlight};
  box-shadow: ${({ active, theme }) =>
      active ? theme.highlight : theme.highlightContrast}
    3px 3px 0;
  color: ${({ active, theme }) =>
    active ? theme.highlight : theme.highlightContrast};
  padding: 0.2rem 2rem;
  fill: ${({ active, theme }) =>
    active ? theme.highlight : theme.highlightContrast};
  font-weight: 700;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
  font-family: inherit;
`;

// Styling for buttons with an icon on the left or right
export const ButtonWithIcon = styled(Button)`
  padding: 0 0.8em 0 0.3em;

  svg {
    width: 24px;
    height: 24px;
  }
`;

// Styling for buttons with a 100% width and an icon on the left or right
export const ButtonWithIconFullWidth = styled(ButtonWithIcon)`
  width: 100%;
  padding: 0.6em 0.8em;
`;

// Styling for square buttons with a big icon above the text
export const SquareButtonWithIcon = styled(Button)`
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 0.6em;

  svg {
    width: 60px;
    height: 60px;
  }
`;

// Styling for square card buttons with a big icon above the text
export const SquareCardButtonWithIcon = styled(SquareButtonWithIcon)`
  grid-area: Button;
  justify-self: end;
  align-self: end;
  width: 66px;
  height: 66px;
  font-size: 0.8em;
  margin: 0;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export default function Button({ ...props }) {
  return <StyledButton {...props}></StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.any
};
