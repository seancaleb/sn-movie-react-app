import TrendingDataView from "./TrendingDataView";
import TrendingFallback from "./TrendingFallback";

const RenderTrending = ({ data, isSuccess, isFetching, isError, error }) => {
  if (isFetching) return <TrendingFallback />;
  else if (isSuccess) return <TrendingDataView {...{ data }} />;
  else if (isError) throw error;
};

export default RenderTrending;
