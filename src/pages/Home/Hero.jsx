import { useGetTrendingMoviesQuery } from "../../features/api/moviesSlice";
import { ErrorBoundary } from "react-error-boundary";
import RenderTrending from "../../components/trending/RenderTrending";
import { ErrorFallback } from "../../components";

const Hero = () => {
  const { data, isSuccess, isFetching, isError, error } = useGetTrendingMoviesQuery();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RenderTrending {...{ data, isSuccess, isFetching, isError, error }} />
    </ErrorBoundary>
  );
};

export default Hero;
