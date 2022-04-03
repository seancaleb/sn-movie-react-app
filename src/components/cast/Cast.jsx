import { GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Main, MainContainer, Section } from "../";
import { useGetCastMovieCreditsQuery } from "../../features/api/moviesSlice";
import MoviesList from "../movies/MoviesList";
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
            <MoviesList title="Other" castId={castId} fn={useGetCastMovieCreditsQuery} limit={10} />
          </GridItem>
        </Section>
      </MainContainer>
    </Main>
  );
};

export default Cast;
