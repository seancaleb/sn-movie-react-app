import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box {...footerProps}>
      <Container {...footerContainerProps}>
        <Flex {...flexProps}>
          <Text {...textProps}>
            This is just a demo movie application that uses the The Movie Database API. You can learn more about the API documentation{" "}
            <Link {...linkProps}>here</Link>.
          </Text>
          <Text {...textProps}>Made by Sean Caleb - &copy; 2022</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

const footerProps = {
  as: "footer",
  w: "100%",
  bg: "brand.dark.primary",
};

const footerContainerProps = {
  maxW: "1560px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  py: "60px",
  borderTop: "2px solid",
  borderTopColor: "brand.dark.secondary",
};

const textProps = {
  color: "whiteAlpha.500",
  fontSize: "14px",
  fontWeight: "light",
  textAlign: "center",
};

const linkProps = {
  isExternal: true,
  href: "https://developers.themoviedb.org/3/getting-started/introduction",
  color: "brand.primary",
  _focus: {
    boxShadow: "none",
  },
};

const flexProps = {
  flexDir: "column",
  gap: "20px",
  alignItems: "center",
  maxW: "650px",
};
