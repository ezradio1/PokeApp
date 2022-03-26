import React, { useEffect, useContext } from 'react';
import myAxios from '../myAxios';
import { useNavigate } from 'react-router-dom';

// component
import Pagination from '../components/Pagination';
import PokemonCard from '../components/PokemonCard';
import { PokemonListContext } from '../context/PokemonListContext';

import * as URL from '../const/urlRouter';

const PokemonList = () => {
  let navigate = useNavigate();
  const [list, setList, pagination, setPagination] =
    useContext(PokemonListContext);

  useEffect(() => {
    if (list.length === 0) {
      getData();
    }
  }, []);

  const getData = async (url = 'pokemon') => {
    await myAxios.get(url).then((res) => {
      const data = res.data;
      const results = res.data.results;
      setPagination(data);
      results.map(async (element, key) => {
        await myAxios.get(`pokemon/${element.name}`).then((res) => {
          const newData = res.data;
          setList((prev) => [...prev, newData]);
        });
      });
    });
  };

  const onClickPagination = async (url) => {
    setList([]);
    await getData(url);
  };
  const onClickPokemon = (data) => {
    navigate(URL.POKEMON_DETAIL(data.id));
  };
  return (
    <>
      <h1>PokeDex</h1>
      {list.length === 0 ? (
        <p>loading...</p>
      ) : (
        <div>
          <PokemonCard data={list} onClick={(val) => onClickPokemon(val)} />
          <Pagination
            prev={pagination?.previous}
            next={pagination?.next}
            onClick={(val) => onClickPagination(val)}
          />
        </div>
      )}
    </>
  );
};

export default PokemonList;
