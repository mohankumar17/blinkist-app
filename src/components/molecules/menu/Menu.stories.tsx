import React from "react";
import Menus from "./Menus";

export default {
  title: "Molecules/Menus",
  component: Menus,
};

export const ExploreMenu = () => <Menus type="explore"></Menus>;
export const AvatarMenu = () => <Menus type="avatar"></Menus>;
