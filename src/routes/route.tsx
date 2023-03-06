import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Logout from '../pages/Auth/Logout'
import Register from '../pages/Auth/Register'
import Home from '../pages/Home'
import Profile from '../pages/Users/Profile'
import Authed from '../services/Authed'
<<<<<<< HEAD
import Drivers from '../pages/Services/Drivers'
import CarList from '../pages/Services/Carlist'
=======
import FAQ from '../pages/Services/FAQ'
>>>>>>> 5f3911e (membuat FAQ)

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
<<<<<<< HEAD
    path: '/cars',
    element: <CarList />
  },
  {
    path: '/drivers',
    element: <Drivers />
  },
  {
    path: '/auth',
    element: <Authed />,
=======
    path: '/FAQ',
    element: <FAQ />,
>>>>>>> 5f3911e (membuat FAQ)
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
