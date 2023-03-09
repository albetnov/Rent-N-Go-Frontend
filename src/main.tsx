import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/route'
import colors from './utils/colors'
import '@fontsource/poppins'
import '@fontsource/raleway'
import { HelmetProvider } from 'react-helmet-async'

import { ToastContainer } from './utils/toasts'
import Loading from './components/Loading/Loading'

const theme = extendTheme({
  colors: { ...colors },
  fonts: {
    body: "'Poppins'",
    raleway: "'Raleway', sans-serif"
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={routes} />
        </Suspense>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
)
