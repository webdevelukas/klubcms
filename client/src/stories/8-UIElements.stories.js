import React from "react";
import {
  IconTextContainerIconLeft,
  IconTextContainerIconTop,
  IconTextContainerIconRight
} from "../components/Container/IconTextContainer";
import MenuCrossIcon from "../icons/MenuCrossIcon";
import GoBackIcon from "../icons/GoBackIcon";
import LogoutPowerIcon from "../icons/LogoutPowerIcon";
import MenuBurger from "../components/Navigation/MenuBurger";

export default {
  title: "UI-Elements"
};

export const GoBack = () => (
  <IconTextContainerIconLeft>
    <GoBackIcon />
    Go back
  </IconTextContainerIconLeft>
);

export const Burger = () => <MenuBurger />;

export const MenuCross = () => (
  <IconTextContainerIconTop>
    <MenuCrossIcon />
    close
  </IconTextContainerIconTop>
);

export const Logout = () => (
  <IconTextContainerIconRight>
    Logout
    <LogoutPowerIcon />
  </IconTextContainerIconRight>
);
