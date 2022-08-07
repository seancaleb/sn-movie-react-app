import { BrowserRouter, Navigate, Route, Routes as MyRoutes } from "react-router-dom";
import { Footer, Header, ScrollToTop, Preloader } from "../components";
import { popularArgs, topratedArgs, upcomingArgs } from "../data";
import {
  useGetMoviesQuery,
  useGetPopularPeopleQuery,
  useGetSearchByCategoryQuery,
} from "../features/api/moviesSlice";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { selectQuery } from "../features/query/querySlice";
import { lazy, Suspense } from "react";

const MoviesDataView = lazy(() => import("../components/movies/MoviesDataView"));
const PeopleDataView = lazy(() => import("../components/people/PeopleDataView"));
const BaseTemplate = lazy(() => import("../components/BaseTemplate"));
const Cast = lazy(() => import("../components/cast/Cast"));
const Genre = lazy(() => import("../components/genre/Genre"));
const Movie = lazy(() => import("../components/movie/Movie"));

const Routes = () => {
  const { value } = useSelector(selectQuery);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Suspense fallback={<Preloader />}>
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
        </Suspense>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
