import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImageContainer = styled.picture`
  position: relative;
  width: 100%;
  height: auto;
`;

export const SquareImageContainer = styled(StyledImageContainer)`
  padding-bottom: 100%;
  display: ${props => (props.galleryImagesLength <= 4 ? "none" : "block")};
`;

export default function ImageContainer({ children, galleryImagesLength }) {
  return (
    <StyledImageContainer galleryImagesLength={galleryImagesLength}>
      {children}
    </StyledImageContainer>
  );
}

ImageContainer.propTypes = {
  children: PropTypes.node,
  galleryImagesLength: PropTypes.number
};
