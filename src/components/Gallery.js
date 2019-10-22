import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SquareImageContainer } from "./ImageContainer";
import { GalleryImage } from "./Image";
import ImageOverlay from "./ImageOverlay";

// Sample Data
const imageId01 =
  "https://images.unsplash.com/photo-1508087625439-de3978963553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80";
const imageId02 =
  "https://images.unsplash.com/photo-1554331468-3d4032983519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
const imageId03 =
  "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
const imageId04 =
  "https://images.unsplash.com/photo-1524748969064-cf3dabd7b84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
const imageId05 =
  "https://images.unsplash.com/photo-1516283250450-174387a1af6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 3px;
  padding: 0 3px;
`;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const galleryImages = [imageId01, imageId02, imageId03, imageId04, imageId05];
  const [slicedGallery, setSlicedGallery] = useState(galleryImages);

  React.useEffect(() => {
    if (galleryImages.length === 4) {
      setSlicedGallery(galleryImages);
    }
    if (galleryImages.length > 4 && showAll === false) {
      setSlicedGallery(galleryImages.slice(0, 3));
    }
    if (galleryImages.length > 4 && showAll === true) {
      setSlicedGallery(galleryImages);
    }
  }, [showAll]);

  return (
    <StyledGallery>
      {slicedGallery.map(galleryImage => {
        return (
          <SquareImageContainer key={galleryImage}>
            <GalleryImage src={galleryImage} />
          </SquareImageContainer>
        );
      })}
      <SquareImageContainer galleryImagesLength={galleryImages.length}>
        <ImageOverlay showAll={showAll} setShowAll={setShowAll} />
      </SquareImageContainer>
    </StyledGallery>
  );
}

Gallery.propTypes = {
  children: PropTypes.node
};
