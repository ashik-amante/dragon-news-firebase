import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import Authproviders from './Providers/Authproviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authproviders>
      <RouterProvider router={routes}></RouterProvider>
    </Authproviders>
  </StrictMode>,
)
