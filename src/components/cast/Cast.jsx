import { GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Main, MainContainer, Section } from "../";
import { useGetCastMovieCreditsQuery } from "../../features/api/moviesSlice";
import MoviesDataView from "../movies/MoviesDataView";
import QueryList from "../QueryList";
import CastDetails from "./CastDetails";

const Cast = () => {
  const { castId } = useParams();

  return (
    <Main pt="none">
      <MainContainer>
        <Section>
          <CastDetails castId={castId} />
        </Section>
        <Section>
          <GridItem colSpan={12} maxW="1080px" m="auto" w="100%">
            <QueryList
              title="Movie Credits"
              fnArgs={{ castId }}
              fn={useGetCastMovieCreditsQuery}
              limit={10}
              component={(data, isFetching) => (
                <MoviesDataView data={data.results} isFetching={isFetching} />
              )}
            />
          </GridItem>
        </Section>
      </MainContainer>
    </Main>
  );
};

export default Cast;
