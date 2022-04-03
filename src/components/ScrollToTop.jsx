import { Box, useBoolean } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const location = useLocation();
  const [isMounted, setIsMounted] = useBoolean();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handler = () => setIsMounted.on();

    if (document.readyState === "complete") {
      handler();
    } else {
      window.addEventListener("load", handler);
      return () => window.removeEventListener("load", handler);
    }
  }, [location, setIsMounted]);

  return (
    <>
      {!isMounted ? (
        <Box minH="100vh" bg="brand.dark.primary" w="100%" />
      ) : (
        <React.Fragment {...props} />
      )}
    </>
  );
};

export default ScrollToTop;
