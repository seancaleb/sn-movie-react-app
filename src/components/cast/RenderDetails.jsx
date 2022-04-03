import DetailsDataView from "./DetailsDataView";
import DetailsFallback from "./DetailsFallback";

const RenderDetails = ({ data, isSuccess, isFetching, isError, error }) => {
  if (isFetching) return <DetailsFallback />;
  else if (isSuccess) return <DetailsDataView {...{ data }} />;
  else if (isError) throw error;
};

export default RenderDetails;
