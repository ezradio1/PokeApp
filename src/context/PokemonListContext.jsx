import React, { useState, createContext } from 'react';

export const PokemonListContext = createContext();

export const PokemonListProvider = (props) => {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(null);

  return (
    <PokemonListContext.Provider
      value={[list, setList, pagination, setPagination]}>
      {props.children}
    </PokemonListContext.Provider>
  );
};
