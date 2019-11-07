// Import dependencies
import styled from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled.picture`
  position: relative;
  width: 100%;
  height: auto;
`;

export const SquareImageContainer = styled(ImageContainer)`
  padding-bottom: 100%;
  display: ${({ galleryImagesLength }) =>
    galleryImagesLength <= 4 ? "none" : "block"};
`;

export default ImageContainer;

ImageContainer.propTypes = {
  galleryImagesLength: PropTypes.number
};
