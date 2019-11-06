// Import dependencies
import PropTypes from "prop-types";
import styled from "styled-components";

const Dropdown = styled.select`
  background: ${({ active, theme }) =>
    active ? theme.highlightContrast : theme.highlight};
  box-shadow: ${({ active, theme }) =>
      active ? theme.highlight : theme.highlightContrast}
    3px 3px 0;
  color: ${({ active, theme }) =>
    active ? theme.highlight : theme.highlightContrast};
  fill: ${({ active, theme }) =>
    active ? theme.highlight : theme.highlightContrast};
  font-weight: 700;
  width: auto;
  height: 40px;
  border-radius: 0;
  cursor: pointer;
  font-family: inherit;

  @media (max-width: 480px) {
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0 1rem;
  }
`;

export const DropdownFullWidth = styled(Dropdown)`
  width: 100%;
  margin-bottom: 1rem;
`;

export default Dropdown;

Dropdown.propTypes = {
  active: PropTypes.bool
};
