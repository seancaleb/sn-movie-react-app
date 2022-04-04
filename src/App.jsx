import React, { useEffect, useMemo, useState } from "react";
import Routes from "./routes/Routes";
import { useDispatch } from "react-redux";
import { fetchMovieGenres } from "../src/features/genres/genresSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieGenres());
  }, []);

  return (
    <TogglerProvider>
      <Routes />
    </TogglerProvider>
  );
};

export default App;
