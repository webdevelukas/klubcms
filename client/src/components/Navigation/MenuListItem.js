// Import dependencies
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  padding: 0 1.5em;
  margin-bottom: 1px;
  background: ${({ active, theme }) =>
    active ? theme.highlightContrast : theme.highlight};
  color: ${({ active, theme }) =>
    active ? theme.highlight : theme.highlightContrast};
  font-weight: 700;
  list-style-type: none;
  cursor: pointer;
`;

export default MenuListItem;

MenuListItem.propTypes = {
  active: PropTypes.bool
};
