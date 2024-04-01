import React from "react";
import reducer from "./reducer";
import { THEME } from "../const";

const InitialState = {
  theme: THEME.Dark,
};

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, InitialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default ContextProvider;

//https://www.iamtimsmith.com/blog/using-reducers-with-context-in-react
