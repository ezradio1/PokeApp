import React, { useEffect, useState, useContext } from 'react';
import myAxios from '../myAxios';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { WidthContext } from '../context/WidthContext';
import ArrowLeft from '../assets/icon/arrow-left.svg';

//components
import Avatar from '../components/DetailPokemon/Avatar';
import InfoDetail from '../components/DetailPokemon/InfoDetail';
import PokemonElement from '../components/DetailPokemon/PokemonElement';
import Statistic from '../components/DetailPokemon/Statistic';
import ChangePoke from '../components/DetailPokemon/ChangePoke';
import FloatingActionButton from '../components/FloatingActionButton';
import Button from '../components/Button';

const Container = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 20px 0;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const Col1 = styled.div`
  // border: 1px solid black;
`;
const Col2 = styled.div`
  // border: 5px solid black;
`;

const DetailPokemon = () => {
  const [matchesWidth] = useContext(WidthContext);
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (item === null) {
      getData();
    }
  }, []);

  const getData = async () => {
    await myAxios.get(`pokemon/${id}`).then((res) => {
      const data = res.data;
      setItem(data);
    });
  };

  return (
    <>
      {item !== null && (
        <div>
          <Button
            icon={ArrowLeft}
            onlyIcon={true}
            shape='circle'
            onClick={() => navigate(-1)}
          />
          <Container>
            <Col1>
              <>
                <Avatar data={item} />
                <InfoDetail data={item} />
                {/* <ChangePoke data={item} /> */}
                <br />
                {!matchesWidth && (
                  <Button fluid={true} text='Catch!' type='primary' />
                )}
              </>
            </Col1>
            <Col2>
              <PokemonElement type='Types' data={item.types} />
              <br />
              <PokemonElement type='Moves' data={item.moves} />
              <br />
              <Statistic data={item} />
            </Col2>
            {matchesWidth && <FloatingActionButton />}
          </Container>
        </div>
      )}
    </>
  );
};

export default DetailPokemon;
