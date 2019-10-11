import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background: ${props =>
    props.active ? props.theme.highlightContrast : props.theme.highlight};
  box-shadow: ${props =>
      props.active ? props.theme.highlight : props.theme.highlightContrast}
    3px 3px 0;
  border: none;
  color: ${props =>
    props.active ? props.theme.highlight : props.theme.highlightContrast};
  padding: 0 0.8em;
`;

export default function Button({ children, onClick, active }) {
  return (
    <StyledButton onClick={onClick} active={active}>
      Test
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool
};
