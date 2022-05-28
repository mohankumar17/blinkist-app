import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { LargeTab } from "../components/molecules/tabs/TabsLarge.stories";
import { ArticleCard } from "../components/molecules/cards/articles/Article.stories";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";

export type BookFieldsTypes = {
  id: number;
  src: string;
  title: string;
  authors: string;
  time_to_read: string;
  tot_reads: string;
  isRead: boolean;
};

export type BookListTypes = {
  booksList?: BookFieldsTypes[];
};

let booksList = [
  {
    id: 1,
    src: img1,
    title: "Bring Your Human to Work",
    authors: "Erica Keswin",
    time_to_read: "13-minute read",
    tot_reads: "1.9k reads",
    isRead: false,
  },

  {
    id: 2,
    src: img2,
    title: "Beyond Entrepreneurship",
    authors: "Jim Colloins & Bill Lazier",
    time_to_read: "15-minute read",
    tot_reads: "5.3k reads",
    isRead: false,
  },

  {
    id: 3,
    src: img3,
    title: "Doesn't Hurt to Ask",
    authors: "Trey Gowdy",
    time_to_read: "13-minute read",
    tot_reads: "1.9k reads",
    isRead: false,
  },

  {
    id: 4,
    src: img4,
    title: "The Fate of Food",
    authors: "Amanda Little",
    time_to_read: "12-minute read",
    tot_reads: "16k reads",
    isRead: false,
  },

  {
    id: 5,
    src: img5,
    title: "Lives of the Stoics",
    authors: "Ryan Holiday & Stephen Hansel",
    time_to_read: "13-minute read",
    tot_reads: "1.9k reads",
    isRead: false,
  },

  {
    id: 6,
    src: img6,
    title: "Loving Your Business",
    authors: "Debbie King",
    time_to_read: "14-minute read",
    tot_reads: "2.6k reads",
    isRead: false,
  },

  {
    id: 7,
    src: img7,
    title: "The Lonely Century",
    authors: "Noreena Hertz",
    time_to_read: "15-minute read",
    tot_reads: "3.9k reads",
    isRead: false,
  },

  {
    id: 8,
    src: img8,
    title: "Eat Better, Feel Better",
    authors: "Giada De Laurentiis",
    time_to_read: "13-minute read",
    tot_reads: "1.8k reads",
    isRead: false,
  },

  {
    id: 9,
    src: img9,
    title: "Dropshipping",
    authors: "James Moore",
    time_to_read: "12-minute read",
    tot_reads: "1.5k reads",
    isRead: false,
  },
];

function MyLibraryCurrentlyReading() {
  const [tabStatus, setTabStatus] = useState<string>("cr");

  const [booksStatus, setReadStatus] = useState<any>(booksList);

  //const [value, setValue] = React.useState("cr");

  useEffect(() => {
    //console.log("Component Mounted/Updated");
  }, [tabStatus, booksStatus]);

  const handleTabStatus = (event: React.SyntheticEvent, newValue: string) => {
    //setValue(newValue);
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

      <Grid
        sx={{ paddingTop: "10px" }}
        container
        justifyContent="flex-start"
        rowSpacing={2}
        columnSpacing={{ xs: 0.5, sm: 1, md: 1.5 }}
      >
        {bookListStatus.map((eachBook: any, index: number) => (
          <Grid item md={4} sm={6} key={eachBook.id}>
            <ArticleCard
              id={eachBook.id}
              src={eachBook.src}
              title={eachBook.title}
              authors={eachBook.authors}
              time_to_read={eachBook.time_to_read}
              tot_reads={eachBook.tot_reads}
              isRead={eachBook.isRead}
              handleClick={(
                event: React.MouseEvent<HTMLButtonElement>,
                id: number
              ) => {
                //console.log(event.target);
                //console.log(id);
                event.preventDefault();
                handleBookStatus(id);
              }}
            ></ArticleCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MyLibraryCurrentlyReading;
