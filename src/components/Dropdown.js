import styled from "styled-components";

const Dropdown = styled.select`
  background: ${props =>
    props.active ? props.theme.highlightContrast : props.theme.highlight};
  box-shadow: ${props =>
      props.active ? props.theme.highlight : props.theme.highlightContrast}
    3px 3px 0;
  color: ${props =>
    props.active ? props.theme.highlight : props.theme.highlightContrast};
  fill: ${props =>
    props.active ? props.theme.highlight : props.theme.highlightContrast};
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
