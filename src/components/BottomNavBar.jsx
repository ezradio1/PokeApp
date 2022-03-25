import React from 'react';
import styled from '@emotion/styled';
import ListLogo from '../assets/icon/nonactive/list-nonactive.svg';
import ListLogoActive from '../assets/icon/active/list-active.svg';
import ContainerLogo from '../assets/icon/nonactive/container-nonactive.svg';
import ContainerLogoActive from '../assets/icon/active/container-active.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import * as URL from '../const/urlRouter';
const Containter = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.04), 0 -1px 0 #e5e5e5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 1000;
`;

const UL = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  padding: 0;
  width: 100%;
`;

const ContainerLI = styled.div`
  align-self: center;
  margin: auto;
  padding: 10px 10px;
`;
const LI = styled.ul`
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
`;
const ItemLogo = styled.img`
  height: auto;
  width: 20px;
`;
const ItemMenu = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: -5px;
  line-height: 8px;
  margin-top: 2px;
  color: ${(props) => (props.isActive ? '#1678c2' : '#838383')};
`;

const BottomNavBar = () => {
  const location = useLocation();

  let navigate = useNavigate();
  const onMovePage = (url) => {
    navigate(url);
  };

  return (
    <Containter>
      <UL>
        <ContainerLI>
          <LI onClick={() => onMovePage(URL.POKEMON_LIST)}>
            <ItemLogo
              src={
                location.pathname === URL.POKEMON_LIST
                  ? ListLogoActive
                  : ListLogo
              }
            />
            <ItemMenu isActive={location.pathname === URL.POKEMON_LIST}>
              Pokemon List
            </ItemMenu>
          </LI>
        </ContainerLI>
        <ContainerLI>
          <LI onClick={() => onMovePage(URL.MY_POKEMON)}>
            <ItemLogo
              src={
                location.pathname === URL.MY_POKEMON
                  ? ContainerLogoActive
                  : ContainerLogo
              }
            />
            <ItemMenu isActive={location.pathname === URL.MY_POKEMON}>
              My Pokemon
            </ItemMenu>
          </LI>
        </ContainerLI>
      </UL>
    </Containter>
  );
};

export default BottomNavBar;
