const QueryListFallback = ({ isFetching, limit = 20, component }) => {
  let data = {};

  data.results = new Array(limit).fill("");

  return component(data, isFetching);
};

export default QueryListFallback;
