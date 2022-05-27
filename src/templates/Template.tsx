import React from "react";
import { Stack } from "@mui/material";
import { Navbar } from "../components/organisms/headers/Header.stories";
import { ThemeProvider } from "@mui/material/styles";
import MUITheme from "../MUITheme";
import { FooterBar } from "../components/organisms/footers/Footer.stories";
import MyLibraryCurrentlyReading from "../pages/MyLibraryCurrentlyReading";

function Template() {
  return (
    <ThemeProvider theme={MUITheme}>
      <Stack spacing={3} direction="column">
        <Navbar></Navbar>
        <MyLibraryCurrentlyReading></MyLibraryCurrentlyReading>
        <FooterBar></FooterBar>
      </Stack>
    </ThemeProvider>
  );
}

export default Template;
