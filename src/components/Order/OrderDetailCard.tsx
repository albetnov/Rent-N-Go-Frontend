import { Card, CardBody } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

export default function OrderDetailCard({ children }: PropsWithChildren) {
  return (
    <Card rounded="none" shadow="lg">
      <CardBody>
        <Card rounded="lg" shadow="none" border="1px dotted violet">
          <CardBody>{children}</CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}
