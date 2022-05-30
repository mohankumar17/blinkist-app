import React from "react";
import { Stack } from "@mui/material";
import { Navbar } from "../components/organisms/headers/Header.stories";
import { ThemeProvider } from "@mui/material/styles";
import MUITheme from "../MUITheme";
import { FooterBar } from "../components/organisms/footers/Footer.stories";
// import MyLibraryCurrentlyReading from "../pages/MyLibraryCurrentlyReading";
// import BookDetailView from "../pages/BookDetailView";
import PageContent from "../pages/PageContent";

function Template() {
  return (
    <ThemeProvider theme={MUITheme}>
      <Stack spacing={3} direction="column">
        <Navbar></Navbar>
        <PageContent></PageContent>

        {/* <MyLibraryCurrentlyReading></MyLibraryCurrentlyReading> */}
        {/* <BookDetailView></BookDetailView> */}

        <FooterBar></FooterBar>
      </Stack>
    </ThemeProvider>
  );
}

export default Template;
