import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 5px;
  justify-content: ${(props) => props.justify ?? 'start'};
`;
const Space = (props) => {
  return <Container justify={props.justify}>{props.children}</Container>;
};

export default Space;
