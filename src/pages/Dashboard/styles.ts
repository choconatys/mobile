import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
// import { FlatList } from 'react-native-gesture-handler';

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

// export const RequestList = styled(FlatList as new () => FlatList<Provider>)`
//   padding: 32px 24px 16px;
// `;

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
