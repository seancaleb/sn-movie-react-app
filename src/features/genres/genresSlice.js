import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: "idle",
  error: "",
};

const baseURL = `${import.meta.env.VITE_TMDB_API_BASE_URL}`;
const key = `${import.meta.env.VITE_TMDB_API_KEY}`;

const url = `${baseURL}/genre/movie/list?api_key=${key}`;

export const fetchMovieGenres = createAsyncThunk("genres/fetchMovieGenres", async (thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data.genres;
  } catch (err) {
    // NEED TO CONFIGURE ERROR RESPONSE !!!!
  }
});

const options = {
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieGenres.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchMovieGenres.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.entities = action.payload;
    });
    builder.addCase(fetchMovieGenres.rejected, (state, action) => {
      state.loading = "failed";
      state.entities = [];
      state.error = action.payload;
    });
  },
};

export const selectGenres = (state) => state.genres.entities;
export const selectGenre = (state, id) => state.genres.entities.filter((genre) => id === genre.id);

const genresSlice = createSlice(options);
export default genresSlice.reducer;
