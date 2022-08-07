import { StarIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

const VoteCount = ({ vote_average }) => {
  return (
    <Flex {...voteWrapperProps}>
      <Flex alignItems="center">
        <StarIcon {...starIconProps} />
      </Flex>
      <Text {...textProps}>{vote_average ? Number(vote_average).toFixed(1) : "Unrated"}</Text>
    </Flex>
  );
};

export default VoteCount;

const voteWrapperProps = {
  gap: "5px",
  alignItems: "center",
};

const starIconProps = {
  boxSize: "12px",
  color: "brand.primary",
  transform: "translateY(-1px)",
};

const textProps = {
  color: "whiteAlpha.600",
  fontSize: "14px",
};
