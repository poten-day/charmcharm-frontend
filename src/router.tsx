import { FormPage, IdPage, PageLayout, ResultPage, RootPage } from '@/pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import FormSuccessPage from './pages/FormPage/SuccessPage';

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
      {
        path: '/:id/form/success',
        element: <FormSuccessPage />,
      },
      {
        path: '/*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);

export default router;
