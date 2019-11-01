// Imported dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import useRedirectTo from "../hooks/useRedirectTo";

// Imported components / icons
import MenuListItem from "./MenuListItem";
import { UIElementIconRight } from "./UIElement";
import LogoutPowerIcon from "../icons/LogoutPowerIcon";

// Imported data
import { paths } from "../lib/paths";

const StyledNav = styled.nav`
  z-index: 100;
  padding: 70px 0 1rem;
  position: absolute;
  width: 280px;
  right: 0;
  height: 100vh;
  background: ${({ theme }) => theme.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Open/Close Animation */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  .selected li {
    background: ${({ theme }) => theme.highlightContrast};
    color: ${({ theme }) => theme.highlight};
  }
`;

const StyledMenuList = styled.ul`
  padding: 0;
  margin: 0;
`;

export default function MenuList({ open }) {
  const redirectTo = useRedirectTo();

  return (
    <StyledNav open={open}>
      <StyledMenuList>
        <NavLink to="/articles" exact activeClassName="selected">
          <MenuListItem>Articles</MenuListItem>
        </NavLink>
        {/* <NavLink to="/articles/edit" activeClassName="selected">
          <MenuListItem>Edit Article</MenuListItem>
        </NavLink> */}
        <NavLink to="/articles/new" activeClassName="selected">
          <MenuListItem>New Article</MenuListItem>
        </NavLink>
      </StyledMenuList>
      <UIElementIconRight onClick={() => redirectTo(paths.loginPage)}>
        Logout
        <LogoutPowerIcon />
      </UIElementIconRight>
    </StyledNav>
  );
}

MenuList.propTypes = {
  open: PropTypes.bool.isRequired
};
