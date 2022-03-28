import React, { useEffect, useState, useContext, useRef } from 'react';
import myAxios from '../myAxios';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { WidthContext } from '../context/WidthContext';
import { MyPokemonContext } from '../context/MyPokemonContext';
import { PokemonListContext } from '../context/PokemonListContext';
import ArrowLeft from '../assets/icon/arrow-left.svg';
import success from '../assets/img/success.svg';
import sad from '../assets/img/sad.svg';
//components
import Avatar from '../components/DetailPokemon/Avatar';
import InfoDetail from '../components/DetailPokemon/InfoDetail';
import PokemonElement from '../components/DetailPokemon/PokemonElement';
import Statistic from '../components/DetailPokemon/Statistic';
import ChangePoke from '../components/DetailPokemon/ChangePoke';
import FloatingActionButton from '../components/FloatingActionButton';
import Button from '../components/Button';
import Conffeti from '../components/Conffeti';
import Modal from '../components/Modal';
import InputCustom from '../components/InputCustom';

const Container = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 20px 0;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1.7fr;
  }
`;

const ButtonContainer = styled.div`
  position: ${(props) => (props.isMobile ? 'fixed' : 'absolute')};
  top: 80px;
  top: ${(props) => (props.isMobile ? '13px' : '80px')};
  z-index: ${(props) => (props.isMobile ? '1' : '0')};
`;

const ModalText = styled.div`
  text-align: center;
  font-size: 15px;
  margin-bottom: 5px;
`;

const DetailPokemon = () => {
  const [matchesWidth] = useContext(WidthContext);
  const [myPokemon, setMyPokemon] = useContext(MyPokemonContext);
  const [, setList, getAllData] = useContext(PokemonListContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [isGetPokemon, setIsGetPokemon] = useState(false);
  const [nickName, setNickName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (item === null) {
      getData();
    }
  }, []);

  useEffect(() => {
    setList([]);
    getAllData();
  }, [myPokemon]);

  const onFire = useRef(null);
  const modalRef = useRef();

  const getData = async () => {
    await myAxios.get(`pokemon/${id}`).then((res) => {
      const data = res.data;
      setItem(data);
    });
  };

  const onCheckUniqNickName = (nickName, currentData) => {
    var check = currentData.filter((e) => {
      return e.nickName === nickName;
    });
    return check.length === 0 ?? false;
  };
  const onSavePokemonToList = (data) => {
    if (nickName === '') {
      setErrorMsg(`You must enter a nickname!`);
    } else {
      const checkUnique =
        myPokemon.length > 0 ? onCheckUniqNickName(nickName, myPokemon) : true;
      if (checkUnique) {
        setErrorMsg('');
        setLoadingModal(true);
        setTimeout(() => {
          var newData;
          const savedData = {
            name: data.name,
            nickName: nickName,
            img: data.sprites.other.dream_world.front_default,
          };
          newData = [...myPokemon, savedData];
          setMyPokemon(newData);
          localStorage.setItem('myPokemon', JSON.stringify(newData));
          modalRef.current.close();
          setLoadingModal(false);
          // getAllData();
        }, 800);
      } else {
        setErrorMsg(`You've used this nickname before!`);
      }
    }
  };
  const onCatchPokemon = (item) => {
    setErrorMsg('');
    setLoading(true);
    setNickName('');
    setTimeout(() => {
      const getRandom = Math.floor(Math.random() * 2);
      var data;
      if (getRandom === 1) {
        data = {
          img: getRandom,
          title: 'congratulation!',
          buttonText: 'Save',
          message: 'You have successfully obtained this item!',
        };
        onFire.current();
      } else {
        data = {
          img: getRandom,
          title: 'very sad!!',
          buttonText: 'No problem',
          message: 'You failed to get this item!',
        };
      }
      setIsGetPokemon(data);
      modalRef.current.open();
      setLoading(false);
    }, 800);
  };
  return (
    <>
      {item !== null && (
        <div>
          <ButtonContainer isMobile={matchesWidth}>
            <Button
              icon={ArrowLeft}
              onlyIcon={true}
              shape='circle'
              onClick={() => navigate(-1)}
            />
          </ButtonContainer>
          <Container>
            <div>
              <>
                <Avatar data={item} />
                <InfoDetail data={item} />
                <br />
                <ChangePoke data={item} />
                <br />
                {!matchesWidth && (
                  <Button
                    fluid={true}
                    text='Catch!'
                    type='primary'
                    onClick={() => onCatchPokemon(item)}
                    loading={loading ? 1 : 0}
                  />
                )}
              </>
            </div>
            <div>
              <PokemonElement type='Types' data={item.types} />
              <br />
              <PokemonElement type='Moves' data={item.moves} />
              <br />
              <Statistic data={item} />
            </div>
            {matchesWidth && (
              <FloatingActionButton
                onClick={() => onCatchPokemon(item)}
                loading={loading ? 1 : 0}
              />
            )}
          </Container>
          <Modal
            ref={modalRef}
            image={isGetPokemon.img === 1 ? success : sad}
            title={isGetPokemon.title}
            buttonText={isGetPokemon.buttonText}>
            <ModalText>{isGetPokemon.message}</ModalText>
            {isGetPokemon.img === 1 ? (
              <InputCustom
                errorMsg={errorMsg}
                placeholder='Enter a nickname for your item'
                value={nickName}
                onChange={(evt) => setNickName(evt.target.value)}
              />
            ) : null}
            <Button
              loading={loadingModal ? 1 : 0}
              type='primary'
              text={isGetPokemon.buttonText}
              fluid={true}
              onClick={
                isGetPokemon.img === 1
                  ? () => onSavePokemonToList(item)
                  : () => modalRef.current.close()
              }
            />
          </Modal>
          <Conffeti onFire={onFire} />
        </div>
      )}
    </>
  );
};

export default DetailPokemon;
