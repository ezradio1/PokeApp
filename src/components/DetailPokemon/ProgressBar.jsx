import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;
const ContainerProgress = styled.div`
  width: 100%;
  height: 20px;
  padding: 0 !important;
  border-radius: 10px;
  background-color: #e7e6e9;
`;
const Progress = styled.div`
  height: 20px;
  border-radius: 10px;
  background-color: blue;
  background-color: ${(props) =>
    props.value <= 33 ? '#FF0D0D' : props.value >= 66 ? '#69B34C' : '#FF8E15'};
  width: ${(props) => `${props.value}%`};
  animation: progress 700ms ease-in 1;
  @keyframes progress {
    from {
      width: 10%;
    }
  }
`;

const Value = styled.p`
  margin-left: 10px;
  font-size: 15px;
`;
const ProgressBar = (props) => {
  console.log(props.value);
  return (
    <Container>
      <ContainerProgress>
        <Progress type={props.type} value={props.value} max='100' />
      </ContainerProgress>
      <Value>{props.value}</Value>
    </Container>
  );
};

export default ProgressBar;
