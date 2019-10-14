import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTextarea = styled.textarea`
  background: ${props => props.theme.highlightContrast};
  box-shadow: ${props => props.theme.highlight} 3px 3px 0;
  color: ${props => props.theme.main};
  caret-color: ${props => props.theme.highlight};
  padding: 0.5em 0.8em;
  min-width: 100%;
  max-width: 100%;
  min-height: 180px;

  ::-webkit-input-placeholder {
    color: hsla(147, 63%, 7%, 0.4);
    font-size: 0.8em;
    font-weight: 400;
    padding-left: 0.5em;
  }
`;

export const TextareaWithBoldText = styled(StyledTextarea)`
  font-weight: 700;
  min-height: 60px;
`;

export default function Textarea({ placeholder }) {
  return <StyledTextarea placeholder={placeholder} />;
}

Textarea.propTypes = {
  placeholder: PropTypes.string
};
