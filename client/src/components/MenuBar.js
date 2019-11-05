// Imported dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Imported components / icons
import { UserImage } from "./Image";
import MenuBurger from "./MenuBurger";
import { UIElementIconLeft } from "./UIElement";
import GoBackIcon from "../icons/GoBackIcon";

const StyledMenuBar = styled.div`
  z-index: 102;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 0 1em;
  background: ${({ theme }) => theme.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUserImage = styled(UserImage)`
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: -25px;
`;

export default function MenuBar({ onClick, open, setOpen }) {
  return (
    <StyledMenuBar onClick={onClick}>
      <UIElementIconLeft>
        <GoBackIcon />
        Go back
      </UIElementIconLeft>
      <StyledUserImage src="https://images.unsplash.com/photo-1571512599285-9ac4fdf3dba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <MenuBurger open={open} setOpen={setOpen} />
    </StyledMenuBar>
  );
}

MenuBar.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
