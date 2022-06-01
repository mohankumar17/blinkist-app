import React from "react";
import { Stack, Typography } from "@mui/material";
import { Search } from "../../atoms/icons/IconButton.stories";
import { ExploreMenu, AvatarMenu } from "../../molecules/menu/Menu.stories";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

type HeaderTypes = {
  LogoPath: string;
};

function Header(props: HeaderTypes) {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={15}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack spacing={5} direction="row" alignItems="center">
        <img
          className="brand-logo"
          src={props.LogoPath}
          alt="brand-logo"
          onClick={() => navigate("/")}
        />
        <Search></Search>
        <ExploreMenu></ExploreMenu>
        <Link underline="hover">
          <Typography
            variant="subtitle2"
            sx={{ color: "#03314B" }}
            onClick={() => navigate("mylibrary")}
          >
            My Library
          </Typography>
        </Link>
      </Stack>
      <AvatarMenu></AvatarMenu>
    </Stack>
  );
}

export default Header;
