import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type GenresState = {
  id: Number;
  name: String;
};

type InitialState = {
  genre: GenresState[];
};

const initialState: InitialState = {
  genre: [],
};

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGVmMDAwZTdmOTUzNmQxZjgzMDk3MzI2N2RjNjZiMyIsInN1YiI6IjY1NmUwMjMxM2RjMzEzMDBlMWVlYTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JFGdF9UUt6926sW_nrSXNpaB61Foso4pREQnxDahFhw";
const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const getGenres = createAsyncThunk("genres/getGenres", async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list
          `,
    { headers }
  );
  const data = await response.json();

  return data.genres;
});

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genre = action.payload;
    });
  },
});

export const GetGenresReducer = genresSlice.reducer;
