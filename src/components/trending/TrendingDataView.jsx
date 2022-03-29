import { GridItem, Link, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";
import { MovieCard } from "../";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";

const TrendingDataView = ({ data }) => {
  const [isLessThanEqual767] = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <GridItem {...leftColProps}>
        <Swiper {...swiperProps}>
          {data.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Link as={RouteLink} to={`movie/${movie.id}`}>
                  <Flex {...bgCoverProps} sx={{ backgroundImage: `${bgGradient} url(${baseImgUrlOriginal}/${movie.backdrop_path})` }}>
                    <Flex {...contentContainerProps}>
                      {!isLessThanEqual767 && <Image src={`${baseImgUrlDefault}/${movie.poster_path}`} {...imageProps} />}
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
          })}
        </Swiper>
      </GridItem>

      <GridItem {...rightColProps}>
        {data.slice(0, 3).map((movie) => {
          return (
            <Link as={RouteLink} to={`movie/${movie.id}`} key={movie.id} _focus={{ boxShadow: "none" }}>
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
const baseImgUrlDefault = ` ${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}`;

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

const imageProps = {
  maxW: "120px",
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  effect: "fade",
  modules: [Autoplay, EffectFade],
};

const leftColProps = {
  colSpan: {
    base: 12,
    lg: 8,
  },
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
