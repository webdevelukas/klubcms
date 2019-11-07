// Import dependencies
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressBarListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  background: ${({ finished, theme }) =>
    finished ? theme.progressDone : theme.progressOpen};
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 3px;

  :nth-last-child(1) {
    margin: 0;
  }
`;

export default ProgressBarListItem;

ProgressBarListItem.propTypes = {
  finished: PropTypes.bool
};
