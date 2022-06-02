import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SmallTab } from "../components/molecules/tabs/TabSmall.stories";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/Hooks";

function BookDetailView() {
  const navigate = useNavigate();

  const params = useParams();
  const bookId: any = params.bookId;
  const id: number = parseInt(bookId);

  const [tabStatus, setTabStatus] = useState<string>("snp");

  useEffect(() => {
    //console.log("Component Mounted/Updated");
  }, [tabStatus]);

  const handleTabStatus = (event: React.SyntheticEvent, newValue: string) => {
    //setValue(newValue);
    setTabStatus(newValue);
  };

  const allBooks = useAppSelector((state) => state.book.allBooks);

  const book: any = allBooks[id - 1];

  let bookDetail = {
    synopsis:
      "Donec gravida diam cursus arcu euismod tristique. Ut id scelerisque turpis, laoreet vestibulum mauris. Sed non dictum ligula. Vestibulum bibendum tortor vel libero laoreet, eget vehicula urna posuere. Donec dapibus, tellus vel interdum ullamcorper, odio diam fermentum justo, id consectetur augue libero eu sapien. In nec rutrum enim, ut aliquet eros. In in vestibulum neque. Aliquam erat volutpat. Integer interdum malesuada diam at laoreet.",
    for_who:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc massa, dignissim nec molestie id, aliquet eget lorem. Aliquam erat volutpat. Suspendisse potenti. Sed elit velit, pharetra sit amet rutrum vitae, pulvinar sit amet quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    about_author:
      "JCras porttitor lorem ac ex euismod egestas. Phasellus dolor nibh, euismod aliquet orci sit amet, imperdiet sollicitudin diam. Aenean elementum a nibh sed maximus. Sed ex mi, accumsan ut leo at, imperdiet rutrum massa. Quisque ex lorem, lobortis vel hendrerit quis, commodo vitae urna. Vestibulum accumsan enim quam. ",
  };

  let bookDetailText;
  if (tabStatus === "snp") {
    bookDetailText = bookDetail.synopsis;
  } else if (tabStatus === "who") {
    bookDetailText = bookDetail.for_who;
  } else {
    bookDetailText = bookDetail.about_author;
  }

  return (
    <>
      <Stack spacing={2} direction="column">
        <Typography variant="body1">Get the key ideas from</Typography>
        <Stack spacing={4} direction="row" justifyContent="space-between">
          <Stack spacing={5} direction="column">
            <Stack spacing={1} direction="column">
              <Typography variant="h5">{book.title}</Typography>
              <Typography component={"span"} variant="subtitle2">
                Turning Your Business into an Enduring Great Company
              </Typography>
              <Typography component={"span"} variant="body2">
                {book.authors}
              </Typography>
              <Typography
                component={"span"}
                variant="body2"
                color="text.secondary"
              >
                <Stack direction="row" alignItems="center">
                  <AccessTimeIcon></AccessTimeIcon>
                  {book.time_to_read}
                </Stack>
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
            >
              <Button
                variant="outlined"
                sx={{ color: "#2CE080", borderColor: "#042330" }}
              >
                <Typography variant="subtitle1">Read now</Typography>
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2CE080", color: "#03314B" }}
              >
                <Typography variant="subtitle1"> Finished Reading </Typography>
              </Button>
              <Button variant="text" sx={{ color: "#6D787E" }}>
                <Typography variant="subtitle1">Send to Kindle</Typography>
                <ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon>
              </Button>
            </Stack>
          </Stack>
          <img src={book.src} alt="book-img" />
        </Stack>

        <Stack spacing={2} direction="column" width="600px">
          <SmallTab
            value={tabStatus}
            handleChange={(event: React.SyntheticEvent, value: string) => {
              event.preventDefault();
              //console.log(value);
              handleTabStatus(event, value);
            }}
          ></SmallTab>

          <Typography variant="body1">{bookDetailText}</Typography>

          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              onClick={() => navigate("/mylibrary")}
              variant="text"
              sx={{ color: "#6D787E" }}
            >
              <ArrowBackIcon></ArrowBackIcon>
              <Typography variant="subtitle1">Back to My Library</Typography>
            </Button>

            <Button
              onClick={() => navigate("/")}
              variant="text"
              sx={{ color: "#6D787E" }}
            >
              <ArrowBackIcon></ArrowBackIcon>
              <Typography variant="subtitle1">Back to Home</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default BookDetailView;
