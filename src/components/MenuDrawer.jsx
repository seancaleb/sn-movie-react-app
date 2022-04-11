import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Flex,
  Link,
  Box,
  Badge,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
import { menuItems } from "../data";
import { selectGenres } from "../features/genres/genresSlice";

const MenuDrawer = ({ onClose, isOpen }) => {
  const genres = useSelector(selectGenres);

  return (
    <Drawer {...drawerProps} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent {...drawerContentProps}>
        <DrawerHeader {...drawerHeaderProps}>
          <ArrowLeftIcon {...arrowIconProps} onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>
          <Flex {...flexProps}>
            {menuItems.map((menu) => (
              <Link
                key={nanoid()}
                as={RouteLink}
                to={menu.title === "Home" ? menu.path : `${menu.path}?page=1`}
                _focus={{ boxShadow: "none" }}
                onClick={() => setTimeout(() => onClose(), 600)}
              >
                <Text {...textProps}>{menu.title}</Text>
              </Link>
            ))}
          </Flex>
          <Flex flexDir="column" gap="20px" mt="60px">
            <Text {...genreHeadingProps}>Genre</Text>
            <Box>
              {genres &&
                genres.map((genre) => {
                  return (
                    <Link
                      key={genre.id}
                      as={RouteLink}
                      to={`discover/movie/${genre.id}?page=1`}
                      _focus={{ boxShadow: "none" }}
                      onClick={() => setTimeout(() => onClose(), 600)}
                    >
                      <Badge {...badgeProps}>{genre.name}</Badge>
                    </Link>
                  );
                })}
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;

const drawerProps = {
  placement: "left",
  blockScrollOnMount: false,
};

const drawerContentProps = {
  bg: "brand.dark.primary",
};

const drawerHeaderProps = {
  borderBottomWidth: "1px",
  borderColor: "brand.dark.secondary",
};

const arrowIconProps = {
  boxSize: "15px",
  color: "brand.primary",
  cursor: "pointer",
};

const textProps = {
  py: "15px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "light",
  _hover: { color: "brand.primary" },
  borderBottom: "1px solid",
  borderBottomColor: "whiteAlpha.100",
};

const flexProps = {
  flexDir: "column",
};

const genreHeadingProps = {
  color: "whiteAlpha.300",
  fontWeight: "light",
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontSize: "12px",
};

const badgeProps = {
  mr: "5px",
  mb: "5px",
  bg: "transparent",
  color: "whiteAlpha.600",
  fontWeight: "normal",
  fontSize: "12px",
  letterSpacing: ".5px",
  textTransform: "capitalize",
  border: "1px solid",
  borderColor: "whiteAlpha.300",
  py: "3px",
  px: "6px",
  cursor: "pointer",
  _hover: {
    color: "brand.primary",
    borderColor: "brand.primary",
  },
};
