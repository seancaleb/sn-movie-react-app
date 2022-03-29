import MoviesDataView from "./MoviesDataView";

const MoviesFallback = ({ isFetching, limit = 20 }) => {
  const data = new Array(limit).fill("");

  return <MoviesDataView {...{ data, isFetching }} />;
};

export default MoviesFallback;
