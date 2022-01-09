import { FC } from 'react';
import { minimizeNumber } from '../../../../utils/minimize-number';

interface CountProps {
  count: number;
}
export const CountView: FC<CountProps> = ({ children, count }) => (
  <div className="d-flex align-items-center">
    {children} {minimizeNumber(count)}
  </div>
);
