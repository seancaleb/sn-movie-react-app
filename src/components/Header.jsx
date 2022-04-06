import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Text,
  Flex,
  Link,
  useDisclosure,
  useBoolean,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { Link as RouteLink, useLocation } from "react-router-dom";
import { MenuDrawer } from ".";
import Search from "./search/Search";
import SearchMobileView from "./search/SearchMobileView";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isActive, setIsActive] = useBoolean(false);
  const [isLessThan768] = useMediaQuery("(max-width: 768px)");
  const location = useLocation();

  useEffect(() => {
    setIsActive.off();
  }, [location]);

  return (
    <Box {...headerProps}>
      <Container {...headerContainerProps}>
        <Flex {...flexProps}>
          <HamburgerIcon {...burgerIconProps} onClick={onOpen} />

          <Link as={RouteLink} to="/" _focus={{ boxShadow: "none" }}>
            <Text {...textProps}>snmovie </Text>
          </Link>
        </Flex>

        {isLessThan768 ? (
          <SearchIcon {...searchIconProps} onClick={() => setIsActive.toggle()} />
        ) : (
          <Search />
        )}
      </Container>
      {isLessThan768 && <SearchMobileView {...{ isActive }} />}
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;

const headerProps = {
  w: "100%",
  bg: "brand.dark.secondary",
  as: "header",
  pos: "relative",
  h: "auto",
  zIndex: 99,
};

const headerContainerProps = {
  maxW: "1560px",
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
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

const searchIconProps = {
  color: "white",
  boxSize: "18px",
  cursor: "pointer",
};
