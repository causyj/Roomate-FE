import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { TestPage } from './pages/testpage/TestPage'
import { AnimalDictionary } from './pages/animaldict/AnimalDictionary'
import { Verify } from './pages/verify/Verify'
import { ChatList,  } from './pages/chat/ChatList'
import { RoommateRecommend } from './pages/roommatelist/RoommateRecommend'
import { Group } from './pages/group/Group'
import { Notice } from './pages/notice/Notice'
import BottomNavbar from './components/BottomNavBar/BottomNavBar'
import { ForPractice } from './forpractice/ForPractice'
import { ResultHome } from './pages/resulthome/ResultHome'
import { AnimalDictDetail } from './pages/animaldict/[animal]/AnimalDictDetail'
import { GroupDetail } from './pages/group/[group]/GroupDetail'
import { LandingPage } from './components/LandingPage'
import { Chatting } from './pages/chat/[apply_id]/Chatting'
import { ResultAnother } from './pages/resulthome/[nickname]/ResultAnother'
import { RecommendIntro } from './recommendIntro/RecommendIntro'
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
    path: '/roommatelist',
    element: <><BottomNavbar/><RoommateRecommend/></>,
},
{
    path: '/recommendIntro',
    element: <><RecommendIntro/></>,
},
{
    path: '/resulthome',
    element: <><BottomNavbar/><ResultHome/></>,
},
{
    path: '/resulthome/:nickname',
    element: <><BottomNavbar/><ResultAnother/></>,
},
{
    path: '/chat',
    element: <><BottomNavbar/><ChatList/></>,
},
{
  path: '/chat/:apply_id',
  element: <><Chatting/></>,
},
{
    path: '/animaldict',
    element: <><BottomNavbar/><AnimalDictionary/></>
            
},
{
    path: '/animaldict/:animal',
    element: <AnimalDictDetail/>
            
},
{
    path: '/testpage',
    element: <TestPage/>
},




{
    path: '/verify',
    element: <Verify/>,
},
  
{
    path: '/roommatelist',
    element: <><BottomNavbar/><RoommateRecommend/>,</>
},
  {
      path: '/group',
      element: <><BottomNavbar/><Group/></>
  },
  {
    path: '/group/:group',
    element: <GroupDetail/>,
},
  
  {
    path: '/notice',
    element: <><BottomNavbar/><Notice/></>
},
{
    path: '/forpractice',
    element: <ForPractice/>,
},



])

export const ProjectRouter = () => <><RouterProvider router={Router} /></>

