import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, Text, Flex, Link, useDisclosure } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { MenuDrawer } from ".";

import Search from "./search/Search";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box {...headerProps}>
      <Container {...headerContainerProps}>
        <Flex {...flexProps}>
          <HamburgerIcon {...burgerIconProps} onClick={onOpen} />

          <Link as={RouteLink} to="/" _focus={{ boxShadow: "none" }}>
            <Text {...textProps}>snmovie </Text>
          </Link>
        </Flex>
        <Search />
      </Container>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

const headerProps = {
  w: "100%",
  bg: "brand.dark.secondary",
  as: "header",
};

const headerContainerProps = {
  maxW: "1560px",
  display: "flex",
  gap: "30px",
  justifyContent: {
    base: "flex-start",
    md: "space-between",
  },
  h: "60px",
  alignItems: "center",
};

const flexProps = {
  gap: "15px",
  alignItems: "center",
};

const burgerIconProps = {
  color: "#fff",
  boxSize: "20px",
  cursor: "pointer",
};

const textProps = {
  fontSize: "20px",
  _hover: { color: "brand.primary" },
  cursor: "pointer",
};

export default Header;
