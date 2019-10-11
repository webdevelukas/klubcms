import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Basic styling for all buttons (default / active)
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: ${props =>
    props.active ? props.theme.highlightContrast : props.theme.highlight};
  box-shadow: ${props =>
      props.active ? props.theme.highlight : props.theme.highlightContrast}
    3px 3px 0;
  color: ${props =>
    props.active ? props.theme.highlight : props.theme.highlightContrast};
  padding: 0 0.8em;
  fill: ${props =>
    props.active ? props.theme.highlight : props.theme.highlightContrast};
`;

// Styling for buttons with an icon on the left
export const DefaultWithIcon = styled(Button)`
  padding: 0 0.8em 0 0.3em;

  svg {
    width: 24px;
    height: 24px;
  }
`;

// Styling for Square buttons with a big icon above the text
export const SquareWithIcon = styled(Button)`
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 0.6em;

  svg {
    width: 60px;
    height: 60px;
  }
`;

export default function Button({ children, onClick, active, className }) {
  return (
    <StyledButton onClick={onClick} active={active} className={className}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.any
};
