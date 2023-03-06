import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Logout from '../pages/Auth/Logout'
import Register from '../pages/Auth/Register'
import Home from '../pages/Home'
import Tourguide from '../pages/services/Tourguide'
import Profile from '../pages/Users/Profile'
import Authed from '../services/Authed'
import Drivers from '../pages/Services/Drivers'
import CarList from '../pages/Services/Carlist'
import FAQ from '../pages/Services/FAQ'
import Artificier from '../pages/Artificier'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cars',
    element: <CarList />
  },
  {
    path: '/drivers',
    element: <Drivers />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '/about/teams',
    element: <Artificier />
  },
  {
    path: '/tour',
    element: <Tourguide />
  },
  {
    path: '/auth',
    element: <Authed />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '',
    element: <Authed />,
    children: [
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/logout',
        element: <Logout />
      }
    ]
  }
])
