import { useState, useEffect } from 'react';
import type { StoredData } from '../../types/core';
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  ChevronIcon,
  Container,
  EmptyStateContainer,
  EmptyStateContent,
  Title,
} from './styles';
import InspectionDetails from '../InspectionDetails/InspectionDetails';

const InspectionHistory = () => {
  const [lastKeywords, setLastKeywords] = useState<StoredData[]>([]);
  const [expandedItemId, setExpandedItemId] = useState<string>('');

  const toggleAccordion = (itemId: string) => {
    setExpandedItemId((prevExpandedItemId) =>
      prevExpandedItemId === itemId ? '' : itemId
    );
  };

  useEffect(() => {
    const storedKeywords = localStorage.getItem('lastKeywords');
    if (storedKeywords) {
      setLastKeywords(JSON.parse(storedKeywords));
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'lastKeywords') {
        const updatedKeywords = event.newValue
          ? JSON.parse(event.newValue)
          : [];
        setLastKeywords(updatedKeywords);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Container>
      <Title>Histórico de solicitações cadastradas</Title>
      {lastKeywords.length > 0 ? (
        <AccordionContainer>
          {lastKeywords.map(({ id, keyword }: StoredData) => (
            <AccordionItem key={id}>
              <AccordionHeader onClick={() => toggleAccordion(id)}>
                {keyword}
                <ChevronIcon expanded={expandedItemId === id} />
              </AccordionHeader>
              <AccordionContent expanded={expandedItemId === id}>
                <InspectionDetails id={id} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
      ) : (
        <EmptyStateContainer>
          <EmptyStateContent>No records</EmptyStateContent>
        </EmptyStateContainer>
      )}
    </Container>
  );
};

export default InspectionHistory;
