import styled from 'styled-components';

export const BannerContainer = styled.div<{ type: 'error' | 'success' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${({ type }) => (type === 'error' ? '#ffebee' : '#e8f5e9')};
  color: ${({ type }) => (type === 'error' ? '#b71c1c' : '#2e7d32')};
  gap: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const Message = styled.p`
  margin: 0;
`;

export const CloseWrapper = styled.div`
  display: flex;
  align-self: baseline;
  cursor: pointer;
`;
