import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Wave from '../../assets/img/wave';
import { WidthContext } from '../../context/WidthContext';
import { motion } from 'framer-motion';
import getColor from '../../const/getColor';
const Container = styled.div``;
const Name = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
`;
const Number = styled.p`
  font-weight: 600;
  color: #d4d4d4;
  text-align: center;
  line-height: 18px;
  margin-bottom: 20px;
`;

const ContainerImg = styled.div`
  position: relative;
  z-index: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
`;

const WaveContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: -10px;
  z-index: -1;
`;
const Avatar = (props) => {
  const [matchesWidth] = useContext(WidthContext);
  const color = getColor(props.data.types[0].type.name);
  return (
    <Container>
      <ContainerImg>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}>
          <Image src={props.data.sprites.other.dream_world.front_default} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <WaveContainer>
            <Wave color={color} />
          </WaveContainer>
        </motion.div>
      </ContainerImg>
      <Name>{props.data.name}</Name>
      <Number>#{props.data.id}</Number>
    </Container>
  );
};
export default Avatar;
