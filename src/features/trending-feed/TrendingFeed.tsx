import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { getTrendingFeed } from '../../api/fetch-data';
import { Loader } from '../../components/loader';
import { TrendingPosts } from './components/TrendingPosts';

export const TrendingFeed: FC = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getTrendingFeed();
      setFeed(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Header>TikTuk</Header>
      <TrendingPosts posts={feed} />
    </Container>
  );
};

const Header = styled.h1`
  margin: 20px;
  padding: 20px;
  text-align: center;
  text-shadow: 1px 1px 1px #eb5e5e, -1px -1px 1px #78d0d6;
`;

Header.displayName = 'TrendingPostHeader';
