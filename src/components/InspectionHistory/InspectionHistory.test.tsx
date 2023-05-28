import { render, screen } from '@testing-library/react';
import InspectionHistory from './InspectionHistory';

describe('InspectionHistory', () => {
  it('renders title', () => {
    const { asFragment } = render(<InspectionHistory />);
    const titleElement = screen.getByText(
      'Histórico de solicitações cadastradas'
    );
    
    expect(titleElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders empty state when there are no records', () => {
    const { asFragment } = render(<InspectionHistory />);
    const emptyStateElement = screen.getByText('No records');
    
    expect(emptyStateElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders accordion items when there are records', () => {
    const storedData = [
      { id: '1', keyword: 'Keyword 1' },
      { id: '2', keyword: 'Keyword 2' },
    ];
    localStorage.setItem('lastKeywords', JSON.stringify(storedData));
    const { asFragment } = render(<InspectionHistory />);
    const accordionHeaders = screen.getAllByText(/Keyword \d/);

    expect(accordionHeaders.length).toBe(storedData.length);
    expect(asFragment()).toMatchSnapshot();
  });

});
