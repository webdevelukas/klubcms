// Import dependencies
import PropTypes from "prop-types";
import styled from "styled-components";

const ColoredMainArea = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme, colorScheme }) =>
    colorScheme === "main" ? theme.main : theme.highlight};
  color: ${({ theme }) => theme.highlightContrast};
  height: 100vh;
  padding: 3rem 3rem 2rem;
  margin: 0;
`;

export default ColoredMainArea;

ColoredMainArea.propTypes = {
  colorScheme: PropTypes.string
};
