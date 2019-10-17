import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
`;

export default function MenuList({ children }) {
  return (
    <StyledNav>
      <StyledMenuList>{children}</StyledMenuList>
    </StyledNav>
  );
}

MenuList.propTypes = {
  children: PropTypes.node
};
