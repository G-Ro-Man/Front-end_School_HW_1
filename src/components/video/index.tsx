import { Play } from 'react-bootstrap-icons';
import { minimizeNumber } from '../../utils/minimize-number';
import { VideoWrapper } from './styled';

type VideoProps = {
  cover: string;
  videoUrl: string;
  playCount: number;
};

export const VideoComponent = ({ videoUrl, cover, playCount }: VideoProps) => (
  <VideoWrapper>
    <video src={videoUrl} poster={cover} controls loop />
    <div>
      <Play size={26} />
      {minimizeNumber(playCount)}
    </div>
  </VideoWrapper>
);
