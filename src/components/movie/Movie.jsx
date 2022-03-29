import { useParams } from "react-router-dom";
import { Main, Section } from "../";
import { useGetMoviesBaseFromMovieQuery } from "../../features/api/moviesSlice";
import { MainContainer } from "../";
import MoviesList from "../movies/MoviesList";
import MovieDetails from "./MovieDetails";

const Movie = () => {
  const { movieId } = useParams();

  return (
    <Main pt={0}>
      <Section>
        <MovieDetails />
      </Section>
      <MainContainer>
        <Section>
          <MoviesList title="Recommended" category="recommendations" movieId={movieId} fn={useGetMoviesBaseFromMovieQuery} limit={7} />
        </Section>
        <Section>
          <MoviesList title="Similar" category="similar" movieId={movieId} fn={useGetMoviesBaseFromMovieQuery} limit={7} />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default Movie;
