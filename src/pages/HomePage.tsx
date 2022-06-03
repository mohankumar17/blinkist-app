import { Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchBar } from "../components/molecules/searchbar/SearchBox.stories";
import ViewArticles from "../components/molecules/cards/views/ViewArticles";

import { useAppSelector, useAppDispatch } from "../app/Hooks";
import { addToLibrary } from "../features/book/bookSlice";

function HomePage() {
  const navigate = useNavigate();

  const allBooks = useAppSelector((state) => state.book.allBooks);
  const dispatch = useAppDispatch();

  const handleBookOrderStatus = (id: number) => {
    dispatch(addToLibrary([id, 1]));
  };

  const handleBookDetailStatus = (id: number) => {
    //Routing Navigation
    navigate("mylibrary/books/" + id);
  };

  const [searchText, setSearchText] = useState<string>("");

  const searchBooks = (event: any, newValue: string) => {
    newValue = newValue.toLocaleLowerCase();
    setSearchText(newValue);
    //console.log(newValue);
  };

  let homePageSections: any = [
    {
      heading: "Trending blinks",
      booksList: [allBooks[9],allBooks[1],allBooks[10],allBooks[3],allBooks[4],allBooks[5]],
    },
    {
      heading: "Just added",
      booksList: [allBooks[6],allBooks[7],allBooks[8]],
    },
    {
      heading: "Featured audio blinks",
      booksList: [allBooks[0],allBooks[1],allBooks[2]],
    },
    {
      heading: "All Books",
      booksList: [...allBooks],
    },
  ];

  for (let i = 0; i < 4; i++) {
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
      <Stack spacing={3} direction="column" sx={{ padding: "0 264px" }}>
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
                isHome={true}
                handleClick={(
                  event: React.MouseEvent<HTMLButtonElement>,
                  id: number
                ) => {
                  event.preventDefault();
                  handleBookOrderStatus(id);
                }}
                handleDblClick={(
                  event: React.MouseEvent<HTMLButtonElement>,
                  id: number
                ) => {
                  event.preventDefault();
                  handleBookDetailStatus(id);
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
