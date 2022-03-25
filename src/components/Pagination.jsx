import React, { useContext } from 'react';
import Button from './Button';
import styled from '@emotion/styled';
import { WidthContext } from '../context/WidthContext';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Separator = styled.div`
  width: 8px;
`;
const Pagination = ({ prev, next, onClick }) => {
  const [matchesWidth] = useContext(WidthContext);

  return (
    <Container>
      <Button
        fluid={matchesWidth}
        type='primary'
        text='Prev'
        disabled={prev ? false : true}
        onClick={() => onClick(prev)}
      />
      <Separator />
      <Button
        fluid={matchesWidth}
        type='primary'
        text='Next'
        onClick={() => onClick(next)}
      />
    </Container>
  );
};

export default Pagination;
