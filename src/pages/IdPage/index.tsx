import CountdownArea from '@/components/CountdownArea';
import { ErrorBoundary } from 'react-error-boundary';
import IdPageErrorFallback from './ErrorBoundary';

const IdPage = () => {
  return (
    <ErrorBoundary FallbackComponent={IdPageErrorFallback}>
      <CountdownArea />
    </ErrorBoundary>
  );
};

export default IdPage;
