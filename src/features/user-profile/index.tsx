import { useEffect, useState } from 'react';
import { Col, Image, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { mochUserFeed } from '../../utils/moch-user-feed';
import { minimizeNumber } from '../../utils/minimize-number';
import { VideoComponent } from '../../components/video';
import { Header } from './styled';
import { getUserInfo } from '../../utils/fetch-data';

type UserInfoProps = {
  user: {
    avatarThumb: string;
    uniqueId: string;
    verified: boolean;
    nickname: string;
    signature: string;
  };
  stats: {
    followingCount: number;
    followerCount: number;
    heartCount: number;
  };
};

export const UserProfile = () => {
  const { name } = useParams();
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function anyNameFunction() {
      const data = await getUserInfo(name);
      setUserInfo(data);
      setLoading(false);
    }
    anyNameFunction();
  }, [name]);

  if (loading) {
    return (
      <Container>
        <Header>Loading...</Header>
      </Container>
    );
  }

  const userFeed = mochUserFeed;

  const feed = userFeed.map((item) => (
    <Col md={4} key={item.id} className="d-flex justify-content-center">
      <VideoComponent
        cover={item.video.cover}
        videoUrl={item.video.playAddr}
        playCount={item.stats.playCount}
      />
    </Col>
  ));

  return (
    <Container>
      <Row className="mt-4">
        <Col className="d-flex align-items-center mb-2">
          <Image
            width={100}
            className="me-4"
            src={userInfo.user.avatarThumb}
            roundedCircle
          />
          <div>
            <h2>
              {userInfo.user.uniqueId}{' '}
              {userInfo.user.verified ? 'verified' : null}
            </h2>
            <p className="m-0">{userInfo.user.nickname}</p>
          </div>
        </Col>
      </Row>
      <ul className="list-inline mb-0 ">
        <li className="list-inline-item me-2">
          <strong>{minimizeNumber(userInfo.stats.followingCount)}</strong>{' '}
          Following
        </li>
        <li className="list-inline-item me-2">
          <strong>{minimizeNumber(userInfo.stats.followerCount)}</strong>{' '}
          Followers
        </li>
        <li className="list-inline-item me-2">
          <strong>{minimizeNumber(userInfo.stats.heartCount)}</strong> Likes
        </li>
      </ul>
      <div>{userInfo.user.signature}</div>
      <h3 className="text-center my-2">Videos</h3>
      <Row>{feed}</Row>
    </Container>
  );
};
