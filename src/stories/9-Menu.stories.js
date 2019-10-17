import React from "react";
import MenuBar from "../components/MenuBar";
import MenuList from "../components/MenuList";
import MenuListItem from "../components/MenuListItem";

export default {
  title: "Menu"
};

export const MenuTop = () => <MenuBar />;

export const MenuItem = () => <MenuListItem />;

export const MenuRight = () => (
  <MenuList>
    <MenuListItem active>Actual Page</MenuListItem>
    <MenuListItem>Articles</MenuListItem>
    <MenuListItem>Create new article</MenuListItem>
  </MenuList>
);

export const MenuToggled = () => (
  <>
    <MenuBar />
    <MenuList>
      <MenuListItem active>Actual Page</MenuListItem>
      <MenuListItem>Articles</MenuListItem>
      <MenuListItem>Create new article</MenuListItem>
    </MenuList>
  </>
);
