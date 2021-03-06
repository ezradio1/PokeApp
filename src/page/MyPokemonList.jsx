import React, { useEffect, useState, useContext, useRef } from 'react';
import { MyPokemonContext } from '../context/MyPokemonContext';
import { PokemonListContext } from '../context/PokemonListContext';
import styled from '@emotion/styled';
import NoDataImg from '../assets/img/nodata.svg';
import { motion } from 'framer-motion';

//component
import PokemonCard from '../components/MyPokemon/PokemonCard';
import Modal from '../components/Modal';
import Button from '../components/Button';

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

const ModalText = styled.div`
  text-align: center;
  font-size: 15px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 250px);
`;
const NoDataImage = styled.img`
  width: 200px;
`;

const NoDataText = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #8d8d8d;
  font-weight: 600;
`;
const MyPokemonList = () => {
  const [, setList, getAllData] = useContext(PokemonListContext);
  const [myPokemon, setMyPokemon] = useContext(MyPokemonContext);
  const [loading, setLoading] = useState(false);
  const [currItem, setCurrItem] = useState({});
  const modalRef = useRef();

  const onOpenDeleteModal = (item) => {
    modalRef.current.open();
    setCurrItem(item);
  };

  useEffect(() => {
    setList([]);
    getAllData();
  }, [myPokemon]);

  const onReleasePokemon = async () => {
    setLoading(true);
    setTimeout(() => {
      const newData = myPokemon.filter((e) => {
        return e.nickName !== currItem.nickName;
      });
      modalRef.current.close();
      setLoading(false);
      setMyPokemon(newData);
      localStorage.setItem('myPokemon', JSON.stringify(newData));
    }, 800);
  };
  return (
    <>
      <HeaderText>My Pokemon</HeaderText>
      {myPokemon.length === 0 && (
        <ImageContainer>
          <motion.div>
            <NoDataImage src={NoDataImg} />
            <NoDataText>You have no items!</NoDataText>
          </motion.div>
        </ImageContainer>
      )}
      <PokemonCard
        data={myPokemon}
        onRelease={(value) => onOpenDeleteModal(value)}
      />
      <Modal ref={modalRef} image={currItem.img} title='Delete Confirmation'>
        <ModalText>Are you sure want to delete this item ?</ModalText>

        <Button
          loading={loading ? 1 : 0}
          type='negative'
          text='Delete'
          fluid={true}
          onClick={() => onReleasePokemon()}
        />
      </Modal>
    </>
  );
};

export default MyPokemonList;
