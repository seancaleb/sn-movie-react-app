import { useContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GridItem, Heading } from "@chakra-ui/react";
import ErrorFallback from "../ErrorFallback";
import RenderMovies from "./RenderMovies";
import MoviesPagination from "./MoviesPagination";
import { TogglerContext } from "../../App";
import { useSearchParams } from "react-router-dom";

const MoviesList = ({ title, category, limit, pagination = false, fn, movieId, castId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") ?? 1);

  const { data, isFetching, isSuccess, isError, error } = fn({
    category,
    limit,
    movieId,
    page: searchParams.get("page"),
    castId,
  });

  /////////////////////////////////////////////////////////////////
  // --------------- THIS IS JUST FOR DEMO PURPOSES ---------------
  /////////////////////////////////////////////////////////////////

  const { setIsActive } = useContext(TogglerContext);

  useEffect(() => {
    if (isSuccess && data) setIsActive(true);
  }, [data, isSuccess, setIsActive]);

  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  return (
    <>
      <GridItem colSpan={12}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Heading {...headingProps}>{title} Movies</Heading>
          <RenderMovies {...{ data, isFetching, isSuccess, isError, error, limit }} />
        </ErrorBoundary>
      </GridItem>
      {pagination && data && (
        <GridItem colSpan={12}>
          <MoviesPagination {...{ data, setPage }} />
        </GridItem>
      )}
    </>
  );
};

export default MoviesList;

const headingProps = {
  mb: "20px",
  letterSpacing: ".5px",
  fontSize: "24px",
  color: "#fff",
  fontWeight: "medium",
};
