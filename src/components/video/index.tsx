import { Play as PlayIcon } from 'react-bootstrap-icons';
import { minimizeNumber } from '../../utils/minimize-number';
import { VideoInfo, VideoWrapper } from './styled';

type VideoProps = {
  cover: string;
  videoUrl: string;
  playCount: number;
};

export const VideoComponent = ({ videoUrl, cover, playCount }: VideoProps) => (
  <VideoWrapper>
    <video src={videoUrl} poster={cover} controls loop />
    <VideoInfo>
      <PlayIcon size={26} />
      {minimizeNumber(playCount)}
    </VideoInfo>
  </VideoWrapper>
);
