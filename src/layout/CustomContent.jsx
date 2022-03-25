import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import * as URL from '../const/urlRouter';
import styled from '@emotion/styled';

//page
import PokemonList from '../page/PokemonList';
import DetailPokemon from '../page/DetailPokemon';
import MyPokemonList from '../page/MyPokemonList';

const CustomContent = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const Container = styled.div`
    background-color: #fcfcfc;
    // background-image: url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png');
    padding: 80px 70px 70px;
    min-height: 80vh;
    @media (max-width: 768px) {
      padding: 80px 12px 70px;
    }
  `;

  useEffect(() => {
    const url = location.pathname;
    if (url === '/') {
      navigate(URL.POKEMON_LIST, { replace: true });
    }
  }, []);
  return (
    <Container>
      <Routes>
        <Route path={URL.POKEMON_LIST} element={<PokemonList />} />
        <Route path={URL.POKEMON_DETAIL(':id')} element={<DetailPokemon />} />
        <Route path={URL.MY_POKEMON} element={<MyPokemonList />} />
      </Routes>
    </Container>
  );
};

export default CustomContent;
