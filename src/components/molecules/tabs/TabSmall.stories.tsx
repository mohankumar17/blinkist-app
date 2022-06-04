import React from "react";
import TabSmall from "./TabSmall";
// import { TabSmallTypes } from "./TabSmall";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/Tabs/SmallTab",
  component: TabSmall,
  argTypes: {
    value: {
      options: ["snp", "who", "aut"],
      control: "radio",
    },
    handleChange: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof TabSmall>;

// export const SmallTab = ({ value, handleChange }: TabSmallTypes) => (
//   <TabSmall value={value} handleChange={handleChange}></TabSmall>
// );

const Template: ComponentStory<typeof TabSmall> = (args) => (
  <TabSmall {...args} />
);

export const SmallTab = Template.bind({});

SmallTab.args = {
  value: "snp",
};
