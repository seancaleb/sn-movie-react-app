import { Main, MainContainer, Section } from ".";
import MoviesList from "./movies/MoviesList";

const MovieCategory = ({ title, category, pagination, fn }) => {
  return (
    <Main pt={{ base: "20px", lg: "60px" }}>
      <MainContainer>
        <Section>
          <MoviesList {...{ title, category, pagination, fn }} />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default MovieCategory;
