import styled from 'styled-components';

export const VideoWrapper = styled.div`
  max-width: 400px;
  position: relative;

  video {
    width: 100%;
    border-radius: 16px;
  }

  div {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #fff;
  }
`;

VideoWrapper.displayName = 'VideoWrapper';
