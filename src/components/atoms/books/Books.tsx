import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";
import img11 from "./images/11.png";

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

export let booksList = [
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
  {
    id: 10,
    src: img10,
    title: "Being Boss",
    authors: "Kathleen Shannon & Emily",
    time_to_read: "13-minute read",
    tot_reads: "2.5k reads",
    isRead: false,
  },
  {
    id: 11,
    src: img11,
    title: "Employee to Entrepreneur",
    authors: "Steve Glaveski",
    time_to_read: "14-minute read",
    tot_reads: "3.4k reads",
    isRead: false,
  },
];

export let crBooks = booksList.filter((eachBook: BookFieldsTypes) => {
  return eachBook.id < 10;
});

export let trendingBooks = [
  booksList[9],
  booksList[1],
  booksList[10],
  booksList[3],
  booksList[4],
  booksList[5],
];
export let justAddedBooks = [booksList[6], booksList[7], booksList[8]];
export let audioBooks = [booksList[0], booksList[1], booksList[2]];

function Books() {
  return <></>;
}

export default Books;
