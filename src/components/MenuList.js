import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MenuListItem from "./MenuListItem";
import { useHistory, NavLink } from "react-router-dom";
import { UIElementIconRight } from "./UIElement";
import LogoutPowerIcon from "../icons/LogoutPowerIcon";

const StyledNav = styled.nav`
  z-index: 100;
  padding: 70px 0 1rem;
  position: absolute;
  width: 280px;
  right: 0;
  height: 100vh;
  background: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Open/Close Animation */
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(100%)")};

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
  const history = useHistory();

  function linkTo(pathAsString) {
    history.push(pathAsString);
  }

  return (
    <StyledNav open={open}>
      <StyledMenuList>
        <NavLink to="/" exact activeClassName="selected">
          <MenuListItem>Articles</MenuListItem>
        </NavLink>
        <NavLink to="/editarticle" activeClassName="selected">
          <MenuListItem>Edit Article</MenuListItem>
        </NavLink>
        <NavLink to="/newarticle" activeClassName="selected">
          <MenuListItem>New Article</MenuListItem>
        </NavLink>
      </StyledMenuList>
      <UIElementIconRight onClick={() => linkTo("/login")}>
        Logout
        <LogoutPowerIcon />
      </UIElementIconRight>
    </StyledNav>
  );
}

MenuList.propTypes = {
  open: PropTypes.bool.isRequired
};
