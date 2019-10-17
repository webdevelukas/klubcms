import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.article`
  display: grid;
  grid-template-areas:
    "CardImage CardTitleOverline CardTitleOverline CardTitleOverline"
    "CardImage CardTitle CardTitle CardTitle"
    "ProgressBarList DateOfLatestUpdate DateOfLatestUpdate Button"
    "ProgressBarList BadgeList BadgeList Button";
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto 1fr auto auto;
  grid-gap: 0.2em 0.5em;
  width: 100%;
  height: 180px;
  background: ${props => props.theme.highlightContrast};
  margin-bottom: 0.5em;
  padding: 0.6em 0.8em;
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

Card.propTypes = {
  children: PropTypes.node
};
