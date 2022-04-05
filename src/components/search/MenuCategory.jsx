import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";

const MenuCategory = ({ category, setCategory }) => {
  return (
    <Box {...boxProps}>
      <Menu>
        <MenuButton {...menuButtonProps}>
          {category.title} <ChevronDownIcon {...iconProps} />
        </MenuButton>
        <MenuList {...menuListProps}>
          {categories.map((cat) => {
            return (
              <MenuItem key={nanoid()} onClick={() => setCategory(cat)} {...menuItemProps}>
                {cat.title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default React.memo(MenuCategory);

const categories = [
  { title: "Movies", value: "movie" },
  { title: "Celebrities", value: "person" },
];

const boxProps = {
  pos: "relative",
  zIndex: 199,
  display: "flex",
};

const menuButtonProps = {
  px: 4,
  py: 2,
  transition: "all .2s",
  borderLeftRadius: "3px",
  fontSize: "14px",
  bg: "#2a2a2a",
  color: "white",

  _hover: { opacity: 0.85 },
  _active: { opacity: 0.85 },
};

const menuListProps = {
  bg: "brand.dark.secondary",
  borderColor: "transparent",
};

const menuItemProps = {
  color: "white",
  fontSize: "14px",
  _focus: {
    bg: "rgba(0,94,120,.75)",
  },
  _hover: {
    bg: "rgba(0,94,120,.75)",
  },
};

const iconProps = {
  boxSize: "18px",
  transform: "translateY(1px)",
  ml: "5px",
};
