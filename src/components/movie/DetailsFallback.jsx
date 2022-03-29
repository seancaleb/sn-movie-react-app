import { GridItem } from "@chakra-ui/react";
import { Loader } from "../";

const DetailsFallback = () => {
  return (
    <GridItem {...gridItemProps}>
      <Loader />
    </GridItem>
  );
};

export default DetailsFallback;

const gridItemProps = {
  colSpan: 12,
  minH: "650px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
