import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledColoredSquare = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ backgroundColor }) => backgroundColor};
  margin: 0 0.5em;
`;

export default function ColoredSquare({ backgroundColor }) {
  return <StyledColoredSquare backgroundColor={backgroundColor} />;
}

ColoredSquare.propTypes = {
  backgroundColor: PropTypes.string
};
