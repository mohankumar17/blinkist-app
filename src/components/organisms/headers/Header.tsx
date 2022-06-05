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
    <Stack id="navbar">
      <Stack
        spacing={15}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "30px 264px" }}
      >
        <Stack spacing={5} direction="row" alignItems="center">
          <img
            className="brand-logo"
            src={props.LogoPath}
            alt="brand-logo"
            onClick={() => navigate("/")}
            data-testid="brandLogo-click"
          />
          <Search></Search>
          <ExploreMenu></ExploreMenu>
          <Link underline="hover">
            <Typography
              variant="subtitle2"
              sx={{ color: "#03314B" }}
              onClick={() => navigate("mylibrary")}
              data-testid="myLibrary-click"
            >
              My Library
            </Typography>
          </Link>
        </Stack>
        <AvatarMenu></AvatarMenu>
      </Stack>
    </Stack>
  );
}

export default Header;
