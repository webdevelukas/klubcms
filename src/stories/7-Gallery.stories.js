import React from "react";
import Gallery from "../components/Gallery";

import imageFile01 from "../sample-data/tsv-meisterfeier-01.jpg";
import imageFile02 from "../sample-data/tsv-meisterfeier-02.jpg";
import imageFile03 from "../sample-data/tsv-meisterfeier-03.jpg";
import imageFile04 from "../sample-data/tsv-meisterfeier-04.jpg";
import Image from "../components/Image";
import ImageOverlay, { StyledImageOverlay } from "../components/ImageOverlay";

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
    <Image src={image01.src} />
    <Image src={image02.src} />
    <Image src={image03.src} />
    <Image src={image04.src} />
  </Gallery>
);

export const Expandable = () => (
  <Gallery>
    <Image src={image01.src} />
    <Image src={image02.src} />
    <Image src={image03.src} />
    <ImageOverlay>
      <StyledImageOverlay>Show all</StyledImageOverlay>
      <Image src={image04.src} />
    </ImageOverlay>
  </Gallery>
);

export const Expanded = () => (
  <Gallery>
    <Image src={image01.src} />
    <Image src={image02.src} />
    <Image src={image03.src} />
    <Image src={image04.src} />
    <Image src={image01.src} />
    <Image src={image02.src} />
    <Image src={image03.src} />
    <Image src={image04.src} />
    <ImageOverlay>
      <StyledImageOverlay>Show less</StyledImageOverlay>
    </ImageOverlay>
  </Gallery>
);
