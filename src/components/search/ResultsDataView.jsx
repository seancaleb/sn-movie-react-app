import { Flex, Link, Text } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useRef } from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import MovieResult from "./MovieResult";
import PersonResult from "./PersonResult";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import { useDispatch } from "react-redux";
import { updateQuery } from "../../features/query/querySlice";

const ResultsDataView = ({ data, category, query, setIsActive, setQuery }) => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useOutsideAlerter(wrapperRef, () => setIsActive.off());

  const handleClick = () => {
    dispatch(updateQuery(query));
    setTimeout(() => setQuery(null), 600);
    navigate(`search/${category.value}/${query}?page=1`);
  };

  return (
    <Flex flexDir="column" h="100%" justifyContent="space-between" ref={wrapperRef}>
      <Flex flexDir="column" h="100%" justifyContent="space-between" maxH="50vh" overflowY="scroll">
        {data.results.slice(0, 5).map((item) => {
          return (
            <Link
              key={item.id || nanoid()}
              as={RouteLink}
              to={category.value === "movie" ? `movie/${item.id}` : `cast/${item.id}`}
              _hover={{ bg: "brand.dark.secondary" }}
              onClick={() => setTimeout(() => setQuery(null), 600)}
            >
              {category.value === "movie" ? (
                <MovieResult item={item} />
              ) : (
                <PersonResult item={item} />
              )}
            </Link>
          );
        })}
      </Flex>
      {data.results.length !== 1 && (
        <Link {...linkResultsProps} onClick={handleClick}>
          <Text py="10px">View all results</Text>
        </Link>
      )}
    </Flex>
  );
};

export default ResultsDataView;

const linkResultsProps = {
  pos: "sticky",
  bottom: 0,
  display: "block",
  w: "100%",
  textAlign: "center",
  bgGradient: "linear-gradient(to-r, brand.secondary, brand.primary)",
  _hover: {
    textDecor: "none",
  },
  fontSize: "16px",
};
