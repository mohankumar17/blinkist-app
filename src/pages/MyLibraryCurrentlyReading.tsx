import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { LargeTab } from "../components/molecules/tabs/TabsLarge.stories";
import { useNavigate } from "react-router-dom";
import { crBooks } from "../components/atoms/books/Books";
import ViewArticles from "../components/molecules/cards/views/ViewArticles";

function MyLibraryCurrentlyReading() {
  const navigate = useNavigate();

  const [tabStatus, setTabStatus] = useState<string>("cr");

  const [booksStatus, setReadStatus] = useState<any>(crBooks);

  useEffect(() => {
    //console.log("Component Mounted/Updated");
  }, [tabStatus, booksStatus]);

  const handleTabStatus = (event: React.SyntheticEvent, newValue: string) => {
    setTabStatus(newValue);
  };

  const handleBookStatus = (id: number) => {
    //console.log(id);
    //console.log(booksList[id - 1]);

    setReadStatus((prevStatusBooks: any) => {
      let newStatusList = [...prevStatusBooks];
      newStatusList[id - 1].isRead
        ? (newStatusList[id - 1].isRead = false)
        : (newStatusList[id - 1].isRead = true);
      //console.log(newStatusList[id - 1]);
      return newStatusList;
    });
  };

  const handleBookDetailStatus = (id: number) => {
    //Routing Navigation
    navigate("books/" + id);
  };

  let currentlyReadingBooks: any = [];
  let finishedBooks: any = [];
  let bookListStatus: any = [];

  for (let ind = 0; ind < booksStatus.length; ind++) {
    if (booksStatus[ind].isRead) {
      finishedBooks.push(booksStatus[ind]);
    } else {
      currentlyReadingBooks.push(booksStatus[ind]);
    }
  }

  if (tabStatus === "cr") {
    bookListStatus = [...currentlyReadingBooks];
  } else {
    bookListStatus = [...finishedBooks];
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
        booksList={bookListStatus}
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
