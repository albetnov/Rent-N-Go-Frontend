import { useState } from 'react'
import { type CarData } from '../../services/apis/car'
import DriverCarCardShadow from './DriverCarCardShadow'

interface CarSelectionProps {
  carData: CarData[]
  onCarSelect: (carId: number | undefined) => void
}

export default function CarSelection({
  carData,
  onCarSelect
}: CarSelectionProps) {
  const [selectedCarId, setSelectedCarId] = useState<number>()

  const handleSelect = (carId: number) => {
    if (selectedCarId === carId) {
      setSelectedCarId(undefined)
      onCarSelect(undefined)
    } else {
      setSelectedCarId(carId)
      onCarSelect(carId)
    }
  }

  return (
    <div>
      {carData.map((car) => (
        <div key={car.id}>
          <div
            onClick={() => {
              handleSelect(car.id)
            }}
          >
            <DriverCarCardShadow
              car={car}
              onSelect={() => {
                handleSelect(car.id)
              }}
              selected={selectedCarId === car.id}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
