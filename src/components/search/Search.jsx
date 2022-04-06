import { Box, Flex, Input, InputGroup, useBoolean } from "@chakra-ui/react";
import { inputProps } from "../../theme/style";
import MenuCategory from "./MenuCategory";
import { useEffect, useRef, useState } from "react";
import { useGetSearchByCategoryQuery } from "../../features/api/moviesSlice";

import RenderResults from "./RenderResults";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../";
import { AnimatePresence, motion } from "framer-motion";

const Search = () => {
  const [category, setCategory] = useState({ title: "Movies", value: "movie" });
  const [query, setQuery] = useState(null);
  const [isActive, setIsActive] = useBoolean(true);
  const inputRef = useRef(null);

  const { data, isSuccess, isFetching, isError, error } = useGetSearchByCategoryQuery(
    {
      category: category.value,
      query,
    },
    { skip: !query || !query.trim() ? true : false }
  );

  useEffect(() => {
    inputRef.current.focus();
  }, [category]);

  useEffect(() => {
    return () => setCategory(null);
  }, []);

  useEffect(() => {
    !isActive && setIsActive.on();
  }, [query]);

  return (
    <Flex w="100%" zIndex={99}>
      <InputGroup {...inputGroupProps}>
        <MenuCategory {...{ category, setCategory }} />

        <Box {...inputContainerProps}>
          <Input
            ref={inputRef}
            value={query || ""}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsActive.on()}
            placeholder="Search a keyword..."
            {...inputProps}
          />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AnimatePresence>
              {query && query.trim() && isActive && (
                <MotionBox {...motionBoxProps}>
                  <RenderResults
                    {...{
                      data,
                      error,
                      isFetching,
                      isSuccess,
                      isError,
                      category,
                      setIsActive,
                      setQuery,
                      query,
                    }}
                  />
                </MotionBox>
              )}
            </AnimatePresence>
          </ErrorBoundary>
        </Box>
      </InputGroup>
    </Flex>
  );
};

export default Search;

const inputGroupProps = {
  maxW: "750px",
  display: "flex",
  pos: "relative",
};

const inputContainerProps = {
  w: "100%",
};

//////////////////////////////////////

const MotionBox = motion(Box);

const boxVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 50,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: 70,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
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
  maxH: "50vh",
};
