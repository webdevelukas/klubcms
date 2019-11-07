// Import dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import useRedirectTo from "../../hooks/useRedirectTo";
import { paths } from "../../lib/paths";

// Import components / icons
import MenuListItem from "./MenuListItem";
import { IconTextContainerIconRight } from "../Container/IconTextContainer";
import LogoutPowerIcon from "../../icons/LogoutPowerIcon";

const StyledNav = styled.nav`
  z-index: 100;
  padding: 70px 0 1rem;
  position: absolute;
  width: 280px;
  right: 0;
  height: 100vh;
  background: ${({ theme }) => theme.main};
  display: grid;
  grid-template-columns: 1fr 1fr;

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
  grid-column: span 2;
`;

const LogoutButton = styled(IconTextContainerIconRight)`
  grid-column: 2;
  align-self: end;
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
      <LogoutButton onClick={() => redirectTo(paths.loginPage)}>
        Logout
        <LogoutPowerIcon />
      </LogoutButton>
    </StyledNav>
  );
}

MenuList.propTypes = {
  open: PropTypes.bool.isRequired
};
