import { useEffect, useState } from "react";
import { GridItem, Link, Flex, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";
import { MovieCard } from "../";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { loadImage } from "../../utils";
import Loader from "../Loader";

const TrendingDataView = ({ data }) => {
  const [movies, setMovies] = useState([]);
  let renderedMovies;

  if (movies.length === 0) {
    renderedMovies = (
      <Flex alignItems="center" justifyContent="center" h="100%">
        <Loader />
      </Flex>
    );
  } else {
    renderedMovies = <Swiper {...swiperProps}>{movies.map((component) => component)}</Swiper>;
  }

  useEffect(() => {
    const initialLoadImages = async () => {
      const promises = data.map(async (movie) => {
        const imgSrc = `${baseImgUrlOriginal}/${movie.backdrop_path}`;

        const loadedImage = await loadImage(imgSrc).then(() => imgSrc);

        return (
          <SwiperSlide key={movie.id}>
            <Link as={RouteLink} to={`movie/${movie.id}`}>
              <Flex {...bgCoverProps} sx={{ backgroundImage: `${bgGradient} url(${loadedImage})` }}>
                <Flex {...contentContainerProps}>
                  <Flex {...dataWrapperProps}>
                    <Text {...titleProps}>{movie.original_title}</Text>
                    <Flex {...voteWrapperProps}>
                      <Flex alignItems="center">
                        <StarIcon {...starIconProps} />
                      </Flex>
                      <Text {...voteCountProps}>{movie.vote_average}</Text>
                    </Flex>
                    <Text {...textProps}>{movie.overview}</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
        );
      });

      const resolvedMovies = await Promise.all(promises);
      setMovies((prevMovies) => [...prevMovies, ...resolvedMovies]);
    };

    initialLoadImages();
  }, []);

  return (
    <>
      <GridItem {...leftColProps}>{renderedMovies}</GridItem>

      <GridItem {...rightColProps}>
        {data.slice(0, 3).map((movie) => {
          return (
            <Link
              as={RouteLink}
              to={`movie/${movie.id}`}
              key={movie.id}
              _focus={{ boxShadow: "none" }}
            >
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </GridItem>
    </>
  );
};

export default TrendingDataView;

const bgGradient =
  "linear-gradient(rgba(24, 24, 24, 0) 40%, rgba(24, 24, 24, 0.25) 60%, rgba(24, 24, 24, 0.75) 75%, rgba(24, 24, 24, 1) 85%, rgba(24, 24, 24, 1) ), ";
const baseImgUrlOriginal = ` ${import.meta.env.VITE_TMDB_IMAGE_BASE_URL_ORIGINAL}`;

const bgCoverProps = {
  w: "100%",
  h: "500px",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  bgPos: "center",
  alignItems: "flex-end",
};

const contentContainerProps = {
  gap: "20px",
  maxW: {
    base: "100%",
    lg: "80%",
  },
  ml: {
    base: "10px",
    lg: "20px",
  },
};

const titleProps = {
  fontSize: "28px",
  fontWeight: "medium",
};

const starIconProps = {
  boxSize: "15px",
  color: "brand.primary",
};

const voteCountProps = {
  fontSize: "18px",
};

const dataWrapperProps = {
  flexDir: "column",
  justifyContent: "flex-end",
  gap: "5px",
};

const textProps = {
  fontSize: "14px",
  letterSpacing: ".5px",
  color: "whiteAlpha.600",
  fontWeight: "light",
};

const voteWrapperProps = {
  gap: "10px",
  alignItems: "center",
};

const swiperProps = {
  loop: true,
};

const leftColProps = {
  colSpan: {
    base: 12,
    lg: 8,
  },
  minH: "480px",
  w: "100%",
};

const rightColProps = {
  display: "flex",
  colSpan: {
    base: 12,
    lg: 4,
  },
  flexDir: {
    base: "column",
    md: "row",
    lg: "column",
  },
  gap: "15px",
  h: "100%",
  justifyContent: "space-between",
};
