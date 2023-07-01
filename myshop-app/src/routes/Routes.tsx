import { createBrowserRouter } from 'react-router-dom';

import { Home, Product, Cart, NotFound } from '../pages'
import PublicLayout from '../layout/PublicLayout';

export const routes = createBrowserRouter ([
 {
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/product/:id',
      element: <Product />
    },
    {
      path: '/cart',
      element: <Cart />
    },
  ]
 }
])