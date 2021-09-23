import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fcfcfc;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #552a03;
  font-size: 20px;

  font-family: 'RobotoSlab-Regular';
  line-height: 28px;

  width: 100%;
  max-width: 250px;
`;

export const RequestList = styled(FlatList)`
  padding: 32px 24px 16px;

  min-height: 100px;
`;

export const SubTitle = styled.Text`
  color: #552a03;
  font-size: 16px;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;
`;

export const TitleWrapper = styled.View`
  flex-direction: column;
`;

export const Message = styled.Text`
  color: #552a03;
  font-size: 16px;
  font-weight: bold;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;

  margin-top: 10px;
`;

export const ContainerCard = styled(RectButton)`
  width: 95%;
  margin: 0 auto;

  background: #ffff;

  border-radius: 6px;

  margin-bottom: 8px;

  justify-content: center;

  padding: 20px;
`;

export const CodeTitle = styled.Text`
  color: #552a03;
  font-size: 16px;
  font-weight: bold;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;
`;

export const UserTitle = styled.Text`
  color: #552a03;
  font-size: 16px;
  font-weight: bold;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;
`;

export const ActionButtons = styled.View`
  width: 90%;
  background: #ffff;
  margin: 0 auto;

  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 20px;
`;

export const StatusTitle = styled.Text`
  color: #552a03;
  font-size: 16px;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;

  margin-left: 10px;
`;

export const DescriptionText = styled.Text`
  color: #552a03;
  font-size: 16px;

  font-family: 'RobotoSlab-Regular';

  width: 100%;
  max-width: 250px;

  margin-left: 10px;
`;

export const ControlButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  padding: 10px;
`;
