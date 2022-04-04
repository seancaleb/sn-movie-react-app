import { Link, Flex, Grid, GridItem, Image, Skeleton, Text } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { loadImage } from "../../utils";

const PeopleDataView = ({ data, isFetching = false }) => {
  const [people, setPeople] = useState(data);

  useEffect(() => {
    const initialLoadImages = async () => {
      const promises = data.map(async (person) => {
        const posterSrc = `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${person.profile_path}`;
        const src = person.profile_path ? posterSrc : placeholder;

        const loadedImage = await loadImage(src).then(() => src);
        return { ...person, loadedSrc: loadedImage };
      });

      const resolvedPeople = await Promise.all(promises);
      setPeople(resolvedPeople);
    };

    !isFetching && initialLoadImages();
  }, [data, isFetching]);

  return (
    <Grid {...gridProps}>
      {people &&
        people.map((person) => {
          return (
            <GridItem key={person.id || nanoid()} {...gridItemProps}>
              <Link as={RouteLink} to={`/cast/${person.id}`}>
                <Skeleton {...skeletonProps} isLoaded={!isFetching && person.loadedSrc}>
                  <Image src={person.loadedSrc} {...imageProps} />
                  <Flex {...dataWrapperProps}>
                    <Text {...textProps}>{person.name}</Text>
                    <Text fontSize="14px" color="whiteAlpha.600">
                      Known for: <span>{person.known_for_department}</span>
                    </Text>
                  </Flex>
                </Skeleton>
              </Link>
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default PeopleDataView;

const placeholder = "https://via.placeholder.com/250/000?text=Image+Unavailable";

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
  },
};
