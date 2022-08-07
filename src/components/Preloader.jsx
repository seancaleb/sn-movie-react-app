import { Box, Flex, Text } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";

const Preloader = () => {
  return (
    <Box {...styles.container}>
      <Flex {...styles.wrapper}>
        <Triangle
          height="50"
          width="50"
          color="#00989B"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        <Text>SN MOVIES</Text>
      </Flex>
    </Box>
  );
};

export default Preloader;

const styles = {
  container: {
    pos: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bg: "brand.dark.primary",
    zIndex: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flexDir: "column",
    alignItems: "center",
    gap: "10px",
  },
};
