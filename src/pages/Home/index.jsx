import { Main, MainContainer, Section } from "../../components";
import MoviesList from "../../components/movies/MoviesList";
import { popularArgs, topratedArgs, upcomingArgs } from "../../data";
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
          <MoviesList title="Popular" fn={useGetMoviesQuery} fnArgs={popularArgs} limit={14} />
        </Section>
        <Section>
          <MoviesList title="Top Rated" fn={useGetMoviesQuery} fnArgs={topratedArgs} limit={14} />
        </Section>
        <Section>
          <MoviesList title="Upcoming" fn={useGetMoviesQuery} fnArgs={upcomingArgs} limit={14} />
        </Section>
      </MainContainer>
    </Main>
  );
};
export default Home;
