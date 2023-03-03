import { Box, Image } from '@chakra-ui/react'
import Card from '../Services/Card'
import CardAction from '../Services/CardAction'
import DriverFeature, { type DriverFeatureProps } from './DriverFeatures'
import DriverName from './DriverName'

interface DriverProps {
  name: string
  stars: 1 | 2 | 3 | 4 | 5
  features: DriverFeatureProps
  imgUrl: string
}

export default function DriverCard({
  name,
  stars,
  features,
  imgUrl
}: DriverProps) {
  return (
    <Card>
      <Image src={imgUrl} maxWidth={369} maxHeight={232} />
      <Box>
        <DriverName name={name} stars={stars} />
        <DriverFeature {...features} />
      </Box>
      <CardAction />
    </Card>
  )
}
