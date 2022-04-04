import { Main, MainContainer, Section } from ".";
import QueryList from "./QueryList";

const MovieCategory = ({ title, fnArgs, pagination, fn, component }) => {
  return (
    <Main pt={{ lg: "60px" }}>
      <MainContainer>
        <Section>
          <QueryList {...{ title, fnArgs, pagination, fn, component }} />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default MovieCategory;
