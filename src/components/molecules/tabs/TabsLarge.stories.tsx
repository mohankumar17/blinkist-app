import React from "react";
import TabsLarge from "./TabsLarge";
import { TabsTypes } from "./TabsLarge";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/Tabs/LargeTab",
  component: TabsLarge,
  argTypes: {
    value: {
      options: ["cr", "fn"],
      control: "radio",
    },
    handleChange: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof TabsLarge>;

// export const LargeTab = ({ value, handleChange }: TabsTypes) => (
//   <TabsLarge value={value} handleChange={handleChange}></TabsLarge>
// );

const Template: ComponentStory<typeof TabsLarge> = (args) => (
  <TabsLarge {...args} />
);

export const LargeTab = Template.bind({});

LargeTab.args = {
  value: "cr",
};
