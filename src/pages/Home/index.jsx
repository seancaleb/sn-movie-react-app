import { Main, MainContainer, Section } from "../../components";
import MoviesList from "../../components/movies/MoviesList";
import { useGetMoviesQuery } from "../../features/api/moviesSlice";
import Hero from "./Hero";

const Home = () => {
  return (
    <Main>
      <MainContainer>
        <Section>
          <Hero />
        </Section>
        <Section>
          <MoviesList title="Popular" category="popular" limit={14} fn={useGetMoviesQuery} />
        </Section>
        <Section>
          <MoviesList title="Top Rated" category="top_rated" limit={14} fn={useGetMoviesQuery} />
        </Section>
        <Section>
          <MoviesList title="Upcoming" category="upcoming" limit={14} fn={useGetMoviesQuery} />
        </Section>
      </MainContainer>
    </Main>
  );
};
export default Home;
