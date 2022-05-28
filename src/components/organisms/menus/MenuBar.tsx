import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

function MenuBar() {
  let exploreMenuList: any = [
    {
      id: 1,
      icon: <NotificationsNoneIcon></NotificationsNoneIcon>,
      title: "Entrepreneurship",
    },
    {
      id: 2,
      icon: <AccountBalanceIcon></AccountBalanceIcon>,
      title: "Politics",
    },
    {
      id: 3,
      icon: <TimelineOutlinedIcon></TimelineOutlinedIcon>,
      title: "Marketing & Sales",
    },
    {
      id: 4,
      icon: <ScienceOutlinedIcon></ScienceOutlinedIcon>,
      title: "Science",
    },
    {
      id: 5,
      icon: <HealthAndSafetyOutlinedIcon></HealthAndSafetyOutlinedIcon>,
      title: "Health & Nutrition",
    },
    {
      id: 6,
      icon: <SignalCellularAltOutlinedIcon></SignalCellularAltOutlinedIcon>,
      title: "Personal Development",
    },
    {
      id: 7,
      icon: <PublicOutlinedIcon></PublicOutlinedIcon>,
      title: "Economics",
    },
    {
      id: 8,
      icon: <HistoryOutlinedIcon></HistoryOutlinedIcon>,
      title: "History",
    },
    {
      id: 9,
      icon: <SmsOutlinedIcon></SmsOutlinedIcon>,
      title: "Communication Skills",
    },
    {
      id: 10,
      icon: <CorporateFareOutlinedIcon></CorporateFareOutlinedIcon>,
      title: "Corporate Culture",
    },
    {
      id: 11,
      icon: <EmojiObjectsOutlinedIcon></EmojiObjectsOutlinedIcon>,
      title: "Motivation & Inspiration",
    },
    {
      id: 12,
      icon: <LocalAtmOutlinedIcon></LocalAtmOutlinedIcon>,
      title: "Money & Investments",
    },
    {
      id: 13,
      icon: <PsychologyOutlinedIcon></PsychologyOutlinedIcon>,
      title: "Psychology",
    },
    {
      id: 14,
      icon: <HourglassBottomOutlinedIcon></HourglassBottomOutlinedIcon>,
      title: "Productivity",
    },
    {
      id: 15,
      icon: <WcOutlinedIcon></WcOutlinedIcon>,
      title: "Sex & Relationship",
    },
    {
      id: 16,
      icon: <SpaOutlinedIcon></SpaOutlinedIcon>,
      title: "Nature & Environment",
    },
    {
      id: 17,
      icon: <TrackChangesOutlinedIcon></TrackChangesOutlinedIcon>,
      title: "Career & Success",
    },
    {
      id: 18,
      icon: <SchoolOutlinedIcon></SchoolOutlinedIcon>,
      title: "Education",
    },
  ];

  return (
    <div>
      <Stack spacing={2} direction="column" width="880px">
        <Stack spacing={5} direction="row" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "16px" }}>
            Explore by category
          </Typography>
          <Typography variant="subtitle2">See recently added titles</Typography>
          <Typography variant="subtitle2">See popular titles</Typography>
        </Stack>

        <Box
          sx={{
            borderWidth: "1px 0 0 0",
            borderColor: "#042330",
            borderStyle: "solid",
            width: "940px",
          }}
        ></Box>

        <Grid
          container
          justifyContent="flex-start"
          rowSpacing={1}
          columnSpacing={{ xs: 0.5, sm: 1, md: 1.5 }}
        >
          {exploreMenuList.map((eachItem: any, index: number) => (
            <Grid item md={4} sm={6} key={eachItem.id}>
              <Stack spacing={0.5} direction="row" alignItems="center">
                {eachItem.icon}
                <Typography variant="body2">{eachItem.title}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}

export default MenuBar;
