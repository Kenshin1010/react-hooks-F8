import { createContext } from "react";
import { ContextType } from "./interfaces";

const StoreContext = createContext<ContextType | undefined>(undefined);

export default StoreContext;
