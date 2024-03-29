import { Flex, useBreakpointValue } from '@chakra-ui/react'
import DesktopView from './DesktopView'
import Logo from './Logo'
import MobileView from './MobileView'

interface LinkProps {
  name: string
  path: string
}

export interface TopbarViewProps {
  links: LinkProps[]
}

const links: LinkProps[] = [
  { name: 'Home', path: '/' },
  { name: 'Cars', path: '/cars' },
  { name: 'Drivers', path: '/drivers' },
  { name: 'Tours', path: '/tours' },
  { name: 'FAQ', path: '/faq' }
]

export default function Topbar() {
  const isDekstop = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex justifyContent="space-around" bg="primary" p={5} alignItems="center">
      <Logo />
      {isDekstop ? <DesktopView links={links} /> : <MobileView links={links} />}
    </Flex>
  )
}
