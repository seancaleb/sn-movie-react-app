import { Box, Image, Flex, Text, useBoolean } from "@chakra-ui/react";
import { loadImage } from "../../utils";
import { useEffect } from "react";

const MovieResult = ({ item }) => {
  const [flag, setFlag] = useBoolean();
  const srcImage = item.poster_path ? `${imgBaseUrl}/${item.poster_path}` : placeholderPoster;

  useEffect(() => {
    const asyncLoadImage = async () => {
      await loadImage(srcImage);
    };

    asyncLoadImage();
    setFlag.on();
  }, []);

  return (
    <Flex {...dataWrapper}>
      <Box maxW="80px" w="100%">
        {flag && <Image src={srcImage} {...imageProps} />}
      </Box>
      <Flex flexDir="column" gap="5px">
        <Text fontSize="16px">{item.original_title}</Text>
        <Text fontSize="14px" color="whiteAlpha.600">
          {item.release_date ? item.release_date : "Date not specified."}
        </Text>
        <Text fontSize="12px" color="whiteAlpha.600">
          {item.overview ? `${item.overview.substr(0, 150)}...` : "Not specifed."}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MovieResult;

const imgBaseUrl = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}`;
const placeholderPoster = "https://via.placeholder.com/400/000/fff?text=Poster+Unavailable";

const imageProps = {
  w: "100%",
  boxShadow: "dark-lg",
};

const dataWrapper = {
  flex: 1,
  px: "15px",
  py: "20px",
  borderBottom: "1px solid",
  borderBottomColor: "whiteAlpha.100",
  gap: "20px",
};
