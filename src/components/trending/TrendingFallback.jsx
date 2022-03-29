import { GridItem } from "@chakra-ui/react";
import { Loader } from "../";

const TrendingFallback = () => {
  return (
    <GridItem {...gridItemProps}>
      <Loader />
    </GridItem>
  );
};

export default TrendingFallback;

const gridItemProps = {
  colSpan: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minH: "560px",
};
