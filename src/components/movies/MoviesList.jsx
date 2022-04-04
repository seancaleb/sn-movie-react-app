import { useContext, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GridItem, Heading } from "@chakra-ui/react";
import ErrorFallback from "../ErrorFallback";
import RenderMovies from "./RenderMovies";
import { Paginate } from "../";
import { TogglerContext } from "../../App";
import { useSearchParams } from "react-router-dom";

const MoviesList = ({ title, pagination = false, fn, limit, fnArgs }) => {
  const [searchParams] = useSearchParams();
  const { data, isFetching, isSuccess, isError, error } = fn({
    ...fnArgs,
    limit,
    page: searchParams.get("page"),
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
          <Paginate {...{ data }} />
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
