import { Col, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heart, ChatDots } from 'react-bootstrap-icons';
import { NicknameWrapper, Wrapper } from './styled';

import { VideoComponent } from '../../../../components/video';
import { minimizeNumber } from '../../../../utils/minimize-number';

type HashtagProps = {
  id: string;
  name: string;
  title: string;
  cover: string;
};

type PostProps = {
  avatar: string;
  nickName: string;
  userName: string;
  text: string;
  hashtags: Array<HashtagProps>;
  commentCount: number;
  diggCount: number;
  cover: string;
  videoUrl: string;
  playCount: number;
};

const regExpHashtag = /#\S+/gi;

export const TrendingPost = ({
  avatar,
  nickName,
  userName,
  text,
  hashtags,
  commentCount,
  diggCount,
  cover,
  videoUrl,
  playCount,
}: PostProps) => {
  const parsedHashtags = hashtags.map(({ id, name }) => (
    <li key={id} className="list-inline-item">
      <Button className="p-0 text-dark" variant="link">
        #{name}{' '}
      </Button>
    </li>
  ));

  return (
    <Wrapper>
      <Col md={4}>
        <NicknameWrapper>
          <Link to={`user/${userName}`}>
            <Image width={50} className="me-2" src={avatar} roundedCircle />
            {nickName}
          </Link>
        </NicknameWrapper>
        <Row>
          <ul className="list-inline mb-0 ">
            <li className="list-inline-item me-2">
              {text.replaceAll(regExpHashtag, '')}
            </li>
            {parsedHashtags}
          </ul>
          <div className="d-flex align-items-center">
            <ChatDots className="me-1" /> {minimizeNumber(commentCount)}
          </div>
          <div className="d-flex align-items-center">
            <Heart className="me-1" /> {minimizeNumber(diggCount)}
          </div>
        </Row>
      </Col>
      <Col md={8} className="d-flex justify-content-center">
        <VideoComponent
          videoUrl={videoUrl}
          cover={cover}
          playCount={playCount}
        />
      </Col>
    </Wrapper>
  );
};
