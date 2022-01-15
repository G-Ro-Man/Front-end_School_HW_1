import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { NicknameWrapper } from './styled';

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
