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
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Laziers essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for_who: "Students, Business People",
    about_author:
      "James C Jim Collins is an American researcher, author, speaker and consultant focused on the subject of business management and company sustainability and growth",
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
