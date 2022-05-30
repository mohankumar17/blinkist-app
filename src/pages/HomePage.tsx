import { Stack, Typography } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { SearchBar } from "../components/molecules/searchbar/SearchBox.stories";
import ViewArticles from "../components/molecules/cards/views/ViewArticles";
import {
  trendingBooks,
  justAddedBooks,
  audioBooks,
} from "../components/atoms/books/Books";

function HomePage() {
  //const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");

  const searchBooks = (event: any, newValue: string) => {
    newValue = newValue.toLocaleLowerCase();
    setSearchText(newValue);
    //console.log(newValue);
  };

  let homePageSections: any = [
    {
      heading: "Trending blinks",
      booksList: [...trendingBooks],
    },
    {
      heading: "Just added",
      booksList: [...justAddedBooks],
    },
    {
      heading: "Featured audio blinks",
      booksList: [...audioBooks],
    },
  ];

  for (let i = 0; i < 3; i++) {
    homePageSections[i].booksList = homePageSections[i].booksList.filter(
      (eachBook: any) => {
        let lowerCaseTitle = eachBook.title.toLocaleLowerCase();
        let lowerCaseAuthors = eachBook.authors.toLocaleLowerCase();
        return (
          lowerCaseTitle.includes(searchText) ||
          lowerCaseAuthors.includes(searchText)
        );
      }
    );
  }

  return (
    <>
      <Stack spacing={3} direction="column">
        <Stack
          spacing={4}
          direction="row"
          justifyContent="space-around"
          sx={{ backgroundColor: "#F1F6F4", padding: "20px" }}
        >
          <Stack spacing={2} direction="column" width="460px">
            <Typography variant="h4">
              Explore Books on entrepreneurship
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "18px" }}>
              Everything you need to know about thriving on a shoestring budget,
              making your first million, and hiring right from the start.
            </Typography>
          </Stack>
          <img src={require("./images/person-reading.png")} alt="person-img" />
        </Stack>

        <Stack spacing={3} direction="column">
          <SearchBar
            value={searchText}
            handleKeyDown={(event: any) => {
              if (event.key === "Enter") {
                event.preventDefault();
                //console.log(event.target);
                searchBooks(event, event.target.value);
              }
            }}
          ></SearchBar>

          {homePageSections.map((eachSection: any, index: number) => (
            <Stack direction="column" key={index}>
              <Typography variant="h5">{eachSection.heading}</Typography>
              <ViewArticles
                booksList={eachSection.booksList}
                handleClick={(
                  event: React.MouseEvent<HTMLButtonElement>,
                  id: number
                ) => {
                  event.preventDefault();
                }}
                handleDblClick={(
                  event: React.MouseEvent<HTMLButtonElement>,
                  id: number
                ) => {
                  event.preventDefault();
                }}
              ></ViewArticles>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default HomePage;
