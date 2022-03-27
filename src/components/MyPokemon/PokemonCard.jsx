import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import TrashIcon from '../../assets/icon/trash.svg';

//component
import Button from '../Button';

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 10px 0;
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
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
  position: relative;
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
  margin-left: 20px;
`;
const PokeName = styled.div`
  font-size: 22px;
  line-height: 25px;
  font-weight: 600;
  text-transform: capitalize;
`;
const PokeNickName = styled.div`
  font-size: 14px;
  line-height: 25px;
  text-transform: uppercase;
  color: grey;
`;

const ContainerButton = styled.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
`;
const PokemonCard = ({ data, onRelease }) => {
  return (
    <Container>
      {data.map((el, key) => (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: Number(key / 20) }}>
          <Card>
            <ContainerCard>
              <PokeImg src={el.img} />
              <PokeInfoContainer>
                <PokeName>{el.name}</PokeName>
                <PokeNickName>{el.nickName}</PokeNickName>
              </PokeInfoContainer>
            </ContainerCard>
            <ContainerButton>
              <Button
                type='negative-1'
                shape='circle'
                onlyIcon={true}
                icon={TrashIcon}
                onClick={() => onRelease(el)}
              />
            </ContainerButton>
          </Card>
        </motion.div>
      ))}
    </Container>
  );
};

export default PokemonCard;
