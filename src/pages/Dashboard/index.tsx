import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
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
} from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [requests, setRequests] = useState();
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get('/requests').then((response: any) => {
      let newArray: any = [];

      response.data.map((request: any) => {
        let item = request[String(Object.keys(request))];

        newArray.push(item);
      });

      setRequests(newArray);
    });
  }, []);

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
      <FlatList
        data={requests}
        renderItem={({ item }) => (
          <CardRequest request={item} key={item.code} />
        )}
      />
    </Container>
  );
};

export default Dashboard;
