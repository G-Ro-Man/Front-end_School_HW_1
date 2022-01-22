import { FC, useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { getUserInfo } from '../../../api/fetch-data';
import { Loader } from '../../../components/loader';

type UserInfoProps = {
  avatarThumb: string;
  uniqueId: string;
  verified: boolean;
  nickname: string;
  signature: string;
};

interface UserProps {
  name: string | undefined;
}

export const UserInfo: FC<UserProps> = ({ name }) => {
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

  return (
    <>
      <Row className="mt-4">
        <Col className="d-flex align-items-center mb-2">
          <Image
            width={100}
            className="me-4"
            src={userInfo.avatarThumb}
            roundedCircle
          />
          <div>
            <h2>
              {userInfo.uniqueId} {userInfo.verified ? 'verified' : ''}
            </h2>
            <p className="m-0">{userInfo.nickname}</p>
          </div>
        </Col>
      </Row>
      <div>{userInfo.signature}</div>
    </>
  );
};
