import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { routes } from "./routes/Routes"

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#cc0000',
        },
      }}
    >
      <RouterProvider router={routes} />
    </ConfigProvider>
  </React.StrictMode>,
)
