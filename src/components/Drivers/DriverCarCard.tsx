import Card from '../Services/Card'
import CardAction from '../Services/CardAction'
import CarDetail from '../Cars/CarDetail'
import CarFeature from '../Cars/CarFeature'
import { Button } from '@chakra-ui/react'

interface DriverCarCardProps {
  name: string
  imgUrl: string
  seats: number
  baggages: number
  stock: number
  price: number
  id: number
  onSelect?: () => void
  selected?: boolean
}

export default function DriverCarCard({
  name,
  imgUrl,
  seats,
  baggages,
  stock,
  price,
  id,
  selected,
  onSelect
}: DriverCarCardProps) {
  return (
    <Card>
      <CarDetail name={name} imgUrl={imgUrl} />
      <CarFeature seats={seats} baggages={baggages} stock={stock} />

      {!onSelect && <CardAction price={price} id={id} />}
      {onSelect && (
        <Button onClick={onSelect} colorScheme={selected ? 'red' : 'blue'}>
          {selected ? 'Cancel' : 'Select'}
        </Button>
      )}
    </Card>
  )
}
