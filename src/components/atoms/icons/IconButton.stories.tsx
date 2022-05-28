import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";

export default {
  title: "Atoms/Icons",
};

export type clickTypes = {
  open: boolean;
  menuType: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Search = () => (
  <IconButton size="small">
    <SearchIcon></SearchIcon>
  </IconButton>
);
export const DownArrow = ({ open, menuType, handleClick }: clickTypes) => (
  <IconButton
    size="small"
    onClick={handleClick}
    id="basic-button"
    aria-controls={open ? menuType : undefined}
    aria-haspopup="true"
    aria-expanded={open ? "true" : undefined}
  >
    <ExpandMoreIcon></ExpandMoreIcon>
  </IconButton>
);