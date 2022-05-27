import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";


export default {
  title: "Atoms/Icons",
};

export const Search = () => (
  <IconButton size="small">
    <SearchIcon></SearchIcon>
  </IconButton>
);
export const DownArrow = () => (
  <IconButton size="small">
    <ExpandMoreIcon></ExpandMoreIcon>
  </IconButton>
);

