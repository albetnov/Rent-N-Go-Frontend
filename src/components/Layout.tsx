import { type PropsWithChildren } from 'react'
import useCustomBackground from '../hooks/useCustomBackground'
import colors from '../utils/colors'
import Footer from './Footer/Footer'
import Topbar from './Topbar/Topbar'

export default function Layout({ children }: PropsWithChildren) {
  useCustomBackground(colors.secondary)
  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
