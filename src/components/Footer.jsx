import React from 'react';
import styled from '@emotion/styled';

const Containter = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px 0;
  font-weight: 500;
  border-top: 1px solid rgb(230, 230, 230);
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: #fff;
`;
const Footer = () => {
  return (
    <Containter>
      <p>
        PokeApp © 2022 by <span> Ezra Audivano Dirfa </span>
      </p>
    </Containter>
  );
};

export default Footer;
