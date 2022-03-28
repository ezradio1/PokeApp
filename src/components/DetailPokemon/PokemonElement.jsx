import React from 'react';
import styled from '@emotion/styled';
import Chip from '../Chip';
import { motion } from 'framer-motion';

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const PokemonElement = (props) => {
  return (
    <>
      <Title>{props.type}</Title>
      <ChipContainer>
        {props.data.map((e, key) => {
          return (
            <div key={key}>
              {key < 10 && (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: Number(key / 10) }}>
                  <Chip
                    key={key}
                    color={props.type === 'Types' ? '#FB2941' : '#2DB7F5'}
                    text={props.type === 'Types' ? e.type.name : e.move.name}
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </ChipContainer>
    </>
  );
};

export default PokemonElement;
