// Imported dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMenuListItem = styled.li`
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

export default function MenuListItem({ active, onClick, children }) {
  return (
    <StyledMenuListItem active={active} onClick={onClick}>
      {children}
    </StyledMenuListItem>
  );
}

MenuListItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
};
