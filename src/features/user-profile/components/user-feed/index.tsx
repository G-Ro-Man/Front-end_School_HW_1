import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Loader } from '../../../../components/loader';
import { VideoComponent } from '../../../../components/video';
import { getUserFeed } from '../../../../utils/fetch-data';

type VideoProps = {
  video: {
    id: string;
    cover: string;
    playAddr: string;
  };
  stats: {
    playCount: number;
  };
};

interface UserNameProps {
  name: string | undefined;
}

export const UserFeed: FC<UserNameProps> = ({ name }) => {
  const [userFeed, setUserFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getUserFeed(name);
      setUserFeed(data);
      setLoading(false);
    })();
  }, [name]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Row>
      {userFeed.map((item: VideoProps) => (
        <Col
          md={4}
          key={item.video.id}
          className="d-flex justify-content-center"
        >
          <VideoComponent
            cover={item.video.cover}
            videoUrl={item.video.playAddr}
            playCount={item.stats.playCount}
          />
        </Col>
      ))}
    </Row>
  );
};
