import React from "react";
import Gallery from "../components/Gallery";

import imageFile01 from "../sample-data/tsv-meisterfeier-01.jpg";
import imageFile02 from "../sample-data/tsv-meisterfeier-02.jpg";
import imageFile03 from "../sample-data/tsv-meisterfeier-03.jpg";
import imageFile04 from "../sample-data/tsv-meisterfeier-04.jpg";
import { GalleryImage } from "../components/Image";
import ImageOverlay from "../components/ImageOverlay";
import { SquareImageContainer } from "../components/ImageContainer";

const image01 = {
  src: imageFile01
};
const image02 = {
  src: imageFile02
};
const image03 = {
  src: imageFile03
};
const image04 = {
  src: imageFile04
};

export default {
  title: "Gallery"
};

export const Default = () => (
  <Gallery>
    <SquareImageContainer>
      <GalleryImage src={image01.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image02.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image03.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image04.src} />
    </SquareImageContainer>
  </Gallery>
);

export const Expandable = () => (
  <Gallery>
    <SquareImageContainer>
      <GalleryImage src={image01.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image02.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image03.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <ImageOverlay>Show all</ImageOverlay>
      <GalleryImage src={image04.src} />
    </SquareImageContainer>
  </Gallery>
);

export const Expanded = () => (
  <Gallery>
    <SquareImageContainer>
      <GalleryImage src={image01.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image02.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image03.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image04.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image01.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image02.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <GalleryImage src={image03.src} />
    </SquareImageContainer>
    <SquareImageContainer>
      <ImageOverlay>Show less</ImageOverlay>
    </SquareImageContainer>
  </Gallery>
);
