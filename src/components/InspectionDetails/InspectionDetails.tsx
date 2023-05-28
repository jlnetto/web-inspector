import useSWR from 'swr';
import { fetcher } from '../../service/api/endpoints';
import {
  StatusContainer,
  Status,
  Container,
  UrlListContainer,
  UrlContainer,
  Loading,
} from './styles';

type InspectionDetailsProps = {
  id: string;
};

const InspectionDetails: React.FC<InspectionDetailsProps> = ({ id }) => {
  const { data, isLoading } = useSWR(`/crawl/${id}`, fetcher);

  if (!data || isLoading) return <Loading data-testid="loading"/>;

  return (
    <Container>
      <StatusContainer>
        <Status>Status:</Status>
        <span>
          {`${data.status.charAt(0).toUpperCase()}${data.status.slice(1)}`}
        </span>
      </StatusContainer>
      {data.urls.length > 0 && (
        <UrlContainer>
          <Status>URLs:</Status>
          <UrlListContainer>
            {data.urls.map((url: string, index: number) => (
              <span key={`${url}-${index}`}>{url}</span>
            ))}
          </UrlListContainer>
        </UrlContainer>
      )}
    </Container>
  );
};

export default InspectionDetails;
