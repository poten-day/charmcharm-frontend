import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
    mutations: {
      retry: false,
    },
  },
});

const App = () => {
  ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID);

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send('pageview');
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
