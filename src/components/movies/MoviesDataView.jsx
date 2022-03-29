import { Link, Flex, Grid, GridItem, Image, Skeleton, Text } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { Link as RouteLink } from "react-router-dom";
import VoteCount from "../VoteCount";

const placeholder = "https://via.placeholder.com/250/11111?text=Poster+Unavailable";

const MoviesDataView = ({ data: movies, isFetching = false }) => {
  return (
    <Grid {...gridProps}>
      {movies.map((movie) => {
        const posterSrc = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${movie.poster_path}`;
        const src = movie.poster_path ? posterSrc : placeholder;

        return (
          <GridItem key={movie.id || nanoid()} {...gridItemProps}>
            <Link as={RouteLink} to={`/movie/${movie.id}`}>
              <Skeleton {...skeletonProps} isLoaded={!isFetching}>
                <Image src={src} {...imageProps} />
                <Flex {...dataWrapperProps}>
                  <Flex gap="10px">
                    <VoteCount vote_average={movie.vote_average} />
                    <Text {...dateTextProps}>{movie.release_date || "Not Specified"}</Text>
                  </Flex>
                  <Text {...textProps}>{movie.original_title}</Text>
                </Flex>
              </Skeleton>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MoviesDataView;

const gridProps = {
  templateColumns: {
    base: "repeat(auto-fill, minmax(125px, 1fr))",
    sm: "repeat(auto-fill, minmax(150px, 1fr))",
    md: "repeat(auto-fill, minmax(175px, 1fr))",
  },
  rowGap: "20px",
  columnGap: { base: "10px", lg: "20px" },
};

const gridItemProps = {
  borderBottom: "3px solid",
  borderBottomColor: "brand.secondary",
  bg: "brand.dark.secondary",
};

const dataWrapperProps = {
  p: "10px",
  minH: "80px",
  flexDir: "column",
  gap: "5px",
};

const dateTextProps = {
  fontSize: "14px",
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  bgClip: "text",
  fontWeight: "medium",
};

const skeletonProps = {
  minH: "350px",
  startColor: "whiteAlpha.100",
  endColor: "whiteAlpha.300",
};

const imageProps = {
  h: "250px",
  w: "100%",
  objectFit: "cover",
  loading: "lazy",
};

const textProps = {
  fontSize: {
    base: "16px",
    lg: "14px",
  },
};
