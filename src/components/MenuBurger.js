import React from "react";
import PropTypes from "prop-types";
import { UIElementIconTop } from "./UIElement";
import MenuBurgerIcon from "../icons/MenuBurgerIcon";

export default function MenuBurger({ open, setOpen }) {
  return (
    <UIElementIconTop open={open} onClick={() => setOpen(!open)}>
      <MenuBurgerIcon />
      menu
    </UIElementIconTop>
  );
}

MenuBurger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
