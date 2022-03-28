import React from 'react';
import styled from '@emotion/styled';
import ProgressBar from './ProgressBar';
const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 22px;
`;

const Table = styled.table`
  width: 100%;
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
`;
const Tr = styled.tr``;
const Td = styled.td`
  border-right: 2px solid #d4d4d4;
  :last-child {
    border: none;
  }
  :first-of-type {
    width: 20%;
  }
`;

const Label = styled.div`
  text-transform: capitalize;
  text-align: right;
  font-weight: 500;
  padding: 12px 15px;
  font-size: 15px;
  @media (max-width: 960px) {
    padding: 12px 10px;
    font-size: 12px;
  }
`;

const Statistic = (props) => {
  const data = props.data.stats;
  const type = props.data.types[0].type.name;
  const statistic = [
    data[0].base_stat,
    data[1].base_stat,
    data[2].base_stat,
    data[3].base_stat,
    data[4].base_stat,
    data[5].base_stat,
  ];

  const max = Math.max(...statistic) > 100 ? Math.max(...statistic) : 100;
  return (
    <>
      <Title>Base Statistic</Title>
      <Table>
        <tbody>
          <Tr>
            <Td>
              <Label>{data[0].stat.name}</Label>
            </Td>
            <Td>
              <Label>
                <ProgressBar type={type} value={statistic[0]} max={max} />
              </Label>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Label>{data[1].stat.name}</Label>
            </Td>
            <Td>
              <Label>
                <ProgressBar type={type} value={statistic[1]} max={max} />
              </Label>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Label>{data[2].stat.name}</Label>
            </Td>
            <Td>
              <Label>
                <ProgressBar type={type} value={statistic[2]} max={max} />
              </Label>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Label>{data[3].stat.name}</Label>
            </Td>
            <Td>
              <Label>
                <ProgressBar type={type} value={statistic[3]} max={max} />
              </Label>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Label>{data[4].stat.name}</Label>
            </Td>
            <Td>
              <Label>
                <ProgressBar type={type} value={statistic[4]} max={max} />
              </Label>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Label>{data[5].stat.name}</Label>
            </Td>
            <Td>
              <Label>
                <ProgressBar type={type} value={statistic[5]} max={max} />
              </Label>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </>
  );
};

export default Statistic;
