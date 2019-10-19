import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProgressBarList = styled.div`
  grid-area: ProgressBarList;
  align-self: end;
`;

export default function ProgressBarList({ children }) {
  return <StyledProgressBarList>{children}</StyledProgressBarList>;
}

ProgressBarList.propTypes = {
  children: PropTypes.node
};
