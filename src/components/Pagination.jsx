import React, { useContext } from 'react';
import Button from './Button';
import Space from './Space';
import { WidthContext } from '../context/WidthContext';

const Pagination = ({ prev, next, onClick }) => {
  const [matchesWidth] = useContext(WidthContext);

  return (
    <Space justify='flex-end'>
      <Button
        fluid={matchesWidth}
        type='primary'
        text='Prev'
        disabled={prev ? false : true}
        onClick={() => onClick(prev)}
      />
      <Button
        fluid={matchesWidth}
        type='primary'
        text='Next'
        onClick={() => onClick(next)}
      />
    </Space>
  );
};

export default Pagination;
