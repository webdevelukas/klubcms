import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 13vw;
  grid-gap: 5px;
`;

export default function Gallery({ children }) {
  return <StyledGallery>{children}</StyledGallery>;
}

Gallery.propTypes = {
  children: PropTypes.node
};
