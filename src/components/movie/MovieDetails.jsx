import { useGetMovieCastsQuery, useGetMovieDetailsQuery } from "../../features/api/moviesSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../";
import RenderDetails from "./RenderDetails";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, isSuccess, isFetching, isError, error } = useGetMovieDetailsQuery({ movieId });
  const { data: casts, isSuccess: castsSuccess, isFetching: castsFetching } = useGetMovieCastsQuery({ movieId });

  const renderProps = { data, isSuccess, isFetching, isError, error, casts, castsSuccess, castsFetching };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RenderDetails {...renderProps} />
    </ErrorBoundary>
  );
};

export default MovieDetails;
