import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  background: ${props => props.theme.highlightContrast};
  box-shadow: ${props => props.theme.highlight} 3px 3px 0;
  color: ${props => props.theme.main};
  caret-color: ${props => props.theme.highlight};
  padding: 0.5em 0.8em;
  font-weight: 700;
  width: 100%;

  ::-webkit-input-placeholder {
    color: hsla(147, 63%, 7%, 0.4);
    font-size: 0.8em;
    font-weight: 400;
    padding-left: 0.5em;
  }
`;

export default function Input({ placeholder }) {
  return <StyledInput placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: PropTypes.string
};
