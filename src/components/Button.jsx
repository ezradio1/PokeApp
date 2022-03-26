import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import LoadingIcon from '../assets/icon/loading.svg';
const ButtonCustom = styled.div`
  width: ${(props) =>
    props.shape === 'circle' ? '40px' : props.fluid ? '100%' : '140px'};
  height: ${(props) => (props.shape === 'circle' ? '40px' : '36px')};
  border-radius: ${(props) => (props.shape === 'circle' ? '50%' : '4px')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  background-color: ${(props) =>
    props.type === 'primary'
      ? '#1678c2'
      : props.type === 'secondary'
      ? '#eaae00'
      : props.type === 'negative'
      ? '#F70000'
      : '#dadada'};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  color: #fff;
  transition: 0.3s;
  :hover {
    opacity: ${(props) => (!props.disabled ? '0.8' : '')};
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  }
`;

const ButtonIcon = styled.img``;
const Loading = styled.img``;

const Button = (props) => {
  return (
    <>
      <ButtonCustom
        loading={props.loading}
        fluid={props.fluid}
        type={props.type}
        disabled={props.disabled || props.loading}
        shape={props.shape}
        onClick={props.disabled ? null : props.onClick}>
        {props.loading ? (
          <Loading src={LoadingIcon} />
        ) : props.onlyIcon ? (
          <ButtonIcon src={props.icon} />
        ) : (
          props.text
        )}
      </ButtonCustom>
    </>
  );
};

export default Button;
