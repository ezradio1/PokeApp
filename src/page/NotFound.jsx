import React from 'react';
import NotFoundImg from '../assets/img/404.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Button from '../components/Button';
import * as URL from '../const/urlRouter';

const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: calc(100vh - 200px);
`;
const Image = styled.img`
  min-width: 300px;
  max-width: 320px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;
const NotFound = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
        <Image src={NotFoundImg} />
        <ButtonContainer>
          <Button
            text='Go Back Pokemon List'
            type='primary'
            onClick={() => navigate(URL.POKEMON_LIST)}
            fluid={true}
          />
        </ButtonContainer>
      </motion.div>
    </Container>
  );
};

export default NotFound;
