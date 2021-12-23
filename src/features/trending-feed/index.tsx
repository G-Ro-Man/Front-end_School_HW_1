import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { TrendingPost } from './components/trending-post';
import { Header } from './styled';
import { getTrendingFeed } from '../../utils/fetch-data';

type HashtagProps = {
  id: string;
  name: string;
  title: string;
  cover: string;
};

type PostProps = {
  id: string;
  text: string;
  videoUrl: string;
  commentCount: number;
  diggCount: number;
  playCount: number;
  hashtags: Array<HashtagProps>;
  authorMeta: {
    avatar: string;
    nickName: string;
    name: string;
  };
  covers: {
    default: string;
  };
};

export const TrendingFeed = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function anyNameFunction() {
      const data = await getTrendingFeed();
      setFeed(data);
      setLoading(false);
    }
    anyNameFunction();
  }, []);

  if (loading) {
    return (
      <Container>
        <Header>Loading...</Header>
      </Container>
    );
  }

  const posts = feed.map((post: PostProps) => (
    <TrendingPost
      key={post.id}
      avatar={post.authorMeta.avatar}
      nickName={post.authorMeta.nickName}
      userName={post.authorMeta.name}
      text={post.text}
      hashtags={post.hashtags}
      commentCount={post.commentCount}
      diggCount={post.diggCount}
      cover={post.covers.default}
      videoUrl={post.videoUrl}
      playCount={post.playCount}
    />
  ));

  return (
    <Container>
      <Header>TikTuk</Header>
      {posts}
    </Container>
  );
};
