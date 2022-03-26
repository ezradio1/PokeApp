import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 10px 0;
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Card = styled.div`
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  height: 80px;
  box-shadow: 5px 7px 28px 1px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 5px 7px 28px 1px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 5px 7px 28px 1px rgba(0, 0, 0, 0.08);
`;

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
`;

const PokeImg = styled.img`
  width: 80px;
  height: 75px;
`;

const PokeInfoContainer = styled.div`
  margin-left: 10px;
`;
const PokeName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;
const PokeNickName = styled.div`
  font-size: 10px;
  line-height: 20px;
  text-transform: uppercase;
`;
const PokemonCard = ({ data }) => {
  return (
    <Container>
      {data.map((el, key) => (
        <Card>
          <ContainerCard>
            <PokeImg src={el.img} />
            <PokeInfoContainer>
              <PokeName>{el.name}</PokeName>
              <PokeNickName>{el.nickName}</PokeNickName>
            </PokeInfoContainer>
          </ContainerCard>
        </Card>
      ))}
    </Container>
  );
};

export default PokemonCard;
