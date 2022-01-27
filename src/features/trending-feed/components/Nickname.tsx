import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

interface NicknameProps {
  avatar: string;
  nickName: string;
  userName: string;
}

export const Nickname: FC<NicknameProps> = ({ avatar, userName, nickName }) => (
  <NicknameWrapper>
    <Link to={`user/${userName}`}>
      <Image width={50} className="me-2" src={avatar} roundedCircle />
      {nickName}
    </Link>
  </NicknameWrapper>
);

const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;

  a {
    text-decoration: none;
    color: #111;
  }
`;

NicknameWrapper.displayName = 'TrendingPostNicknameWrapper';
