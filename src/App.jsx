import { Box, useBoolean } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import Routes from "./routes/Routes";
// import { useDispatch } from "react-redux";

/////////////////////////////////////////////////////////////////
// --------------- THIS IS JUST FOR DEMO PURPOSES ---------------
/////////////////////////////////////////////////////////////////

export const TogglerContext = React.createContext();

export const TogglerProvider = (props) => {
  const [isActive, setIsActive] = useState(false);
  const value = useMemo(() => ({ isActive, setIsActive }), [isActive]);

  return <TogglerContext.Provider value={value} {...props} />;
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMovieGenres());
  // }, []);

  const [isMounted, setIsMounted] = useBoolean();

  useEffect(() => {
    const handler = () => setIsMounted.on();

    if (document.readyState === "complete") {
      handler();
    } else {
      window.addEventListener("load", handler);
      return () => window.removeEventListener("load", handler);
    }
  }, []);

  return (
    <>
      {isMounted ? (
        <TogglerProvider>
          <Routes />
        </TogglerProvider>
      ) : (
        <Box minH="100vh" bg="brand.dark.primary" w="100%" />
      )}
    </>
  );
};

export default App;
