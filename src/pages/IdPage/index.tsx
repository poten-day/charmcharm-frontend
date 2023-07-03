import { ErrorBoundary } from 'react-error-boundary';
import CountdownArea from '@components/CountdownArea';
import IdPageErrorFallback from './ErrorBoundary';

const IdPage = () => {
  return (
    <ErrorBoundary FallbackComponent={IdPageErrorFallback}>
      <CountdownArea />
    </ErrorBoundary>
  );
};

export default IdPage;
