import { PATH } from '@constants/path';
import { Complete } from '@pages/Complete';
import { Error } from '@pages/Error';
import { Order } from '@pages/Order';
import { Home } from '@pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import { AutoNavigateToHome } from '@components/common/AutoNavigate';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.ORDER,
        element: <Order />,
      },
      {
        path: PATH.COMPLETE,
        element: (
          <AutoNavigateToHome>
            <Complete />
          </AutoNavigateToHome>
        ),
      },
      {
        path: PATH.ERROR,
        element: (
          <AutoNavigateToHome>
            <Error />
          </AutoNavigateToHome>
        ),
      },
    ],
  },
]);

export default router;
