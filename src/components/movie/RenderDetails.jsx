import DetailsDataView from "./DetailsDataView";
import DetailsFallback from "./DetailsFallback";

const RenderDetails = ({ data, isFetching, isSuccess, isError, error, casts, castsSuccess, castsFetching }) => {
  if (isFetching || castsFetching) return <DetailsFallback />;
  else if (isSuccess && castsSuccess) return <DetailsDataView {...{ data, casts }} />;
  else if (isError) throw error;
};

export default RenderDetails;
