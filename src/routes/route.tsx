/* eslint-disable @typescript-eslint/promise-function-async */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProfileLoader from '../pages/Users/ProfileLoader'
const NotFound = lazy(() => import('../pages/NotFound'))
const FakeOrderProcess = lazy(
  () => import('../pages/Services/FakeOrderProcess')
)
const Login = lazy(() => import('../pages/Auth/Login'))
const Logout = lazy(() => import('../pages/Auth/Logout'))
const Register = lazy(() => import('../pages/Auth/Register'))
const Home = lazy(() => import('../pages/Home'))
const TourGuide = lazy(() => import('../pages/Services/TourGuide'))
const Profile = lazy(() => import('../pages/Users/Profile'))
const Authed = lazy(() => import('../services/Authed'))
const Drivers = lazy(() => import('../pages/Services/Drivers'))
const CarList = lazy(() => import('../pages/Services/CarList'))
const FAQ = lazy(() => import('../pages/Services/FAQ'))
const Artificier = lazy(() => import('../pages/Artificier'))
const Order = lazy(() => import('../pages/Services/Order'))
const Guest = lazy(() => import('../services/Guest'))

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
    path: '/tours',
    element: <TourGuide />
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
        loader: ProfileLoader,
        element: <Profile />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: 'order',
        element: <Order />,
        loader: async () => {
          // eslint-disable-next-line @typescript-eslint/return-await
          return fetch(
            'https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=2171'
          )
        }
      },
      {
        path: 'order/process/:requestId',
        element: <FakeOrderProcess />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
