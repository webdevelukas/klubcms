// Import dependencies
import PropTypes from "prop-types";
import styled from "styled-components";

const ColoredSquare = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ theme, done }) =>
    done ? theme.progressDone : theme.progressOpen};
  margin: 0 0.5em;
`;

export default ColoredSquare;

ColoredSquare.propTypes = {
  done: PropTypes.bool
};
