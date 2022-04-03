import { ErrorBoundary } from "react-error-boundary";
import { useGetCastDetailsQuery } from "../../features/api/moviesSlice";
import { ErrorFallback } from "../";
import RenderDetails from "./RenderDetails";

const CastDetails = ({ castId }) => {
  const { data, isSuccess, isFetching, isError, error } = useGetCastDetailsQuery({ castId });

  const renderProps = { data, isSuccess, isFetching, isError, error };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RenderDetails {...renderProps} />
    </ErrorBoundary>
  );
};

export default CastDetails;
