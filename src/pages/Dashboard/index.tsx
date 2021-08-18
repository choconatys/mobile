import React from 'react';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
// import CardRequest from '../../components/CardRequest';

import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  TitleWrapper,
  SubTitle,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <HeaderTitle>Gerenciador de Pedidos</HeaderTitle>
          <SubTitle>Bem-vindo {user.name}!</SubTitle>
        </TitleWrapper>

        <RectButton
          onPress={() => {
            Alert.alert(
              '',
              'Deseja realmente Sair?',
              [
                {
                  text: 'SAIR',
                  onPress: () => signOut(),
                  style: 'cancel',
                },
              ],
              {
                cancelable: true,
              },
            );
          }}
        >
          <Icon name="log-out" size={30} color="#ffaaba" />
        </RectButton>
      </Header>
      {/* <RequestList
        data={['', '', '', '', '', '', '', '', '', '', '', '', '']}
        renderItem={() => <CardRequest key={''} />}
      /> */}
    </Container>
  );
};

export default Dashboard;
