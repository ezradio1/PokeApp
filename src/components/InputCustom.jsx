import React from 'react';
import styled from '@emotion/styled';

const Label = styled.p`
  font-size: 15px;
`;
const Input = styled.input`
  width: 100%;
  font-family: 'Poppins' !important;
  border-radius: 5px;
  background-color: white;
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid ${(props) => (props.isError ? 'red' : '#d4d4d4')};
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
  :focus {
    border: 1px solid ${(props) => (props.isError ? 'red' : ' #1678c2')};
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  margin-bottom: 20px;
`;
const InputCustom = ({ value, onChange, placeholder, errorMsg }) => {
  return (
    <div>
      <Label>Nick Name</Label>
      <Input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? ''}
        isError={errorMsg === '' ? false : true}></Input>
      <ErrorText>{errorMsg}</ErrorText>
    </div>
  );
};

export default InputCustom;
