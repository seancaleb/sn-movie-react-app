import { configureStore } from "@reduxjs/toolkit";
import { genresReducer, queryReducer } from "../features";
import { moviesApi } from "../features/api/moviesSlice";

const store = configureStore({
  reducer: {
    genres: genresReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    query: queryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
