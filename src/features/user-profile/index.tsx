import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserInfo } from './components/user-info';
import { UserFeed } from './components/user-feed';
import { Header } from '../../components/loader/styled';

export const UserProfile: FC = () => {
  const { name } = useParams();

  return (
    <Container>
      <UserInfo name={name} />
      <Header>Videos</Header>
      <UserFeed name={name} />
    </Container>
  );
};
