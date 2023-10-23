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
    path: '/register',
    element: <></>,
},
{
    path: '/testpage',
    element: <></>,
},
{
    path: '/testresult',
    element: <></>,
},
{
    path: '/animaldict',
    element: <></>,
},
{
    path: '/verify',
    element: <></>,
},
  {
      path: '/chat',
      element: <></>,
  },
  {
      path: '/roomateoption',
      element: <></>,
  },
  {
    path: '/roomatelist',
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


])

export const ProjectRouter = () => <RouterProvider router={Router} />
