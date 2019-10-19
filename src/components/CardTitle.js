import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCardTitle = styled.h3`
  grid-area: CardTitle;
  margin: 0;
`;

export default function CardTitle({ children }) {
  return <StyledCardTitle>{children}</StyledCardTitle>;
}

CardTitle.propTypes = {
  children: PropTypes.string
};
