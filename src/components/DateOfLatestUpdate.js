import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDateOfLatestUpdate = styled.p`
  grid-area: DateOfLatestUpdate;
  font-size: 0.8em;
  margin: 0;
`;

export default function DateOfLatestUpdate({ children }) {
  return <StyledDateOfLatestUpdate>{children}</StyledDateOfLatestUpdate>;
}

DateOfLatestUpdate.propTypes = {
  children: PropTypes.node
};
