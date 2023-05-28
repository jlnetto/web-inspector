import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const AccordionContainer = styled.div``;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #007bff;
`;

export const ChevronIcon = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 4px 0 4px;
  border-color: #000 transparent transparent transparent;
  margin-left: auto;
  transition: transform 0.2s;
  ${({ expanded }: { expanded: boolean }) =>
    expanded && 'transform: rotate(180deg);'}
`;

export const AccordionContent = styled.div`
  background: #f5f5f5;
  padding: 10px 10px 20px 10px;
  display: none;
  ${({ expanded }: { expanded: boolean }) => expanded && 'display: block;'}
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyStateContent = styled.div`
  background: #f5f5f5;
  padding: 20px;
  width: 20%;
  text-align: center;
  border-radius: 10px;
`;
