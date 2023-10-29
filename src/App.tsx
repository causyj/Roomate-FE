import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { TestPage } from './pages/testpage/TestPage'
import { TestResult } from './pages/testresult/TestResult'
import { AnimalDictionary } from './pages/animaldict/AnimalDictionary'
import { Verify } from './pages/verify/Verify'
import { Chat } from './pages/chat/Chat'
import { RoomateOption } from './pages/roomateoption/RoomateOption'
import { RoomateRecommend } from './pages/roomatelist/RoomateRecommend'
import { GroupList } from './pages/group/GroupList'
import { Notice } from './pages/notice/Notice'
import BottomNavbar from './components/BottomNavBar/BottomNavBar'
const Router = createBrowserRouter([
  {
      path: '/',
      element:<Home/>
  },
  {
    path: '/login',
    element: <Login/>,
  },
{
    path: '/register',
    element: <Register/>,
},
{
    path: '/testpage',
    element: <TestPage/>,
},
{
    path: '/testresult',
    element: <TestResult/>,
},
{
    path: '/animaldict',
    element: <AnimalDictionary/>,
            
},
{
    path: '/verify',
    element: <Verify/>,
},
  {
      path: '/chat',
      element: <><BottomNavbar/><Chat/></>,
  },
  {
      path: '/roomateoption',
      element: <RoomateOption/>,
  },
  {
    path: '/roomatelist',
    element: <RoomateRecommend/>,
},
  {
      path: '/group',
      element: <GroupList/>,
  },
  
  {
    path: '/notice',
    element: <Notice/>,
},


])

export const ProjectRouter = () => <><BottomNavbar/><RouterProvider router={Router} /></>

