import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background: ${props => props.theme.highlight};
  box-shadow: ${props => props.theme.highlightContrast} 3px 3px 0;
  border: none;
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.highlightContrast};
  padding: 0 0.8em;
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node
};
