import { Text } from "@chakra-ui/react";
import React from "react";
import MoviesDataView from "./MoviesDataView";
import MoviesFallback from "./MoviesFallback";

const RenderMovies = ({ data, error, isFetching, isSuccess, isError, limit }) => {
  if (isFetching) return <MoviesFallback isFetching={isFetching} limit={limit} />;
  else if (isSuccess)
    if (data.results) {
      return data.results.length !== 0 ? (
        <MoviesDataView data={data.results} />
      ) : (
        <Text color="whiteAlpha.600">None specified yet.</Text>
      );
    } else if (data.cast) {
      return <MoviesDataView data={data.cast} />;
    } else if (isError) throw error;
};

export default React.memo(RenderMovies);
