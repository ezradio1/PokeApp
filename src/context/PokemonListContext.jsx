import React, { useState, createContext, useContext } from 'react';
import myAxios from '../myAxios';
import { MyPokemonContext } from './MyPokemonContext';

export const PokemonListContext = createContext();

export const PokemonListProvider = (props) => {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [myPokemon] = useContext(MyPokemonContext);

  const getAllData = (url = 'pokemon') => {
    myAxios.get(url).then((res) => {
      const data = res.data;
      const results = res.data.results;
      setPagination(data);
      results.map(async (element, key) => {
        const getMyPokemon = myPokemon.filter((e) => {
          return e.name === element.name;
        }).length;
        myAxios.get(`pokemon/${element.name}`).then((res) => {
          const newData = { ...res.data, total_owned: getMyPokemon };
          setList((prev) => [...prev, newData]);
        });
      });
    });
  };

  return (
    <PokemonListContext.Provider
      value={[list, setList, getAllData, pagination, setPagination]}>
      {props.children}
    </PokemonListContext.Provider>
  );
};
