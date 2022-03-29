import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Container, Text, Input, Flex, InputGroup, InputLeftElement, Link, useDisclosure } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { MenuDrawer } from ".";
import { inputProps } from "../theme/style";

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

        {/* <InputGroup {...inputGroupProps}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon {...searchIconProps} />}
          />
          <Input placeholder="Search a keyword..." {...inputProps} />
        </InputGroup> */}
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
  gap: "20px",
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

const inputGroupProps = {
  maxW: "450px",
};

const searchIconProps = {
  color: "#fff",
  transform: "translateY(-2px)",
};

export default Header;
