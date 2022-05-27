import React from "react";
import { Stack, Typography } from "@mui/material";
import { Avatars } from "../../atoms/Avatar.stories";
import { DownArrow } from "../../atoms/icons/IconButton.stories";
import "./Menu.css";

type MenuTypes = {
  type: string;
};

function Menu(props: MenuTypes) {
  if (props.type === "explore") {
    return (
      <Stack spacing={0.02} direction="column" className="explore" justifyContent='center'>
        <Stack spacing={0.1} direction="row" alignItems="center">
          <Typography variant="subtitle2">Explore</Typography>
          <DownArrow></DownArrow>
        </Stack>
        <div className="hover-line"></div>
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
        <DownArrow></DownArrow>
      </Stack>
    );
  }
}

export default Menu;
