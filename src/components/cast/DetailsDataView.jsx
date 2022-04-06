import { Box, Container, Flex, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Detail, ImdbIcon } from "../";
import { loadImage } from "../../utils";
import { motion } from "framer-motion";

const DetailsDataView = ({ data }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const src = data.img ? `${baseUrl}/${data.img}` : imgPlaceholder;

  const age = data.age ? `${data.age} years old` : null;

  useEffect(() => {
    const initialLoadImage = async () => setLoadedSrc(await loadImage(src).then(() => src));
    initialLoadImage();
  }, [src]);

  return (
    <>
      {loadedSrc ? (
        <MotionGridItem colSpan={12} variants={gridItem} initial="hidden" animate="visible">
          <Container {...containerProps}>
            <Flex {...mainWrapperProps}>
              <Box alignSelf="center">
                <Image src={loadedSrc} {...imageProps} />
              </Box>

              <Flex {...infoWrapperProps}>
                <Flex {...titleWrapperProps}>
                  <Heading color="white">{data.name}</Heading>
                  <Link href={`https://www.imdb.com/name/${data.imdb_id}`} {...linkProps}>
                    <ImdbIcon {...iconProps} />
                    <Text {...iconTextProps}>View on IMDB</Text>
                  </Link>
                </Flex>

                <Detail title="Age" value={age} />
                <Detail title="Birthday" value={data.birthday} />
                <Detail title="Birth Place" value={data.birthplace} />
              </Flex>
            </Flex>

            <Flex {...bioWrapperProps}>
              <Heading {...headingProps}>Biography</Heading>
              <hr style={{ borderColor: "rgba(255,255,255, 0.1)" }} />
              <Text {...bioProps}>{data.bio || "Not specified."}</Text>
            </Flex>
          </Container>
        </MotionGridItem>
      ) : (
        <GridItem colSpan={12} minH={{ base: "550px", lg: "600px" }} />
      )}
    </>
  );
};

export default DetailsDataView;

const baseUrl = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL_ORIGINAL}`;
const imgPlaceholder = "https://via.placeholder.com/400/000/fff?text=Image+Unavailable";

const gridItem = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const MotionGridItem = motion(GridItem);

const containerProps = {
  maxW: "1080px",
  m: "auto",
  p: "unset",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  pt: { base: "60px", md: "100px" },
};

const imageProps = {
  boxShadow: "dark-lg",
  maxW: "200px",
  w: "200px",
  h: "200px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "0% 25%",
};

const linkProps = {
  isExternal: true,
  _focus: { boxShadow: "none" },
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const iconProps = {
  color: "yellow.400",
  boxSize: "30px",
};

const iconTextProps = {
  textTransform: "uppercase",
  fontSize: "10px",
  color: "whiteAlpha.800",
  fontWeight: "medium",
  _hover: { color: "yellow.400" },
};

const bioProps = {
  color: "whiteAlpha.800",
  fontSize: "14px",
  whiteSpace: "pre-wrap",
};

const headingProps = {
  color: "white",
  fontSize: "24px",
  fontWeight: "medium",
};

const mainWrapperProps = {
  flexDir: { base: "column", md: "row" },
  gap: { base: "30px", lg: "60px" },
  alignItems: { base: "flex-start", md: "center" },
};

const infoWrapperProps = {
  flexDir: "column",
  gap: "10px",
  w: "100%",
  alignItems: { base: "center", md: "flex-start" },
};

const titleWrapperProps = {
  flexDir: { base: "column", md: "row" },
  gap: { base: "10px", md: "20px" },
  alignItems: "center",
};

const bioWrapperProps = {
  flexDir: "column",
  mt: "60px",
  gap: "20px",
};
