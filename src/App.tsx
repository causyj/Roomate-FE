import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { TestPage } from './pages/testpage/TestPage'
import { TypeResult } from './pages/typeresult/TypeResult'
import { AnimalDictionary } from './pages/animaldict/AnimalDictionary'
import { Verify } from './pages/verify/Verify'
import { Chat } from './pages/chat/Chat'
import { RoomateOption } from './pages/roomateoption/RoomateOption'
import { RoomateRecommend } from './pages/roomatelist/RoomateRecommend'
import { GroupList } from './pages/group/GroupList'
import { Notice } from './pages/notice/Notice'
import BottomNavbar from './components/BottomNavBar/BottomNavBar'
import { ForPractice } from './forpractice/ForPractice'
import { ResultHome } from './pages/resulthome/ResultHome'
import { AnimalDictDetail } from './pages/animaldictdetail/AnimalDictDetail'
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
    element: <><BottomNavbar/><TestPage/>,</>
},
{
    path: '/resulthome',
    element: <ResultHome/>,
},
{
    path: '/typeresult',
    element: <TypeResult/>,
},
{
    path: '/animaldict',
    element: <AnimalDictionary/>,
            
},
{
    path: '/animaldictdetail/:animal',
    element: <AnimalDictDetail/>,
            
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
{
    path: '/forpractice',
    element: <ForPractice/>,
},


])

export const ProjectRouter = () => <><BottomNavbar/><RouterProvider router={Router} /></>

