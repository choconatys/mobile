import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 95%;
  margin: 0 auto;

  background: #ffff;

  border-radius: 6px;

  margin-bottom: 8px;

  justify-content: center;

  padding: 20px 10px;
`;

export const CodeTitle = styled.Text`
  color: #552a03;
  font-size: 16px;
  font-weight: bold;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;
`;
