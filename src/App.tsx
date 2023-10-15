import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter([
  {
      path: '/',
      element: <></>,
  },
  {
    path: '/login',
    element: <></>,
},
  {
      path: '/chat',
      element: <></>,
  },
  {
      path: '/roomate',
      element: <></>,
  },
  {
      path: '/group',
      element: <></>,
  },
  {
    path: '/notice',
    element: <></>,
},
{
    path: '/testpage',
    element: <></>,
},
{
    path: '/testpage',
    element: <></>,
},
])

export const ProjectRouter = () => <RouterProvider router={Router} />
