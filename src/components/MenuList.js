import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MenuListItem from "./MenuListItem";
import { Link } from "react-router-dom";

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
  position: absolute;

  /* Open/Close Animation */
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(100%)")};
`;

export default function MenuList({ open }) {
  return (
    <StyledNav>
      <StyledMenuList open={open}>
        <Link to="/">
          <MenuListItem active>Articles</MenuListItem>
        </Link>
        <Link to="/editarticle">
          <MenuListItem>Edit Article</MenuListItem>
        </Link>
        <Link to="/newarticle">
          <MenuListItem>New Article</MenuListItem>
        </Link>
      </StyledMenuList>
    </StyledNav>
  );
}

MenuList.propTypes = {
  open: PropTypes.bool.isRequired
};
