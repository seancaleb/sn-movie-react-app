import React, { useMemo, useState } from "react";
// import { useDispatch } from "react-redux";
import Routes from "./routes/Routes";

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

  return (
    <TogglerProvider>
      <Routes />
    </TogglerProvider>
  );
};

export default App;
