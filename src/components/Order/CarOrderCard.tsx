import PriceCard from './PriceCard'

interface CarOrderCardProps {
  carModel: string
  imgUrl: string
  licenseNumber: string
  period: string
  totalCost: string
  price: string
}

export default function CarOrderCard({
  carModel,
  imgUrl,
  licenseNumber,
  period,
  price,
  totalCost
}: CarOrderCardProps) {
  const carCardDesc = [
    { label: 'Car Model', value: carModel },
    {
      label: 'License Number',
      value: licenseNumber
    },
    {
      label: 'Price Per Day',
      value: price
    },
    {
      label: 'Rental Period',
      value: period
    }
  ]

  return (
    <PriceCard
      imgUrl={imgUrl}
      title="Rental Car"
      totalCost={totalCost}
      descriptions={carCardDesc}
    />
  )
}
