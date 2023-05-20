import { Image } from '@chakra-ui/react'
import Card from '../Services/Card'
import TourCardAction from '../Services/TourCardAction'
import TourDetail from './TourDetail'

interface Feature {
  isChecked: boolean
  name: string
}

export interface TourCardProps {
  name: string
  features: Feature[]
  price: number
  imgUrl: string
  id: number
}

export default function TourCard({
  imgUrl,
  price,
  features,
  name,
  id
}: TourCardProps) {
  return (
    <Card>
      <Image src={imgUrl} maxW={313} maxH={167} mt={9} />
      <TourDetail features={features} name={name} />
      <TourCardAction price={price} id={id} />
    </Card>
  )
}
