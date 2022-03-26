import React from 'react';
import styled from '@emotion/styled';
import PokeBall from '../assets/img/pokeball.png';
import LoadingIcon from '../assets/icon/loading.svg';
const Container = styled.div`
  background-color: #1678c2 !important;
  padding: 10px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: #f44336;
  border: none;
  color: #fff;
  font-size: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: fixed;
  bottom: 65px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:focus {
    transform: scale(1.1);
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

const PokeBallImg = styled.img`
  width: 40px;
`;

const LoadingImg = styled.img``;
const FloatingActionButton = ({ onClick, loading }) => {
  return (
    <>
      <Container>
        {!loading ? (
          <PokeBallImg onClick={onClick} src={PokeBall} />
        ) : (
          <LoadingImg src={LoadingIcon} />
        )}
      </Container>
    </>
  );
};

export default FloatingActionButton;
