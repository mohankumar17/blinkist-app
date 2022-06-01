import React, { useState } from "react";
import { Typography } from "@mui/material";
import { LargeTab } from "../components/molecules/tabs/TabsLarge.stories";
import { useNavigate } from "react-router-dom";
import ViewArticles from "../components/molecules/cards/views/ViewArticles";
import { useAppSelector, useAppDispatch } from "../app/Hooks";
import { addToLibrary } from "../features/book/bookSlice";

function MyLibraryCurrentlyReading() {
  const navigate = useNavigate();

  const [tabStatus, setTabStatus] = useState<string>("cr");
  const handleTabStatus = (event: React.SyntheticEvent, newValue: string) => {
    setTabStatus(newValue);
  };

  const allBooks = useAppSelector((state) => state.book.allBooks);
  const dispatch = useAppDispatch();

  const handleBookStatus = (id: number) => {
    if (allBooks[id - 1].btnStatus === 1) {
      dispatch(addToLibrary([id, 2]));
    }
    if (allBooks[id - 1].btnStatus === 2) {
      dispatch(addToLibrary([id, 1]));
    }
  };

  const handleBookDetailStatus = (id: number) => {
    //Routing Navigation
    navigate("books/" + id);
  };

  let currentlyReadingBooks: any = [];
  let finishedBooks: any = [];
  let libBooks: any = [];

  for (let ind = 0; ind < allBooks.length; ind++) {
    if (allBooks[ind].btnStatus === 2) {
      finishedBooks.push(allBooks[ind]);
    }
    if (allBooks[ind].btnStatus === 1) {
      currentlyReadingBooks.push(allBooks[ind]);
    }
  }

  if (tabStatus === "cr") {
    libBooks = [...currentlyReadingBooks];
  } else {
    libBooks = [...finishedBooks];
  }

  return (
    <>
      <Typography variant="h5">My Library</Typography>
      <LargeTab
        value={tabStatus}
        handleChange={(event: React.SyntheticEvent, value: string) => {
          event.preventDefault();
          //console.log(event.target);

          handleTabStatus(event, value);
        }}
      ></LargeTab>

      <ViewArticles
        booksList={libBooks}
        isHome={false}
        handleClick={(
          event: React.MouseEvent<HTMLButtonElement>,
          id: number
        ) => {
          event.preventDefault();
          handleBookStatus(id);
        }}
        handleDblClick={(
          event: React.MouseEvent<HTMLButtonElement>,
          id: number
        ) => {
          event.preventDefault();
          handleBookDetailStatus(id);
        }}
      ></ViewArticles>
    </>
  );
}

export default MyLibraryCurrentlyReading;
