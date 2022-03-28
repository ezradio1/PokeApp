import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 5px 10px;
  border-radius: 50px;
  background-color: ${(props) => props.color ?? '#838383'};
  min-width: 50px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  text-transform: capitalize;
  height: 20px;
`;
const Chip = (props) => {
  return <Container color={props.color}>{props.text}</Container>;
};

export default Chip;
