"use client";
import { configureStore } from "@reduxjs/toolkit";
import { GetGenresReducer } from "./genresSlice";
import { GetTvGenresReducer } from "./tvGenresSlice";

export const store = configureStore({
  reducer: {
    getGenres: GetGenresReducer,
    getTvGenres: GetTvGenresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
