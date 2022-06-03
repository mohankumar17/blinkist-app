import { Tabs, Tab } from "@mui/material";
import React from "react";

export type TabsTypes = {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

function TabsLarge({ value, handleChange }: TabsTypes) {
  // const [value, setValue] = React.useState("cr");

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <Tabs
      sx={{ padding: "30px 0" }}
      value={value}
      onChange={handleChange}
      //onClick={(event) => handleClick(event, value)}
      aria-label="basic tabs example"
    >
      <Tab value="cr" label="Currently reading" />
      <Tab value="fn" label="Finished" />
    </Tabs>
  );
}

export default TabsLarge;
