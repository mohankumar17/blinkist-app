import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitBookStateType = {
  bookIds: number[];
};

const initialState: InitBookStateType = {
  bookIds: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    addToLibrary: (state: InitBookStateType, action: PayloadAction<number>) => {
      state.bookIds.push(action.payload);
    },
  },
});

export default bookSlice.reducer;

export const { addToLibrary } = bookSlice.actions;
