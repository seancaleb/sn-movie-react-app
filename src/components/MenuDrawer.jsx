import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Text, Flex, Link } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React, { useContext } from "react";
// import { useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
import { TogglerContext } from "../App";
import { menuItems } from "../data";
// import { selectGenres } from "../features/genres/genresSlice";

const MenuDrawer = ({ onClose, isOpen }) => {
  // const genres = useSelector(selectGenres);

  /////////////////////////////////////////////////////////////////
  // --------------- THIS IS JUST FOR DEMO PURPOSES ---------------
  /////////////////////////////////////////////////////////////////

  const { isActive } = useContext(TogglerContext);

  const handleClick = (path) => {
    if (isActive) {
      setTimeout(() => onClose(), 500);
    }
  };

  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

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
              <Link key={nanoid()} as={RouteLink} to={`${menu.path}?page=1`} _focus={{ boxShadow: "none" }} onClick={handleClick}>
                <Text {...textProps}>{menu.title}</Text>
              </Link>
            ))}
          </Flex>
          {/* <Flex flexDir="column" gap="20px" mt="60px">
            <Text {...genreHeadingProps}>Genre</Text>
            <Box>
              {genres &&
                genres.map((genre) => {
                  return (
                    <Badge key={genre.id} {...badgeProps}>
                      {genre.name}
                    </Badge>
                  );
                })}
            </Box>
          </Flex> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default React.memo(MenuDrawer);

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
  py: "10px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "light",
  _hover: { color: "brand.primary" },
};

const flexProps = {
  flexDir: "column",
  gap: "10px",
};

// const genreHeadingProps = {
//   color: "whiteAlpha.300",
//   fontWeight: "light",
//   textTransform: "uppercase",
//   letterSpacing: "4px",
//   fontSize: "12px",
// };

// const badgeProps = {
//   mr: "5px",
//   mb: "5px",
//   bg: "transparent",
//   color: "whiteAlpha.600",
//   fontWeight: "normal",
//   fontSize: "12px",
//   letterSpacing: ".5px",
//   textTransform: "capitalize",
//   border: "1px solid",
//   borderColor: "whiteAlpha.300",
//   py: "3px",
//   px: "6px",
//   cursor: "pointer",
//   _hover: {
//     color: "brand.primary",
//     borderColor: "brand.primary",
//   },
// };
