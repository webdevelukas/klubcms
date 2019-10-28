// Imported dependencies
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
`;

export const DropdownFullWidth = styled(Dropdown)`
  width: 100%;
`;

export default Dropdown;
