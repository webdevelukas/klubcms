import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export default function GalleryImage({ src, alt }) {
  return <StyledGalleryImage src={src} alt={alt} />;
}

GalleryImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
