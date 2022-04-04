import { Text } from "@chakra-ui/react";
import React from "react";
import QueryListFallback from "./QueryListFallback";

const RenderQueryList = ({ data, error, isFetching, isSuccess, isError, limit, component }) => {
  if (isFetching) return <QueryListFallback {...{ isFetching, limit, component }} />;
  else if (isSuccess)
    return data.results.length !== 0 ? (
      component(data, isFetching)
    ) : (
      <Text color="whiteAlpha.600">None specified yet.</Text>
    );
  else if (isError) throw error;
};

export default React.memo(RenderQueryList);
