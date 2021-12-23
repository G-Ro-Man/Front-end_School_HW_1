import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Wrapper = styled(Row)`
  margin: 20px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 2px 2px 4px 4px #eee;
`;

Wrapper.displayName = 'TrendingPostWrapper';

export const NicknameWrapper = styled.div`
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
