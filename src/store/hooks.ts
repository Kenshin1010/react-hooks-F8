import { useContext } from "react";
import { ContextType } from "./interfaces";
import StoreContext from "./StoreContext";

export const useStore = (): ContextType => {
  const contextValue = useContext(StoreContext);
  if (!contextValue) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return contextValue;
  // useContext(StoreContext);
  // const [state, dispatch] = useContext(StoreContext);
  // return [state, dispatch];
};
