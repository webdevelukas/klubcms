import React from "react";
import {
  UIElementIconLeft,
  UIElementIconTop,
  UIElementIconRight
} from "../components/UIElement";
import MenuBurgerIcon from "../icons/MenuBurgerIcon";
import MenuCrossIcon from "../icons/MenuCrossIcon";
import GoBackIcon from "../icons/GoBackIcon";
import LogoutPowerIcon from "../icons/LogoutPowerIcon";

export default {
  title: "UI-Elements"
};

export const GoBack = () => (
  <UIElementIconLeft>
    <GoBackIcon />
    Go back
  </UIElementIconLeft>
);

export const MenuBurger = () => (
  <UIElementIconTop>
    <MenuBurgerIcon />
    menu
  </UIElementIconTop>
);

export const MenuCross = () => (
  <UIElementIconTop>
    <MenuCrossIcon />
    close
  </UIElementIconTop>
);

export const Logout = () => (
  <UIElementIconRight>
    Logout
    <LogoutPowerIcon />
  </UIElementIconRight>
);
