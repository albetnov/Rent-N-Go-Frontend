import { Card } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

export default function OutlineCard({ children }: PropsWithChildren) {
  return (
    <Card border="1px solid" borderColor="gray.500" py={4} px={3}>
      {children}
    </Card>
  )
}
