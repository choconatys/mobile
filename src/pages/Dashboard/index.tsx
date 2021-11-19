/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
  ContainerCard,
  ActionButtons,
  ControlButton,
  StatusTitle,
  DescriptionText,
  CodeTitle,
} from './styles';
import api from '../../services/api';

enum RequestTypes {
  AGUARDANDO_CONFIRMACAO = 'AGUARDANDO_CONFIRMACAO',
  EM_PRODUCAO = 'EM_PRODUCAO',
  PRONTO_PARA_ENVIO = 'PRONTO_PARA_ENVIO',
  ENVIADO = 'ENVIADO',
}

const Dashboard: React.FC = () => {
  const [requests, setRequests] = useState();
  const [message, setMessage] = useState('');
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
      .get('/requests')
      .then((response: any) => {
        let newArray: any = [];

        if (response.data.data.requests.length <= 0) {
          setMessage('Nenhum pedido encontrado!');
        } else {
          response.data.data.requests.map((request: any) => {
            let item = request[String(Object.keys(request))];

            newArray.push(item);
          });

          setRequests(newArray);
        }
      })
      .catch(e => console.log(e));
  }, []);

  const toggleStatus = async (request: any) => {
    if (request.status !== RequestTypes.ENVIADO) {
      // let newArray: any = [];

      await api
        .patch(`/requests/status/${request.code}`)
        .then(async (_: any) => {
          await api
            .get('/requests')
            .then((response: any) => {
              let newArray: any = [];

              if (response.data.data.requests.length <= 0) {
                setMessage('Nenhum pedido encontrado!');
              } else {
                response.data.data.requests.map((request: any) => {
                  let item = request[String(Object.keys(request))];

                  newArray.push(item);
                });

                setRequests(newArray);
              }
            })
            .catch(e => console.log(e));
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

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
          <ContainerCard
            style={{
              elevation: 1,
              opacity: item.status === RequestTypes.ENVIADO ? 0.5 : 1,
            }}
          >
            <CodeTitle>
              Pedido de {item.username} - #{item.code}
            </CodeTitle>
            <DescriptionText>{item.data}</DescriptionText>
            {item.status === RequestTypes.AGUARDANDO_CONFIRMACAO && (
              <StatusTitle>Aguardando...</StatusTitle>
            )}
            {item.status === RequestTypes.EM_PRODUCAO && (
              <StatusTitle>Em produção</StatusTitle>
            )}
            {item.status === RequestTypes.PRONTO_PARA_ENVIO && (
              <StatusTitle>Pronto p/ envio</StatusTitle>
            )}
            {item.status === RequestTypes.ENVIADO && (
              <StatusTitle>Enviado</StatusTitle>
            )}

            <ActionButtons>
              {item.status === RequestTypes.AGUARDANDO_CONFIRMACAO && (
                <>
                  <ControlButton onPress={() => toggleStatus(item)}>
                    <Icon name="play" size={30} color="#ffaaba" />
                    <StatusTitle>Confirmar Pedido</StatusTitle>
                  </ControlButton>
                </>
              )}
              {item.status === RequestTypes.EM_PRODUCAO && (
                <>
                  <ControlButton onPress={() => toggleStatus(item)}>
                    <Icon name="play" size={30} color="#ffaaba" />
                    <StatusTitle>Em produção</StatusTitle>
                  </ControlButton>
                </>
              )}

              {item.status === RequestTypes.PRONTO_PARA_ENVIO && (
                <>
                  <ControlButton onPress={() => toggleStatus(item)}>
                    <Icon name="play" size={30} color="#ffaaba" />
                    <StatusTitle>Pronto p/ envio</StatusTitle>
                  </ControlButton>
                </>
              )}

              {item.status === RequestTypes.ENVIADO && (
                <>
                  <ControlButton>
                    <Icon name="check" size={30} color="#ffaaba" />
                    <StatusTitle>Pedido finalizado!</StatusTitle>
                  </ControlButton>
                </>
              )}
            </ActionButtons>
          </ContainerCard>
        )}
      />
    </Container>
  );
};

export default Dashboard;
