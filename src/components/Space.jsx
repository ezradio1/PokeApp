import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 5px;
  justify-content: ${(props) => props.justify ?? 'start'};
  align-items: ${(props) => props.align ?? 'start'};
`;
const Space = (props) => {
  return (
    <Container justify={props.justify} align={props.align}>
      {props.children}
    </Container>
  );
};

export default Space;
