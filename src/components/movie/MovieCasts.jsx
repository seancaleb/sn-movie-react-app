import { Text } from "@chakra-ui/react";
import React from "react";
import { useGetMovieCastsQuery } from "../../features/api/moviesSlice";

const MovieCasts = ({ movieId }) => {
  const { data, isFetching } = useGetMovieCastsQuery({ movieId });
  let renderedCasts;

  if (data) {
    if (data.length === 0) {
      renderedCasts = (
        <Text {...textProps} _hover={{ color: "whiteAlpha.800", cursor: "unset" }}>
          Not specified
        </Text>
      );
    } else {
      renderedCasts = data.map((cast, index) => (
        <Text {...textProps} key={cast.id}>
          {cast.name}
          {index === data.length - 1 ? "" : ","}{" "}
        </Text>
      ));
    }
  } else if (isFetching) {
    renderedCasts = (
      <Text {...textProps} _hover={{ color: "whiteAlpha.800", cursor: "unset" }}>
        XXX XXX XXX
      </Text>
    );
  }

  return <>{renderedCasts}</>;
};

export default MovieCasts;

const textProps = {
  color: "whiteAlpha.800",
  fontWeight: "normal",
  _hover: { color: "brand.primary", cursor: "pointer" },
  as: "span",
};
