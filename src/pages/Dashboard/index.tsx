import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import CardRequest from '../../components/CardRequest';

import Icon from 'react-native-vector-icons/Feather';

import { Container, Header, HeaderTitle, RequestList } from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Gerenciador de Pedidos</HeaderTitle>

        <RectButton>
          <Icon name="log-out" size={30} color="#ffaaba" />
        </RectButton>
      </Header>
      <RequestList
        data={['', '', '', '', '', '', '', '', '', '', '', '', '']}
        renderItem={() => <CardRequest />}
      />
    </Container>
  );
};

export default Dashboard;
