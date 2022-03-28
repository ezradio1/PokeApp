import React, { useContext } from 'react';
import styled from '@emotion/styled';
import PokeLogo from '../assets/img/pokemon-logo.png';
import ListLogo from '../assets/icon/list.svg';
import ContainerLogo from '../assets/icon/container.svg';
import * as URL from '../const/urlRouter';
import { useNavigate } from 'react-router-dom';
import { WidthContext } from '../context/WidthContext';

const NavBar = styled.div`
  padding: 10px 0;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
  z-index: 1;
`;

const NavContainer = styled.div`
  margin: 0;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
`;

const NavLogo = styled.img`
  width: 100px;
  padding: 5px 0;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  float: right;
`;

const ItemLogo = styled.img`
  width: 18px;
  margin-right: 12px;
  color: #e5e5e5;
`;

const ItemMenu = styled.div`
  margin: auto 10px;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 6px;
  transition: 0.3s;
  display: flex;
  :hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

const VerticalSeparator = styled.div`
  height: 100%;
  width: 1px;
  background: #e5e5e5;
`;

const Navbar = () => {
  const [matchesWidth] = useContext(WidthContext);

  let navigate = useNavigate();
  const onMovePage = (url) => {
    navigate(url);
  };
  return (
    <>
      <NavBar>
        <NavContainer>
          <NavLogo src={PokeLogo} />
          {!matchesWidth && (
            <MenuContainer>
              <ItemMenu
                onClick={() => onMovePage(URL.POKEMON_LIST)}
                data-testid='item-nav-1'>
                <ItemLogo src={ListLogo} />
                Pokemon Dex
              </ItemMenu>
              <VerticalSeparator />
              <ItemMenu
                onClick={() => onMovePage(URL.MY_POKEMON)}
                data-testid='item-nav-2'>
                <ItemLogo src={ContainerLogo} />
                My Pokemon
              </ItemMenu>
            </MenuContainer>
          )}
        </NavContainer>
      </NavBar>
    </>
  );
};

export default Navbar;
