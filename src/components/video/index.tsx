import { FC } from 'react';
import { Play as PlayIcon } from 'react-bootstrap-icons';
import { minimizeNumber } from '../../utils/minimize-number';
import { VideoInfo, VideoWrapper } from './styled';

type VideoProps = {
  videoUrl: string;
  cover: string;
  playCount: number;
};

export const VideoComponent: FC<VideoProps> = ({
  videoUrl,
  cover,
  playCount,
}) => (
  <VideoWrapper>
    <video src={videoUrl} poster={cover} controls loop />
    <VideoInfo>
      <PlayIcon size={26} />
      {minimizeNumber(playCount)}
    </VideoInfo>
  </VideoWrapper>
);
