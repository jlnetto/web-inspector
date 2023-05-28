import styled, { keyframes } from 'styled-components';

export const StyledButton = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #808080;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
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
