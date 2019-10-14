import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.highlightContrast};
`;

export default function UserImage({ src, alt }) {
  return <StyledUserImage src={src} alt={alt} />;
}

UserImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
