import { Flex, Image, Text } from "@chakra-ui/react";
import VoteCount from "./VoteCount";

const MovieCard = ({ movie }) => {
  const src = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${movie.poster_path}`;

  return (
    <Flex {...cardWrapperProps}>
      <Image src={src} {...imageProps} />
      <Flex {...dataWrapperProps}>
        <VoteCount vote_average={movie.vote_average} />
        <Text fontSize="16px">{movie.original_title}</Text>
        <Text {...textProps}>{movie.overview.substring(0, 150)}...</Text>
      </Flex>
    </Flex>
  );
};

export default MovieCard;

const cardWrapperProps = {
  gap: "20px",
  flexDir: {
    base: "row",
    md: "column",
    lg: "row",
  },
};

const imageProps = {
  maxW: {
    base: "100px",
    md: "100%",
    lg: "100px",
  },
};

const dataWrapperProps = {
  flexDir: "column",
  justifyContent: "flex-start",
  gap: "5px",
};

const textProps = {
  color: "whiteAlpha.600",
  fontSize: "12px",
};
