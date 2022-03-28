import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import getColor from '../const/getColor';
import Space from '../components/Space';

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 10px 0;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ContainerCard = styled.div`
  border: 1px solid #e5e5e5;
  padding: 15px;
  border-radius: 10px;
  text-transform: uppercase;
  height: 200px;
  justify-content: center;
  position: relative;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const ContainerImg = styled.img`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 30px;
  left: 0;
`;

const ContainerName = styled.p`
  margin-top: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;

const ContainerNumber = styled.p`
  color: #d4d4d4;
  text-align: center;
  position: relative;
  font-size: 6.8vw;
  line-height: 150px;
  font-weight: 700;
  opacity: 0.3;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 10vw;
    top: 60px;
  }
`;

const ContainerType = styled.p`
  font-weight: 600;
  line-height: 10px;
  font-size: 12px;
  color: ${(props) => getColor(props.type)};
  padding-right: 5px;
  border-right: 1px solid black;
`;

const ContainerTotalOwned = styled.p`
  line-height: 10px;
  font-weight: 500;
  font-size: 12px;
  text-transform: capitalize;
  color: #4f5257;
`;
const PokemonCard = ({ data, onClick }) => {
  return (
    <Container>
      {data.map((el, key) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: Number(key / 20) }}>
          <ContainerCard key={key} onClick={() => onClick(el)}>
            <ContainerNumber>#{el.id}</ContainerNumber>

            <ContainerImg
              className='onHover'
              src={el.sprites.other.dream_world.front_default}
              alt=''
            />
            <ContainerName>{el.name}</ContainerName>
            <Space justify='center'>
              <ContainerType type={el.types[0].type.name}>
                {el.types[0].type.name}
              </ContainerType>

              <ContainerTotalOwned>
                Owned : {el.total_owned}
              </ContainerTotalOwned>
            </Space>
          </ContainerCard>
        </motion.div>
      ))}
    </Container>
  );
};

export default PokemonCard;
