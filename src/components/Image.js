import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const UserImage = styled(StyledImage)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.highlightContrast};
  z-index: 1;
`;

export const CardImage = styled(StyledImage)`
  grid-area: CardImage;
`;

export default function Image({ src, alt }) {
  return <StyledImage src={src} alt={alt} />;
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.node
};
