import { BrowserRouter, Navigate, Route, Routes as MyRoutes } from "react-router-dom";
import { Footer, Header, MovieCategory, ScrollToTop } from "../components";
import Cast from "../components/cast/Cast";
import Movie from "../components/movie/Movie";
import { popularArgs, topratedArgs, upcomingArgs } from "../data";
import { useGetMoviesQuery } from "../features/api/moviesSlice";
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
                title="Popular"
                fnArgs={popularArgs}
                pagination
                fn={useGetMoviesQuery}
              />
            }
          />
          <Route
            exact
            path="/movie/top_rated"
            element={
              <MovieCategory
                title="Top Rated"
                fnArgs={topratedArgs}
                pagination
                fn={useGetMoviesQuery}
              />
            }
          />
          <Route
            exact
            path="/movie/upcoming"
            element={
              <MovieCategory
                title="Upcoming"
                fnArgs={upcomingArgs}
                pagination
                fn={useGetMoviesQuery}
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
