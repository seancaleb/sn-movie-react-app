import { Main, MainContainer, Section, QueryList } from "../../components";
import MoviesDataView from "../../components/movies/MoviesDataView";
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
          <QueryList
            title="Popular"
            fn={useGetMoviesQuery}
            fnArgs={popularArgs}
            limit={14}
            component={(data, isFetching) => (
              <MoviesDataView data={data.results} isFetching={isFetching} />
            )}
          />
        </Section>
        <Section>
          <QueryList
            title="Top Rated"
            fn={useGetMoviesQuery}
            fnArgs={topratedArgs}
            limit={14}
            component={(data, isFetching) => (
              <MoviesDataView data={data.results} isFetching={isFetching} />
            )}
          />
        </Section>
        <Section>
          <QueryList
            title="Upcoming"
            fn={useGetMoviesQuery}
            fnArgs={upcomingArgs}
            limit={14}
            component={(data, isFetching) => (
              <MoviesDataView data={data.results} isFetching={isFetching} />
            )}
          />
        </Section>
      </MainContainer>
    </Main>
  );
};
export default Home;
