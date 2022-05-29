import { Tabs, Tab } from "@mui/material";
import React from "react";

export type TabSmallTypes = {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

function TabSmall({ value, handleChange }: TabSmallTypes) {
  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab sx={{width: "200px"}} value="snp" label="Synopsis" />
      <Tab sx={{width: "200px"}} value="who" label="Who is it for?" />
      <Tab sx={{width: "200px"}} value="aut" label="About the author" />
    </Tabs>
  );
}

export default TabSmall;
