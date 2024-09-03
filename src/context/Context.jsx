import { createContext, useReducer } from "react";

export const movieContext = createContext();

const movieReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
};

export const Context = ({ children }) => {
  const [movie, movieActions] = useReducer(movieReducer, []);

  return (
    <movieContext.Provider value={{ movie, movieActions }}>
      {children}
    </movieContext.Provider>
  );
};
