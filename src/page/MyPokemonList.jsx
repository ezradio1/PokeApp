import React, { useEffect, useContext } from 'react';
import { MyPokemonContext } from '../context/MyPokemonContext';

//component
import PokemonCard from '../components/MyPokemon/PokemonCard';
const MyPokemonList = () => {
  const [myPokemon] = useContext(MyPokemonContext);
  useEffect(() => {
    console.log(myPokemon);
  }, [myPokemon]);
  return (
    <>
      <h1>My Pokemon</h1>
      <PokemonCard data={myPokemon} />
    </>
  );
};

export default MyPokemonList;
