import { Box } from "@chakra-ui/react";

const Main = ({ children, pt = "20px" }) => {
  return <Box {...mainProps} pt={pt} children={children} />;
};

const mainProps = {
  as: "main",
  minH: "100vh",
  bg: "brand.dark.primary",
};

export default Main;
