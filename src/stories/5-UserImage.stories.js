import React from "react";
import UserImage from "../components/UserImage";

import imageFile from "../sample-data/userImage.jpg";

export default {
  title: "UserImage"
};

const image = {
  src: imageFile,
  alt: "A Face looking into camera"
};

export const Default = () => <UserImage src={image.src} alt={image.alt} />;
