import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { UIElementIconTop } from "./UIElement";
import MenuBurgerIcon from "../icons/MenuBurgerIcon";

const AnimatedMenuBurgerIcon = styled(MenuBurgerIcon)``;

export default function MenuBurger({ open, setOpen }) {
  return (
    <UIElementIconTop open={open} onClick={() => setOpen(!open)}>
      <AnimatedMenuBurgerIcon open={open} />
      menu
    </UIElementIconTop>
  );
}

MenuBurger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
