import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Logout from '../pages/Auth/Logout'
import Register from '../pages/Auth/Register'
import Home from '../pages/Home'
import Profile from '../pages/Users/Profile'
import Authed from '../services/Authed'
import Guest from '../services/Guest'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth',
    element: <Guest />,
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
