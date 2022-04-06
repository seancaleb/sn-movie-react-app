import { Container, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Search from "./Search";

const SearchMobileView = ({ isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <MotionFlex {...searchWrapperMobile}>
          <Container {...headerContainerProps}>
            <Search isMobileView />
          </Container>
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};

export default SearchMobileView;

const MotionFlex = motion(Flex);

const headerContainerProps = {
  maxW: "1560px",
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
  h: "60px",
  alignItems: "center",
};

const flexVariant = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: "100%",
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: "110%",
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const searchWrapperMobile = {
  variants: flexVariant,
  animate: "visible",
  initial: "hidden",
  exit: "exit",
  alignItems: "center",
  pos: "absolute",
  top: 0,
  left: 0,
  h: "100%",
  w: "100%",
  bg: "brand.dark.secondary",
  zIndex: 99,
  transform: "translateY(100%)",
};
