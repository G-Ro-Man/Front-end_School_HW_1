import { minimizeNumber } from '../../../../utils/minimize-number';

interface ListItemProps {
  title: string;
  count: number;
}

export const ListItem = ({ title, count }: ListItemProps) => (
  <li className="list-inline-item me-2">
    <strong>{minimizeNumber(count)}</strong> {title}
  </li>
);
