import { useBoolean, Flex, Box, Text, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { loadImage } from "../../utils";

const PersonResult = ({ item }) => {
  const [flag, setFlag] = useBoolean();
  const srcImage = item.profile_path ? `${imgBaseUrl}/${item.profile_path}` : placeholderPoster;

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
        <Text fontSize="16px">{item.name}</Text>
        <Text fontSize="14px" color="whiteAlpha.600">
          {item.known_for_department ? item.known_for_department : "Not specified."}
        </Text>
      </Flex>
    </Flex>
  );
};

export default PersonResult;

const imgBaseUrl = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}`;
const placeholderPoster = "https://via.placeholder.com/400/000/fff?text=Image+Unavailable";

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
