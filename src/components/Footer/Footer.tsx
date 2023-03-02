import { useBreakpointValue } from '@chakra-ui/react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

export default function Footer() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  if (isDesktop) return <DesktopView />

  return <MobileView />
}
