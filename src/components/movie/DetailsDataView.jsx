import { GridItem, Container, Box, Flex, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { Detail, VoteCount } from "../";
import MovieCasts from "./MovieCasts";

const DetailsDataView = ({ data }) => {
  const [isLessThanEqual767] = useMediaQuery("(max-width: 767px)");

  const bgImage = data.backdrop_path ? `${bgGradient} url(${baseImgUrlOriginal}/${data.backdrop_path})` : placeholderBackdrop;
  const srcImage = data.poster_path ? `${baseImgUrlDefault}/${data.poster_path}` : placeholderPoster;
  const countries = data.production_countries[0] ? data.production_countries[0].name : null;

  return (
    <GridItem sx={{ backgroundImage: bgImage }} {...bgContainerProps}>
      <Container {...containerProps}>
        <Box {...dataWrapperProps}>
          <Flex {...flexDataContainerProps}>
            {!isLessThanEqual767 && <Image src={srcImage} {...imageProps} />}
            <Flex flexDir="column" gap="20px" flex={{ md: 1 }}>
              <Heading color="white">{data.original_title}</Heading>
              <Flex gap="20px">
                <VoteCount vote_average={data.vote_average} />
                <Text {...textProps}>{data.status}</Text>
                <Text {...textProps}>{data.runtime} minutes</Text>
              </Flex>
              <Flex flexDir="column" gap="5px">
                <Heading {...headingSubProps}>Overview</Heading>
                <Text {...textProps} color="whiteAlpha.800">
                  {data.overview || "Not specified"}
                </Text>
              </Flex>
              <Flex flexDir={{ base: "column", sm: "row" }} gap="20px">
                {/* DETAIL FIRST COLUMN  */}
                <Flex {...flexDetailColProps}>
                  <Detail title="Release date" value={data.release_date || "Not specified"} />
                  <Detail title="Movie duration" value={`${data.runtime} minutes`} />
                  <Detail title="Genres" value={data.genres} />
                </Flex>
                {/* DETAIL SECOND COLUMN  */}
                <Flex {...flexDetailColProps}>
                  <Detail title="Country" value={countries} />
                  <Detail title="Casts" component={<MovieCasts movieId={data.id} />} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </GridItem>
  );
};

export default DetailsDataView;

const bgGradient =
  "linear-gradient(rgba(24,24,24,1) 0%, rgba(24,24,24,1) 2%, rgba(24,24,24,.75) 25%,   rgba(24, 24, 24, 1) 98%, rgba(24, 24, 24, 1) 100%),";
const baseImgUrlOriginal = ` ${import.meta.env.VITE_TMDB_IMAGE_BASE_URL_ORIGINAL}`;
const baseImgUrlDefault = ` ${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}`;
const placeholderBackdrop = "https://via.placeholder.com/400/111/111?text=Poster+Unavailable";
const placeholderPoster = "https://via.placeholder.com/400/111/fff?text=Poster+Unavailable";

const bgContainerProps = {
  colSpan: 12,
  minH: {
    base: "550px",
    lg: "600px",
  },
  bgPos: "top",
  bgSize: "cover",
  bgRepeat: "no-repeat",
};

const containerProps = {
  maxW: "1560px",
  h: "100%",
};

const dataWrapperProps = {
  display: "flex",
  h: "100%",
};

const flexDataContainerProps = {
  gap: {
    base: "30px",
    lg: "60px",
  },
  flexDir: {
    base: "column",
    md: "row",
  },
  w: "100%",
  maxW: "1080px",
  m: "auto",
  alignItems: "flex-start",
  justifyContent: {
    base: "flex-end",
    md: "flex-start",
  },
  h: { base: "100%", md: "auto" },
  pt: "60px",
  pb: "20px",
};

const imageProps = {
  maxW: "240px",
  boxShadow: "dark-lg",
  loading: "lazy",
};

const textProps = {
  fontSize: "14px",
};

const flexDetailColProps = {
  flexDir: "column",
  gap: "5px",
  flex: 1,
};

const headingSubProps = {
  as: "h5",
  fontSize: "14px",
  color: "white",
  fontWeight: "medium",
};
