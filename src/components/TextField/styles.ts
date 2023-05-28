import styled from 'styled-components';

export const StyledTextField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none !important;
    border: 2px solid #007bff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
