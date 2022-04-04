import { useParams } from "react-router-dom";
import { Main, Section } from "../";
import { useGetMoviesBaseFromMovieQuery } from "../../features/api/moviesSlice";
import { MainContainer } from "../";
import MoviesList from "../movies/MoviesList";
import MovieDetails from "./MovieDetails";

const Movie = () => {
  const { movieId } = useParams();

  const recommendationsArgs = {
    category: "recommendations",
    movieId,
  };

  const similarArgs = {
    category: "similar",
    movieId,
  };

  return (
    <Main pt={0}>
      <Section>
        <MovieDetails />
      </Section>
      <MainContainer>
        <Section>
          <MoviesList
            title="Recommended"
            fn={useGetMoviesBaseFromMovieQuery}
            fnArgs={recommendationsArgs}
            limit={7}
          />
        </Section>
        <Section>
          <MoviesList
            title="Similar"
            fn={useGetMoviesBaseFromMovieQuery}
            fnArgs={similarArgs}
            limit={7}
          />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default Movie;
