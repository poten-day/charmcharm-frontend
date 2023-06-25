import { FormPage, IdPage, PageLayout, ResultPage, RootPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <RootPage />,
      },
      {
        path: '/:id',
        element: <IdPage />,
      },
      {
        path: '/:id/result',
        element: <ResultPage />,
      },
      {
        path: '/:id/form',
        element: <FormPage />,
      },
    ],
  },
]);

export default router;
