import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background: ${props => props.theme.main};
  color: ${props => props.theme.highlightContrast};
  padding: 0 0.8em;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 700;
  margin: 0 0.3em 3px 0;
  max-width: fit-content;
  cursor: pointer;

  :nth-last-child(1) {
    margin: 0;
  }
`;

export default function Badge({ children }) {
  return <StyledBadge>{children}</StyledBadge>;
}

Badge.propTypes = {
  children: PropTypes.node
};
