import { useEffect, useState } from 'react';
import { Col, Image, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { mochUserFeed } from '../../utils/moch-user-feed';
import { VideoComponent } from '../../components/video';
import { getUserInfo } from '../../utils/fetch-data';
import { Loader } from '../../components/loader';
import { ListItem } from './components/list-item';

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
    (async () => {
      const data = await getUserInfo(name);
      setUserInfo(data);
      setLoading(false);
    })();
  }, [name]);

  if (loading) {
    return <Loader />;
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
              {userInfo.user.verified ? 'verified' : ''}
            </h2>
            <p className="m-0">{userInfo.user.nickname}</p>
          </div>
        </Col>
      </Row>
      <ul className="list-inline mb-0 ">
        <ListItem title="Following" count={userInfo.stats.followingCount} />
        <ListItem title="Followers" count={userInfo.stats.followerCount} />
        <ListItem title="Likes" count={userInfo.stats.followerCount} />
      </ul>
      <div>{userInfo.user.signature}</div>
      <h3 className="text-center my-2">Videos</h3>
      <Row>{feed}</Row>
    </Container>
  );
};
