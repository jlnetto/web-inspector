import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import InspectionDetails from './InspectionDetails';
import { SWRConfig } from 'swr';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create = jest.fn(() => mockedAxios);

describe('InspectionDetails', () => {
  it.skip('should render details correclty', async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <InspectionDetails id="1" />
      </SWRConfig>
    );
    mockedAxios.get.mockResolvedValue({
      data: {
        status: 'done',
        urls: ['http://example.com', 'http://example.org'],
      },
    });

    await waitFor(() => {
      expect(screen.getByText('Done')).toBeInTheDocument();
      expect(screen.getByText('http://example.com')).toBeInTheDocument();
      expect(screen.getByText('http://example.org')).toBeInTheDocument();
    });
  });
});
