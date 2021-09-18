import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface CardRequestProps {
  request: any;
}

const CardRequest: React.FC<CardRequestProps> = ({
  request,
  ...rest
}: CardRequestProps) => {
  return (
    <Container {...rest}>
      <Text>Pedido #{request.code}</Text>
    </Container>
  );
};

export default CardRequest;
