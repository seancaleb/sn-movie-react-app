import React, { useEffect } from "react";
import Routes from "./routes/Routes";
import { useDispatch } from "react-redux";
import { fetchMovieGenres } from "../src/features/genres/genresSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieGenres());
  }, []);

  return <Routes />;
};

export default App;
