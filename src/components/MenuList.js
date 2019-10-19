import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MenuListItem from "./MenuListItem";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const StyledMenuList = styled.ul`
  width: 280px;
  height: 100vh;
  background: ${props => props.theme.main};
  padding: 0;
  margin: 0;
  position: relative;

  /* Open/Close Animation */
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(100%)")};
`;

export default function MenuList({ open }) {
  return (
    <StyledNav>
      <StyledMenuList open={open}>
        <MenuListItem active>Actual Page</MenuListItem>
        <MenuListItem>Articles</MenuListItem>
        <MenuListItem>Create new article</MenuListItem>
      </StyledMenuList>
    </StyledNav>
  );
}

MenuList.propTypes = {
  open: PropTypes.bool.isRequired
};
