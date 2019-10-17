import React from "react";
import {
  UIElementIconLeft,
  UIElementIconTop,
  UIElementIconRight
} from "../components/UIElement";
import MenuCrossIcon from "../icons/MenuCrossIcon";
import GoBackIcon from "../icons/GoBackIcon";
import LogoutPowerIcon from "../icons/LogoutPowerIcon";
import MenuBurger from "../components/MenuBurger";

export default {
  title: "UI-Elements"
};

export const GoBack = () => (
  <UIElementIconLeft>
    <GoBackIcon />
    Go back
  </UIElementIconLeft>
);

export const Burger = () => <MenuBurger />;

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
