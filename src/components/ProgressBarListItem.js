import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProgressBarListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  background: ${props =>
    props.finished ? props.theme.progressDone : props.theme.progressOpen};
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 3px;

  :nth-last-child(1) {
    margin: 0;
  }
`;

export default function ProgressBarListItem({ finished, children }) {
  return (
    <StyledProgressBarListItem finished={finished}>
      {children}
    </StyledProgressBarListItem>
  );
}

ProgressBarListItem.propTypes = {
  finished: PropTypes.bool,
  children: PropTypes.node
};
