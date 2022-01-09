import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './styled';

export const Loader: FC = () => (
  <Container>
    <Header>Loading...</Header>
  </Container>
);
