import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 20px 30px ${Platform.OS === 'android' ? 100 : 40}px;
  background: #fcfcfc;
`;

export const Title = styled.Text`
  color: #552a03;

  font-family: 'RobotoSlab-Medium';
  font-size: 28px;

  margin: 64px 0 0;
`;

export const SubTitle = styled.Text`
  color: #552a03;

  font-family: 'RobotoSlab-Regular';
  font-size: 12px;

  margin: 0 0 24px 0;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4edef;

  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;
