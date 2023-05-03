import { type CarData } from '../../services/apis/car'
import ShadowBox from '../ShadowBox'
import CarCard from './CarCard'

interface CarCardProps {
  car: CarData
}

export default function CarCardShadow({ car }: CarCardProps) {
  return (
    <ShadowBox>
      <CarCard
        name={car.name}
        imgUrl={car.pictures[0].file_name}
        seats={car.seats}
        baggages={car.baggages}
        stock={car.hold_stock}
      />
    </ShadowBox>
  )
}
