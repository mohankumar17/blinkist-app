import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Avatars } from "../../atoms/Avatar.stories";
import { DownArrow } from "../../atoms/icons/IconButton.stories";
import "./Menu.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { MenuBarNavItems } from "../../organisms/menus/MenuBar.stories";

type MenuTypes = {
  type: string;
};

function Menus(props: MenuTypes) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const blurElement = document.getElementById("root") as HTMLElement;

  const handleCloseMenu = () => {
    setAnchorEl(null);
    blurElement.classList.remove("blur");
  };

  if (props.type === "explore") {
    return (
      <Stack
        spacing={0.02}
        direction="column"
        className="explore"
        justifyContent="center"
      >
        <Stack spacing={0.1} direction="row" alignItems="center">
          <Link underline="hover">
            <Typography variant="subtitle2" sx={{color: "#03314B"}}>Explore</Typography>
          </Link>
          <DownArrow
            open={open}
            menuType="explore-menu"
            handleClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              //console.log(event.target);
              handleClickMenu(event);
              blurElement.classList.add("blur");
            }}
          ></DownArrow>

          <Menu
            id="explore-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Box
              sx={{
                height: "389px",
                width: "1500px",
                padding: "30px 250px 30px 250px",
              }}
            >
              <MenuBarNavItems></MenuBarNavItems>
            </Box>
          </Menu>
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack
        spacing={0.1}
        direction="row"
        alignItems="center"
        className="avatar"
      >
        <Avatars></Avatars>
        <DownArrow
          open={open}
          menuType="avatar-menu"
          handleClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            //console.log(event.target);
            handleClickMenu(event);
          }}
        ></DownArrow>
        <Menu
          id="avatar-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
        </Menu>
      </Stack>
    );
  }
}

export default Menus;
