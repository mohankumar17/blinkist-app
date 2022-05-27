import React from "react";
import TabsLarge from "./TabsLarge";
import { TabsTypes } from "./TabsLarge";

export default {
  title: "Molecules/Tabs",
  component: TabsLarge,
};

export const LargeTab = ({ value, handleChange }: TabsTypes) => (
  <TabsLarge value={value} handleChange={handleChange}></TabsLarge>
);
