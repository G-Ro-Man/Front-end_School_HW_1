/* eslint-disable implicit-arrow-linebreak */
import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface HashtagProps {
  hashtagId: string;
  hashtagName: string;
}

interface Props {
  text: string;
  hashtags: Array<HashtagProps> | undefined;
}

const regExpHashtag = /#\S+/gi;

export const Hashtags: FC<Props> = ({ text, hashtags }) => {
  if (!hashtags) {
    return null;
  }

  const parsedHashtags = hashtags.map(
    ({ hashtagId, hashtagName }) =>
      hashtagName && (
        <li
          key={hashtagId + Date.now() + hashtagName}
          className="list-inline-item"
        >
          <Button className="p-0 text-dark" variant="link">
            #{hashtagName}{' '}
          </Button>
        </li>
      )
  );

  return (
    <ul className="list-inline mb-0 ">
      <li className="list-inline-item me-2">
        {text.replaceAll(regExpHashtag, '')}
      </li>
      {parsedHashtags}
    </ul>
  );
};
