import { ErrorBoundary } from 'react-error-boundary';
import ResultContainer from '@/components/Result/ResultContainer';
import ResultPageErrorFallback from './ErrorBoundary';

const ResultPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ResultPageErrorFallback}>
      <ResultContainer />
    </ErrorBoundary>
  );
};

export default ResultPage;
