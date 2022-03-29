import { useGetMovieDetailsQuery } from "../../features/api/moviesSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../";
import RenderDetails from "./RenderDetails";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, isSuccess, isFetching, isError, error } = useGetMovieDetailsQuery({ movieId });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RenderDetails {...{ data, isSuccess, isFetching, isError, error }} />
    </ErrorBoundary>
  );
};

export default MovieDetails;
