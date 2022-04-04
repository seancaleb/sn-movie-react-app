import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Section, MainContainer, Main } from "..";
import { useGetDiscoverMovieByGenreQuery } from "../../features/api/moviesSlice";
import { selectGenre } from "../../features/genres/genresSlice";
import MoviesDataView from "../movies/MoviesDataView";
import QueryList from "../QueryList";

const Genre = () => {
  const { genreId } = useParams();
  const [genres] = useSelector((state) => selectGenre(state, Number(genreId)));

  console.log(genres.name);

  return (
    <Main pt={{ base: "20px", lg: "60px" }}>
      <MainContainer>
        <Section>
          <QueryList
            title={`${genres.name} Movies`}
            pagination
            fn={useGetDiscoverMovieByGenreQuery}
            component={(data, isFetching) => (
              <MoviesDataView data={data.results} isFetching={isFetching} />
            )}
            fnArgs={{ genreId }}
          />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default Genre;
