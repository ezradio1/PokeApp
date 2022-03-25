import React, { useState } from 'react';
import styled from '@emotion/styled';
import getColor from '../../const/getColor';

const Table = styled.table`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border-radius: 4px;
`;

const Th = styled.th`
  width: 50%;
  background-color: ${(props) => `${getColor(props.type)}`};
  border-radius: 4px;
  height: 40px;
  color: #fff;
  :hover {
    cursoer: pointer;
  }
`;

const Td = styled.td`
  text-align: center;
`;
const Image = styled.img``;
const ChangePoke = (props) => {
  const [state, setState] = useState('default');
  const data = props.data.sprites;
  console.log(data);
  const type = props.data.types[0].type.name;
  console.log(type);

  const onChangePoke = (value) => {
    setState(value);
  };
  return (
    <>
      <Table>
        <tr>
          <Th onClick={() => onChangePoke('default')} type={type}>
            Default
          </Th>
          <Th onClick={() => onChangePoke('shiny')} type={type}>
            Shiny
          </Th>
        </tr>
        <tr>
          <Td>
            {}
            <Image
              src={state === 'default' ? data.back_default : data.back_shiny}
            />
          </Td>
          <Td>
            <Image
              src={state === 'default' ? data.front_default : data.front_shiny}
            />
          </Td>
        </tr>
      </Table>
    </>
  );
};

export default ChangePoke;
