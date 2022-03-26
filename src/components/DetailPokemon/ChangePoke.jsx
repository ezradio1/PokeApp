import React, { useState } from 'react';
import styled from '@emotion/styled';
import getColor from '../../const/getColor';
import { motion } from 'framer-motion';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 1em;
`;

const Tr = styled.tr``;

const Th = styled.th`
  background: #f8f7fb;
  width: 50%;
  height: 40px;
  color: #fff;
  transition: 0.3s;
  :first-child {
    background-color: ${(props) =>
      props.activeTab === 'default' ? `${getColor(props.type)}` : '#E7E6E9'};
  }
  :last-child {
    background-color: ${(props) =>
      props.activeTab === 'shiny' ? `${getColor(props.type)}` : '#E7E6E9'};
  }

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Td = styled.td`
  background: #f8f7fb;
  text-align: center;
`;
const Image = styled.img``;
const ChangePoke = (props) => {
  const [activeTab, setActiveTab] = useState('default');
  const data = props.data.sprites;
  const type = props.data.types[0].type.name;
  const onChangePoke = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      <Table>
        <Tr>
          <Th
            onClick={() => onChangePoke('default')}
            type={type}
            activeTab={activeTab}>
            Default
          </Th>
          <Th
            onClick={() => onChangePoke('shiny')}
            type={type}
            activeTab={activeTab}>
            Shiny
          </Th>
        </Tr>
        <Tr>
          <Td>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}>
              <Image
                src={
                  activeTab === 'default' ? data.back_default : data.back_shiny
                }
              />
            </motion.div>
          </Td>
          <Td>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}>
              <Image
                src={
                  activeTab === 'default'
                    ? data.front_default
                    : data.front_shiny
                }
              />
            </motion.div>
          </Td>
        </Tr>
      </Table>
    </>
  );
};

export default ChangePoke;
