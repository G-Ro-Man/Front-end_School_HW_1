import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { UserInfo } from './components/UserInfo';
import { UserFeed } from './components/UserFeed';

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

const Header = styled.h1`
  margin: 20px;
  padding: 20px;
  text-align: center;
  text-shadow: 1px 1px 1px #eb5e5e, -1px -1px 1px #78d0d6;
`;
Header.displayName = 'ProfileHeader';
