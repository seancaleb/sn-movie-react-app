import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return <Spinner {...spinnerProps} />;
};

export default Loader;

const spinnerProps = {
  color: "brand.primary",
  emptyColor: "brand.secondary",
  size: "lg",
  speed: ".6s",
  thickness: "2px",
};
