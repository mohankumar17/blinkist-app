import React from "react";
import MyLibraryCurrentlyReading from "../pages/MyLibraryCurrentlyReading";
import BookDetailView from "../pages/BookDetailView";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function PageContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="mylibrary" element={<MyLibraryCurrentlyReading></MyLibraryCurrentlyReading>}>
        </Route>
        <Route path="mylibrary/books/:bookId" element={<BookDetailView></BookDetailView>}></Route>
        
      </Routes>
    </>
  );
}

export default PageContent;
