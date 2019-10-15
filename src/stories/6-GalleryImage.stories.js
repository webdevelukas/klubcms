import React from "react";
import GalleryImage from "../components/GalleryImage";

import imageFile01 from "../sample-data/tsv-meisterfeier-01.jpg";

const image01 = {
  src: imageFile01
};

export default {
  title: "GalleryImage"
};

export const Default = () => <GalleryImage src={image01.src} />;
