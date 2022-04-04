import { Main, MainContainer, Section } from ".";
import MoviesList from "./movies/MoviesList";

const MovieCategory = ({ title, fnArgs, pagination, fn }) => {
  return (
    <Main pt={{ lg: "60px" }}>
      <MainContainer>
        <Section>
          <MoviesList {...{ title, fnArgs, pagination, fn }} />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default MovieCategory;
