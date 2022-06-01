import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksList } from "../../components/atoms/books/Books";

type InitBookStateType = {
  allBooks: any[];
};

const initialState: InitBookStateType = {
  allBooks: booksList,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    addToLibrary: (state: InitBookStateType, action: PayloadAction<number[]>) => {
      let id = action.payload[0];
      let newBtnStatus = action.payload[1];
      state.allBooks[id - 1].btnStatus = newBtnStatus;
    },
  },
});

export default bookSlice.reducer;

export const { addToLibrary } = bookSlice.actions;
