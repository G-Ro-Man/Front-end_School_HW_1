/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ChatDots, Heart } from 'react-bootstrap-icons';
import { CountView, Hashtags, Nickname } from '..';
import { PostWrapper } from './styled';
import { VideoComponent } from '../../../../components/video';

type HashtagProps = {
  hashtagId: string;
  hashtagName: string;
};

type PostProps = {
  id: string;
  desc: string;
  stats: {
    commentCount: number;
    diggCount: number;
    playCount: number;
  };
  textExtra: Array<HashtagProps>;
  author: {
    avatarThumb: string;
    nickname: string;
    uniqueId: string;
  };
  video: {
    cover: string;
    playAddr: string;
  };
};

interface IPosts {
  posts: Array<PostProps>;
}

export const TrendingPosts: FC<IPosts> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <>
      {posts.map((post: PostProps) => (
        <PostWrapper key={post.id}>
          <Col md={4}>
            <Nickname
              avatar={post.author.avatarThumb}
              nickName={post.author.nickname}
              userName={post.author.uniqueId}
            />
            <Row>
              <Hashtags text={post.desc} hashtags={post.textExtra} />
              <CountView count={post.stats.commentCount}>
                <ChatDots className="me-1" />
              </CountView>
              <CountView count={post.stats.diggCount}>
                <Heart className="me-1" />
              </CountView>
            </Row>
          </Col>
          <Col md={8} className="d-flex justify-content-center">
            <VideoComponent
              videoUrl={post.video.playAddr}
              cover={post.video.cover}
              playCount={post.stats.playCount}
            />
          </Col>
        </PostWrapper>
      ))}
    </>
  );
};
