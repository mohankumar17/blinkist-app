import React from "react";
import TabSmall from "./TabSmall";
import { TabSmallTypes } from "./TabSmall";

export default {
  title: "Molecules/SmallTab",
  component: TabSmall,
};

export const SmallTab = ({ value, handleChange }: TabSmallTypes) => (
  <TabSmall value={value} handleChange={handleChange}></TabSmall>
);
