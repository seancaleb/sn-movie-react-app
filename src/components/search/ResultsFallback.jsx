import { ViewOffIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { Loader } from "../";

const ResultsFallback = ({ fallbackText }) => {
  return (
    <Flex minH="50vh" alignItems="center" justifyContent="center">
      {fallbackText ? (
        <Flex flexDir="column" alignItems="center" gap="5px">
          <ViewOffIcon boxSize="30px" color="brand.primary" />
          <Text maxW="400px" textAlign="center" color="whiteAlpha.800" fontSize="14px">
            {fallbackText}
          </Text>
        </Flex>
      ) : (
        <Loader />
      )}
    </Flex>
  );
};

export default ResultsFallback;
