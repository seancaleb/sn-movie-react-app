import { BrowserRouter, Navigate, Route, Routes as MyRoutes } from "react-router-dom";
import { Footer, Header, MovieCategory, ScrollToTop } from "../components";
import Cast from "../components/cast/Cast";
import Movie from "../components/movie/Movie";
import MoviesDataView from "../components/movies/MoviesDataView";
import PeopleDataView from "../components/people/PeopleDataView";
import { popularArgs, topratedArgs, upcomingArgs } from "../data";
import { useGetMoviesQuery, useGetPopularPeopleQuery } from "../features/api/moviesSlice";
import Home from "../pages/Home";

const Routes = () => {
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
              <MovieCategory
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
              <MovieCategory
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
              <MovieCategory
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
              <MovieCategory
                title="Popular Celebrities"
                pagination
                fn={useGetPopularPeopleQuery}
                component={(data, isFetching) => (
                  <PeopleDataView data={data.results} isFetching={isFetching} />
                )}
              />
            }
          />
          <Route exact path="/cast/:castId" element={<Cast />} />
          <Route exact path="/movie/:movieId" element={<Movie />} />
          <Route exact path="/movie" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </MyRoutes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
