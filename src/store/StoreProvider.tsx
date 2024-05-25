import React, { ReactNode, useReducer } from "react";
import reducer, { initState } from "./reducer";
import logger from "./logger";
import { ContextType } from "./interfaces";
import StoreContext from "./StoreContext";

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const contextValue: ContextType = { state, dispatch };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
