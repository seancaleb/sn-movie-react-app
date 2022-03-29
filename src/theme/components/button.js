const Button = {
  baseStyle: {
    borderRadius: "6px",
    _hover: { opacity: 0.9 },
    _active: {
      boxShadow: "none",
      opacity: 0.95,
    },
    _focus: {
      boxShadow: "none",
    },
  },

  sizes: {
    sm: {
      h: "40px",
      px: "22px",
      py: "18px",
    },
  },

  variants: {
    solid: {
      _hover: {
        bgGradient: "linear(to-r, brand.primary, brand.secondary)",
      },
      _active: {
        bgGradient: "linear(to-r, brand.primary, brand.secondary)",
      },
      bgGradient: "linear(to-r, brand.primary, brand.secondary)",
      color: "white",
    },
  },

  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};

export default Button;
