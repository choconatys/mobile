/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 0 16px;

  background: #ffff;

  border-width: 2px;
  border-color: #d8d8d8;
  border-radius: 10px;

  margin-bottom: 8px;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ffaaba;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: #d8d8d8;

  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
