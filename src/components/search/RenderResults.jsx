import ResultsDataView from "./ResultsDataView";
import ResultsFallback from "./ResultsFallback";

const RenderResults = ({
  data,
  error,
  isFetching,
  isSuccess,
  isError,
  category,
  query,
  setQuery,
  setIsActive,
}) => {
  if (isFetching) return <ResultsFallback />;
  else if (isSuccess && data)
    return data.results.length !== 0 ? (
      <ResultsDataView {...{ data, category, query, setIsActive, setQuery }} />
    ) : (
      <ResultsFallback
        fallbackText={`No matching ${category.title.toLowerCase()} from the results.`}
      />
    );
  else if (isError) throw error;
};

export default RenderResults;
