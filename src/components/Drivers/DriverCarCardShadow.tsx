import { type CarData } from '../../services/apis/car'
import ShadowBox from '../ShadowBox'
import DriverCarCard from '../Drivers/DriverCarCard'

// Update the CarCardProps interface to remove the carData, onCarSelect, and onFilterChange props
interface CarCardProps {
  car: CarData
  onSelect?: () => void
  selected?: boolean
}

export default function DriverCarCardShadow({
  car,
  onSelect,
  selected
}: CarCardProps) {
  return (
    <ShadowBox>
      <DriverCarCard
        name={car.name}
        imgUrl={car.pictures[0].file_name}
        seats={car.seats}
        baggages={car.baggages}
        stock={car.hold_stock}
        id={car.id}
        price={car.price}
        onSelect={onSelect}
        selected={selected}
      />
    </ShadowBox>
  )
}
