import { Box, Image } from '@chakra-ui/react'
import Card from '../Services/Card'
import DriverCardAction from '../Services/DriverCardAction'
import DriverFeature, { type DriverFeatureProps } from './DriverFeatures'
import DriverName from './DriverName'

interface DriverProps {
  name: string
  stars: 1 | 2 | 3 | 4 | 5
  features: DriverFeatureProps
  imgUrl: string
  id: number
  price: number
}

export default function DriverCard({
  name,
  stars,
  features,
  imgUrl,
  id,
  price
}: DriverProps) {
  return (
    <Card>
      <Image src={imgUrl} maxWidth={369} maxHeight={232} />
      <Box>
        <DriverName name={name} stars={stars} />
        <DriverFeature {...features} />
      </Box>
      <DriverCardAction price={price} id={id} />
    </Card>
  )
}
