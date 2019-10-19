import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImageContainer = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SquareImageContainer = styled(StyledImageContainer)`
  padding-bottom: 100%;
`;

export default function ImageContainer({ children }) {
  return <StyledImageContainer>{children}</StyledImageContainer>;
}

ImageContainer.propTypes = {
  children: PropTypes.node
};
