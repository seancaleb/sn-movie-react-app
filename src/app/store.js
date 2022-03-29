import { configureStore } from "@reduxjs/toolkit";
import { genresReducer } from "../features";
import { moviesApi } from "../features/api/moviesSlice";

const store = configureStore({
  reducer: {
    genres: genresReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
