/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Container, CodeTitle } from './styles';

interface CardRequestProps {
  request: any;
}

const CardRequest: React.FC<CardRequestProps> = ({
  request,
  ...rest
}: CardRequestProps) => {
  return (
    <Container
      style={{
        elevation: 1,
      }}
      {...rest}
    >
      <CodeTitle>Pedido #{request.code}</CodeTitle>
    </Container>
  );
};

export default CardRequest;
