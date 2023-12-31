import Layout from '@/pages/Layout'
import Login from '@/pages/Login'

import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import Article from '@/pages/Article'
import Home from '@/pages/Home'
import Publish from '@/pages/Publish'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout></Layout></AuthRoute>,
    children: [
      {
        // path: 'home',
        element: <Home />,
        index: true
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'publish',
        element: <Publish />
      },

    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router