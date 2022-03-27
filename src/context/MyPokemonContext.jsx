import React, { useState, createContext } from 'react';

export const MyPokemonContext = createContext();

export const MyPokemonProvider = (props) => {
  const data = JSON.parse(localStorage.getItem('myPokemon')) ?? [];
  const [myPokemon, setMyPokemon] = useState(data);

  return (
    <MyPokemonContext.Provider value={[myPokemon, setMyPokemon]}>
      {props.children}
    </MyPokemonContext.Provider>
  );
};
