import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../features/book/bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

//module.exports = store;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
