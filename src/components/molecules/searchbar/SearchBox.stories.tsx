import React from "react";
import SearchBox from "./SearchBox";
import { SearchBoxType } from "./SearchBox";

export default {
  title: "Molecules/SearchBar",
  component: SearchBox,
};

export const SearchBar = ({ value, handleKeyDown }: SearchBoxType) => (
  <SearchBox value={value} handleKeyDown={handleKeyDown}></SearchBox>
);
