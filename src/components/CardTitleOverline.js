import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCardTitleOverline = styled.p`
  grid-area: CardTitleOverline;
  margin: 0;
  font-size: 0.8em;
`;

export default function CardTitleOverline({ children }) {
  return <StyledCardTitleOverline>{children}</StyledCardTitleOverline>;
}

CardTitleOverline.propTypes = {
  children: PropTypes.node
};
