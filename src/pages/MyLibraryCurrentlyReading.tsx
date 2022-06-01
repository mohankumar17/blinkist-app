import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { LargeTab } from "../components/molecules/tabs/TabsLarge.stories";
import { useNavigate } from "react-router-dom";
import ViewArticles from "../components/molecules/cards/views/ViewArticles";
import { booksList } from "../components/atoms/books/Books";
import { useAppSelector } from "../app/Hooks";

function MyLibraryCurrentlyReading() {
  const navigate = useNavigate();

  const [tabStatus, setTabStatus] = useState<string>("cr");

  const bookIds = useAppSelector((state) => state.book.bookIds);
  //console.log(bookIds);

  let crBooks = [];

  for (let eachBook = 0; eachBook < booksList.length; eachBook++) {
    if (bookIds.includes(booksList[eachBook].id)) {
      booksList[eachBook].btnStatus = 1;
      crBooks.push(booksList[eachBook]);
    }
  }

  const [booksStatus, setReadStatus] = useState<any>(crBooks);

  useEffect(() => {
    //console.log("Component Mounted/Updated");
  }, [tabStatus, booksStatus]);

  const handleTabStatus = (event: React.SyntheticEvent, newValue: string) => {
    setTabStatus(newValue);
  };

  const handleBookStatus = (id: number) => {
    //console.log("****************" + id + "****************");
    //console.log(booksList[id - 1]);

    setReadStatus((prevStatusBooks: any) => {
      let newStatusList: any = [];

      for (let i = 0; i < prevStatusBooks.length; i++) {
        if (prevStatusBooks[i].id === id) {
          if (prevStatusBooks[i].btnStatus === 1) {
            prevStatusBooks[i] = { ...prevStatusBooks[i], btnStatus: 2 };
          } else {
            prevStatusBooks[i] = { ...prevStatusBooks[i], btnStatus: 1 };
          }
        }
        newStatusList.push(prevStatusBooks[i]);
      }

      //console.log(newStatusList);

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
    if (booksStatus[ind].btnStatus === 2) {
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
