import { GridItem } from "@chakra-ui/react";

const DetailsFallback = () => <GridItem {...gridItemProps} />;

export default DetailsFallback;

const gridItemProps = {
  colSpan: 12,
  minH: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
