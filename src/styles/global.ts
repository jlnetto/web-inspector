import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 20px;
    background-color: #F5F5F5;
    font-family: 'Roboto', sans-serif;
  }
`;
export const FrameLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

export default GlobalStyles;
