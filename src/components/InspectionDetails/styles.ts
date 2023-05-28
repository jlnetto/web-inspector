import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Status = styled.div`
  font-size: 12px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  span {
    font-weight: bold;
    font-size: 13px;
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const UrlListContainer = styled.div`
  font-size: 13px;
  max-height: 200px;
  overflow: auto;
  width: 100%;
  background: #fff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(
        50% 100%,
        farthest-side,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #808080;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  border-left: 4px solid white;
  background: transparent;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
