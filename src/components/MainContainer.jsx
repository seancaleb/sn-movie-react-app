import { Container } from "@chakra-ui/react";

const MainContainer = (props) => {
  return <Container {...mainContainerProps} {...props} />;
};

const mainContainerProps = {
  maxW: "1560px",
};

export default MainContainer;
