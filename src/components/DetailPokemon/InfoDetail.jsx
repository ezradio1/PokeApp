import React from 'react';
import styled from '@emotion/styled';
import getColor from '../../const/getColor';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
`;
const Value = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => `${getColor(props.type)}`};
  line-height: 20px;
`;
const Label = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #d4d4d4;
`;

const Element = styled.div`
  border-right: ${(props) => `2px solid ${getColor(props.type)}`};
  text-align: center;
  &:last-child {
    border-right: none;
  }
`;
const InfoDetail = (props) => {
  const type = props.data.types[0].type.name;
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <Container>
        <Element type={type}>
          <Value type={type}>{props.data.weight} lbs</Value>
          <Label>Weight</Label>
        </Element>
        <Element type={type}>
          <Value type={type}>{props.data.height}'</Value>
          <Label>Height</Label>
        </Element>
        <Element>
          <Value type={type}>{props.data.base_experience}</Value>
          <Label>Base Exp</Label>
        </Element>
      </Container>
    </motion.div>
  );
};

export default InfoDetail;
