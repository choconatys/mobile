import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import CardRequest from '../../components/CardRequest';

import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  TitleWrapper,
  SubTitle,
  Message,
  RequestList,
} from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [requests, setRequests] = useState();
  const [message, setMessage] = useState('');
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get('/requests').then((response: any) => {
      let newArray: any = [];

      if (response.data.requests.length <= 0) {
        setMessage('Nenhum pedido encontrado!');
      } else {
        response.data.requests.map((request: any) => {
          let item = request[String(Object.keys(request))];

          newArray.push(item);
        });

        setRequests(newArray);
      }
    });
  }, []);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <HeaderTitle>Gerenciador de Pedidos</HeaderTitle>
          <SubTitle>Bem-vindo {user.name}!</SubTitle>
          <Message>{message}</Message>
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
      <RequestList
        data={requests}
        renderItem={({ item }: any) => (
          <CardRequest request={item} key={item.code} />
        )}
      />
    </Container>
  );
};

export default Dashboard;
