import React from "react";
import { Stack, Typography } from "@mui/material";
import { Search } from "../../atoms/icons/IconButton.stories";
import { ExploreMenu, AvatarMenu } from  "../../molecules/menu/Menu.stories";
import "./Header.css";

type HeaderTypes = {
  LogoPath: string;
};

function Header(props: HeaderTypes) {
  return (
    <Stack spacing={15} direction="row" alignItems="center" justifyContent='space-between'>
      <Stack spacing={5} direction="row" alignItems="center">
        <img className="brand-logo" src={props.LogoPath} alt="brand-logo" />
        <Search></Search>
        <ExploreMenu></ExploreMenu>
        <Typography variant="subtitle2">My Library</Typography>
      </Stack>
      <AvatarMenu></AvatarMenu>
    </Stack>
  );
}

export default Header;
