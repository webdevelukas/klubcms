// Import dependencies
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const UserImage = styled(StyledImage)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.highlightContrast};
  z-index: 101;
`;

export const GalleryImage = styled(StyledImage)`
  position: absolute;
`;

export const CardImage = styled(StyledImage)`
  grid-area: CardImage;
`;

export default Image;
