import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: BadgeList;
`;

export default function BadgeList({ children }) {
  return <StyledBadgeList>{children}</StyledBadgeList>;
}

BadgeList.propTypes = {
  children: PropTypes.node
};
