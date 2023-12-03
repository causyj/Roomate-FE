import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { TestPage } from './pages/testpage/TestPage'
import { TypeResult } from './pages/typeresult/TypeResult'
import { AnimalDictionary } from './pages/animaldict/AnimalDictionary'
import { Verify } from './pages/verify/Verify'
import { ChatList,  } from './pages/chat/ChatList'
import { RoommateRecommend } from './pages/roommatelist/RoommateRecommend'
import { RoommateOption } from './pages/roommatelist/RoommateOption'
import { Group } from './pages/group/Group'
import { Notice } from './pages/notice/Notice'
import BottomNavbar from './components/BottomNavBar/BottomNavBar'
import { ForPractice } from './forpractice/ForPractice'
import { ResultHome } from './pages/resulthome/ResultHome'
import { AnimalDictDetail } from './pages/animaldictdetail/AnimalDictDetail'
import { OtherPeople } from './pages/otherpeople/OtherPeople'
import { GroupDetail } from './pages/group/[group]/GroupDetail'
import { LandingPage } from './components/LandingPage'
import { Chatting } from './pages/chat/[nickname]/Chatting'
const Router = createBrowserRouter([
  {
      path: '/',
      element:<LandingPage/>
  },
  {
    path: '/home',
    element:<div><BottomNavbar/><Home/></div>
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
    element: <><BottomNavbar/><TestPage/></>
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
      element: <><BottomNavbar/><ChatList/></>,
  },
  {
    path: '/chat/:nickname',
    element: <><Chatting/></>,
},
  {
    path: '/roommatelist',
    element: <RoommateRecommend/>,
},
  {
      path: '/group',
      element: <Group/>,
  },
  {
    path: '/group/:group',
    element: <GroupDetail/>,
},
  
  {
    path: '/notice',
    element: <Notice/>,
},
{
    path: '/forpractice',
    element: <ForPractice/>,
},
{
    path: '/otherpeople',
    element: <OtherPeople/>,
},


])

export const ProjectRouter = () => <><RouterProvider router={Router} /></>

