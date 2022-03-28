import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import LoadingIcon from '../assets/icon/loading-2.svg';
import { MyPokemonContext } from '../context/MyPokemonContext';
import { PokemonListContext } from '../context/PokemonListContext';

// component
import Pagination from '../components/Pagination';
import PokemonCard from '../components/PokemonCard';
import Chip from '../components/Chip';
import Space from '../components/Space';

import * as URL from '../const/urlRouter';

const HeaderText = styled.div`
  font-size: 30px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 15px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LoadingTag = styled.img`
  width: 100px;
`;

const PokemonList = () => {
  let navigate = useNavigate();
  const [list, setList, getAllData, pagination] =
    useContext(PokemonListContext);
  const [myPokemon] = useContext(MyPokemonContext);

  useEffect(() => {
    if (list.length === 0) {
      getAllData();
    }
  }, []);

  const onClickPagination = async (url) => {
    setList([]);
    await getAllData(url);
  };
  const onClickPokemon = (data) => {
    navigate(URL.POKEMON_DETAIL(data.id));
  };
  return (
    <>
      <Space justify='space-between' align='center'>
        <HeaderText>Pokemon Dex</HeaderText>
        <Chip color='#66BB6A' text={`TOTAL OWNED : ${myPokemon.length}`} />
      </Space>
      {list.length === 0 ? (
        <LoadingContainer>
          <div>
            <LoadingTag src={LoadingIcon} />
          </div>
        </LoadingContainer>
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
