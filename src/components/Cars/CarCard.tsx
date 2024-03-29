import Card from '../Services/Card'
import CardAction from '../Services/CardAction'
import CarDetail from './CarDetail'
import CarFeature from './CarFeature'

interface CarCardProps {
  name: string
  imgUrl: string
  seats: number
  baggages: number
  stock: number
  price: number
  id: number
}

export default function CarCard({
  name,
  imgUrl,
  seats,
  baggages,
  stock,
  price,
  id
}: CarCardProps) {
  return (
    <Card>
      <CarDetail name={name} imgUrl={imgUrl} />
      <CarFeature seats={seats} baggages={baggages} stock={stock} />
      <CardAction price={price} id={id} />
    </Card>
  )
}
