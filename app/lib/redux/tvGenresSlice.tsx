import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TvGenresState = {
  id: Number;
  name: String;
};

type InitialState = {
  tvGenre: TvGenresState[];
};

const initialState: InitialState = {
  tvGenre: [],
};

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGVmMDAwZTdmOTUzNmQxZjgzMDk3MzI2N2RjNjZiMyIsInN1YiI6IjY1NmUwMjMxM2RjMzEzMDBlMWVlYTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JFGdF9UUt6926sW_nrSXNpaB61Foso4pREQnxDahFhw";
const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const getTvGenres = createAsyncThunk(
  "tvGenres/getTvGenres",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list
          `,
      { headers }
    );
    const data = await response.json();

    return data.genres;
  }
);

export const tvGenresSlice = createSlice({
  name: "tvGenres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvGenres.fulfilled, (state, action) => {
      state.tvGenre = action.payload;
    });
  },
});

export const GetTvGenresReducer = tvGenresSlice.reducer;
