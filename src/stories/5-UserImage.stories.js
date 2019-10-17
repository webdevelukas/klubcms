import React from "react";
import { UserImage } from "../components/Image";

import imageFile from "../sample-data/userImage.jpg";

const image = {
  src: imageFile,
  alt: "A Face looking into camera"
};

export default {
  title: "UserImage"
};

export const Default = () => <UserImage src={image.src} alt={image.alt} />;
