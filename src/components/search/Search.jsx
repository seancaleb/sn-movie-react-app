import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { inputProps } from "../../theme/style";
import MenuCategory from "./MenuCategory";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useGetSearchByCategoryQuery } from "../../features/api/moviesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Link as RouteLink } from "react-router-dom";

const Search = () => {
  const [category, setCategory] = useState({ title: "Movies", value: "movie" });
  const [query, setQuery] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isSuccess, isFetching, isError, error } = useGetSearchByCategoryQuery(
    {
      category: category.value,
      query,
    },
    { skip: !query || !query.trim() ? true : false }
  );

  useEffect(() => {
    console.log(query, data);
    if (!query) {
      onClose();
    } else if (query && !isOpen) {
      onOpen();
    }
  }, [query, onClose, onOpen, isOpen, data]);

  return (
    <Flex w="100%">
      <InputGroup {...inputGroupProps}>
        <MenuCategory {...{ category, setCategory }} />

        <InputRightElement {...inputRightElementProps} />
        <Box {...inputContainerProps}>
          <Input
            value={query || ""}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a keyword..."
            {...inputProps}
          />
          <AnimatePresence>
            {isOpen && (
              <MotionBox {...motionBoxProps}>
                <Flex flexDir="column" h="100%" justifyContent="space-between">
                  <Flex
                    flexDir="column"
                    h="100%"
                    justifyContent="space-between"
                    maxH="500px"
                    overflowY="scroll"
                  >
                    {data &&
                      data.results.slice(0, 6).map((item) => {
                        return (
                          <Link
                            key={item.id || nanoid()}
                            as={RouteLink}
                            to={`movie/${item.id}`}
                            onClick={() => {
                              setTimeout(() => setQuery(null), 600);
                            }}
                          >
                            <Flex
                              flex={1}
                              px="15px"
                              py="20px"
                              borderBottom="1px solid"
                              borderBottomColor="whiteAlpha.100"
                              gap="20px"
                            >
                              <Box maxW="80px">
                                <Image
                                  src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${
                                    item.poster_path
                                  }`}
                                  w="100%"
                                  boxShadow="dark-lg"
                                />
                              </Box>
                              <Flex flexDir="column" gap="5px">
                                <Text fontSize="16px">{item.original_title}</Text>
                                <Text fontSize="14px" color="whiteAlpha.600">
                                  {item.release_date}
                                </Text>
                                <Text fontSize="12px" color="whiteAlpha.600">
                                  {item.overview.substr(0, 150)}...
                                </Text>
                              </Flex>
                            </Flex>
                          </Link>
                        );
                      })}
                  </Flex>
                  <Link
                    pos="sticky"
                    bottom={0}
                    display="block"
                    w="100%"
                    textAlign="center"
                    bgGradient="linear-gradient(to-r, brand.secondary, brand.primary)"
                  >
                    <Text py="10px">View all results</Text>
                  </Link>
                </Flex>
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </InputGroup>
    </Flex>
  );
};

export default Search;

const MotionBox = motion(Box);

const boxVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 50,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputGroupProps = {
  maxW: "750px",
  display: "flex",
};

const searchIconProps = {
  color: "brand.primary",
};

const inputRightElementProps = {
  pointerEvents: "none",
  children: <SearchIcon {...searchIconProps} />,
};

const inputContainerProps = {
  w: "100%",
  pos: "relative",
};

const motionBoxProps = {
  variants: boxVariant,
  animate: "visible",
  initial: "hidden",
  exit: "exit",
  pos: "absolute",
  top: 0,
  left: 0,
  w: "100%",
  h: "auto",
  transform: "translateY(50px)",
  bg: "brand.dark.primary",
  boxShadow: "dark-lg",
  zIndex: 99,
  borderRadius: "3px",
  maxH: "500px",
};
