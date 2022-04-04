import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { format } from "date-fns";

const baseUrl = `${import.meta.env.VITE_TMDB_API_BASE_URL}`;
const key = `${import.meta.env.VITE_TMDB_API_KEY}`;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   headers.set(
    //     "Access-Control-Allow-Methods",
    //     "GET, POST, PUT,PATCH, DELETE, OPTIONS"
    //   );
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `trending/movie/day?api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let { results: movies } = response;
        movies = movies.map((movie) => ({
          id: movie.id,
          backdrop_path: movie.backdrop_path,
          original_title: movie.original_title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          release_date: new Date(movie.release_date).getFullYear(),
        }));

        return movies.slice(0, 10);
      },
    }),
    getMovies: builder.query({
      query: ({ category, limit, page = 0 }) => `movie/${category}?page=${page}&api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let { ...responseObj } = response;

        let { results } = responseObj;

        results = results.map((movie) => ({
          id: movie.id,
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          release_date: new Date(movie.release_date).getFullYear(),
        }));

        responseObj = { ...responseObj, results };

        if (arg.limit) {
          results = results.slice(0, arg.limit);
          responseObj = { ...responseObj, results };
          return responseObj;
        } else return responseObj;
      },
    }),
    getMovieDetails: builder.query({
      query: ({ movieId }) => `movie/${movieId}?api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let { ...responseObj } = response;

        let { genres } = responseObj;
        let { release_date } = responseObj;

        release_date = new Date(release_date).getFullYear();
        genres = genres.map((genre) => genre.name);

        responseObj = { ...responseObj, genres, release_date };
        return responseObj;
      },
    }),
    getMovieCasts: builder.query({
      query: ({ movieId }) => `movie/${movieId}/credits?api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let { ...responseObj } = response;

        let { cast } = responseObj;

        cast = cast.filter((person) => person.known_for_department === "Acting");

        cast = cast.map((person) => ({
          id: person.id,
          name: person.original_name,
        }));

        if (cast.length >= 6) return cast.slice(0, 6);
        else return cast;
      },
    }),
    getMoviesBaseFromMovie: builder.query({
      query: ({ movieId, category, limit }) => `movie/${movieId}/${category}?api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let { ...responseObj } = response;

        let { results } = responseObj;

        results = results.map((movie) => ({
          id: movie.id,
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          vote_average: Number(movie.vote_average.toFixed(1)),
          release_date: new Date(movie.release_date).getFullYear(),
        }));

        responseObj = { ...responseObj, results };

        if (arg.limit) {
          results = results.slice(0, arg.limit);
          responseObj = { ...responseObj, results };
          return responseObj;
        } else return responseObj;
      },
    }),
    getCastDetails: builder.query({
      query: ({ castId }) => `person/${castId}?api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let responseObj = { ...response };

        const { deathday, birthday } = responseObj;

        const year = new Date().getFullYear();
        const deathYear = new Date(deathday).getFullYear();
        const birthYear = new Date(birthday).getFullYear();

        const age = deathday ? deathYear - birthYear : year - birthYear;

        return {
          name: responseObj.name,
          bio: responseObj.biography,
          birthday: format(new Date(birthday), "MMMM d, y"),
          birthplace: responseObj.place_of_birth,
          img: responseObj.profile_path,
          imdb_id: responseObj.imdb_id,
          age,
        };
      },
    }),
    getCastMovieCredits: builder.query({
      query: ({ castId }) => `person/${castId}/movie_credits?api_key=${key}`,
      transformResponse: (response, meta, arg) => {
        let responseObj = { ...response };

        let { cast } = responseObj;

        cast = cast
          .map((movie) => {
            return {
              id: movie.id,
              original_title: movie.original_title,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average,
              release_date: new Date(movie.release_date).getFullYear(),
            };
          })
          .sort((a, b) => {
            // return b.release_date - a.release_date;
            // RETURN ONLY THOSE WITH POSTERS
            return a.poster_path && b.poster_path ? b.release_date - a.release_date : null;
          });

        if (cast.length >= 10) return { results: cast.slice(0, 10) };
        else return { results: cast };
      },
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieCastsQuery,
  useGetMoviesBaseFromMovieQuery,
  useGetCastDetailsQuery,
  useGetCastMovieCreditsQuery,
} = moviesApi;
