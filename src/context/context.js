import { createContext, useReducer, useContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({ reducer, initialState, children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

export const useContextData = () => useContext(Context);
