import { Link, type LinkProps } from '@chakra-ui/react'

import { Link as DomLink } from 'react-router-dom'

interface RouterLinkProps extends LinkProps {
  to: string
}

export default function RouterLink({ to, ...props }: RouterLinkProps) {
  return <Link {...props} as={DomLink} to={to} />
}
