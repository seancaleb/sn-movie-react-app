import { BrowserRouter, Navigate, Route, Routes as MyRoutes } from "react-router-dom";
import { Footer, Header, BaseTemplate, ScrollToTop } from "../components";
import Cast from "../components/cast/Cast";
import Genre from "../components/genre/Genre";
import Movie from "../components/movie/Movie";
import MoviesDataView from "../components/movies/MoviesDataView";
import PeopleDataView from "../components/people/PeopleDataView";
import { popularArgs, topratedArgs, upcomingArgs } from "../data";
import {
  useGetMoviesQuery,
  useGetPopularPeopleQuery,
  useGetSearchByCategoryQuery,
} from "../features/api/moviesSlice";
import Home from "../pages/Home";

import { useSelector } from "react-redux";
import { selectQuery } from "../features/query/querySlice";

const Routes = () => {
  const { value } = useSelector(selectQuery);

  console.log(value);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <MyRoutes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/movie/popular"
            element={
              <BaseTemplate
                title="Popular Movies"
                fnArgs={popularArgs}
                pagination
                fn={useGetMoviesQuery}
                component={(data, isFetching) => (
                  <MoviesDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route
            exact
            path="/movie/top_rated"
            element={
              <BaseTemplate
                title="Top Rated Movies"
                fnArgs={topratedArgs}
                pagination
                fn={useGetMoviesQuery}
                component={(data, isFetching) => (
                  <MoviesDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route
            exact
            path="/movie/upcoming"
            element={
              <BaseTemplate
                title="Upcoming Movies"
                fnArgs={upcomingArgs}
                pagination
                fn={useGetMoviesQuery}
                component={(data, isFetching) => (
                  <MoviesDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route
            exact
            path="/person/popular"
            element={
              <BaseTemplate
                title="Popular Celebrities"
                pagination
                fn={useGetPopularPeopleQuery}
                component={(data, isFetching) => (
                  <PeopleDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route exact path="/discover/movie/:genreId" element={<Genre />} />
          <Route exact path="/cast/:castId" element={<Cast />} />
          <Route exact path="/movie/:movieId" element={<Movie />} />
          <Route exact path="/movie" element={<Navigate to="/" replace />} />
          <Route
            exact
            path={`search/movie/${value}`}
            element={
              <BaseTemplate
                title={`Search results for '${value}'`}
                pagination
                fnArgs={{ category: "movie", query: value }}
                fn={useGetSearchByCategoryQuery}
                component={(data, isFetching) => (
                  <MoviesDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route
            exact
            path={`search/person/${value}`}
            element={
              <BaseTemplate
                title={`Search results for '${value}'`}
                pagination
                fnArgs={{ category: "person", query: value }}
                fn={useGetSearchByCategoryQuery}
                component={(data, isFetching) => (
                  <PeopleDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </MyRoutes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
