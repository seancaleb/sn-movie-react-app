import { Main, MainContainer, Section } from ".";
import QueryList from "./QueryList";

const BaseTemplate = ({ title, fnArgs, pagination, fn, component }) => {
  return (
    <Main pt={{ base: "20px", lg: "60px" }}>
      <MainContainer>
        <Section>
          <QueryList {...{ title, fnArgs, pagination, fn, component }} />
        </Section>
      </MainContainer>
    </Main>
  );
};

export default BaseTemplate;
