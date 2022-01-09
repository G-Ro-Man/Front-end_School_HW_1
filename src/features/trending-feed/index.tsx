import { FC, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getTrendingFeed } from '../../utils/fetch-data';
import { Loader } from '../../components/loader';
import { Header } from './styled';
import { TrendingPosts } from './components/trending-posts';

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
