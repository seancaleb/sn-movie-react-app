import { useParams } from "react-router-dom";
import { Main, Section } from "../";
import { useGetMoviesBaseFromMovieQuery } from "../../features/api/moviesSlice";
import { MainContainer } from "../";
import QueryList from "../QueryList";
import MovieDetails from "./MovieDetails";
import MoviesDataView from "../movies/MoviesDataView";

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
          <QueryList
            title="Recommended Movies"
            fn={useGetMoviesBaseFromMovieQuery}
            fnArgs={recommendationsArgs}
            limit={7}
            component={(data, isFetching) => (
              <MoviesDataView data={data.results} isFetching={isFetching} />
            )}
          />
        </Section>
        <Section>
          <QueryList
            title="Similar Movies"
            fn={useGetMoviesBaseFromMovieQuery}
            fnArgs={similarArgs}
            limit={7}
            component={(data, isFetching) => (
              <MoviesDataView data={data.results} isFetching={isFetching} />
            )}
          />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default Movie;
