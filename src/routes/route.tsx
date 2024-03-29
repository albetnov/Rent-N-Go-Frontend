/* eslint-disable @typescript-eslint/promise-function-async */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import homeLoader from '../pages/HomeLoader'
import ProfileLoader from '../pages/Users/ProfileLoader'
import CarLoader from '../components/Cars/CarLoader'
import CarDetailLoader from '../components/Cars/CarDetailLoader'
import TourLoader from '../components/Tour/TourLoader'
import TourDetailLoader from '../components/Tour/TourDetailLoader'
import DriverLoader from '../components/Drivers/DriverLoader'
import DriverDetailLoader from '../components/Drivers/DriverDetailLoader'
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
const CarList = lazy(() => import('../pages/Services/CarList'))
const FAQ = lazy(() => import('../pages/Services/FAQ'))
const Artificier = lazy(() => import('../pages/Artificier'))
const Order = lazy(() => import('../pages/Services/Order'))
const Guest = lazy(() => import('../services/Guest'))
const CarDetail = lazy(() => import('../pages/Services/CarDetail'))
const TourDetail = lazy(() => import('../pages/Services/TourDetail'))
const DriverList = lazy(() => import('../pages/Services/DriverList'))
const DriverDetail = lazy(() => import('../pages/Services/DriverDetail'))

export default createBrowserRouter([
  {
    path: '/',
    loader: homeLoader,
    element: <Home />
  },
  {
    path: '/cars',
    loader: CarLoader,
    element: <CarList />
  },
  {
    path: '/cars/:id',
    loader: CarDetailLoader,
    element: <CarDetail />
  },
  {
    path: '/tours',
    loader: TourLoader,
    element: <TourGuide />
  },
  {
    path: '/tours/:id',
    loader: TourDetailLoader,
    element: <TourDetail />
  },
  {
    path: '/drivers',
    loader: DriverLoader,
    element: <DriverList />
  },
  {
    path: '/drivers/:id',
    loader: DriverDetailLoader,
    element: <DriverDetail />
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
