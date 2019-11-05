// Imported dependencies / functions
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Imported components / icons
import { SquareImageContainer } from "./ImageContainer";
import { GalleryImage } from "./Image";
import ImageOverlay from "./ImageOverlay";

const StyledGallery = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 3px;
  padding: 0 3px;
  margin: 0 0 1rem;
`;

export default function Gallery({ articleGallery }) {
  const [showAll, setShowAll] = useState(false);
  const galleryImages = articleGallery;
  const [slicedGallery, setSlicedGallery] = useState([]);

  useEffect(() => {
    if (galleryImages.length <= 4) {
      setSlicedGallery(galleryImages);
    }
    if (galleryImages.length > 4 && showAll === false) {
      setSlicedGallery(galleryImages.slice(0, 3));
    }
    if (galleryImages.length > 4 && showAll === true) {
      setSlicedGallery(galleryImages);
    }
  }, [showAll, galleryImages]);

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
  children: PropTypes.node,
  articleGallery: PropTypes.array
};
