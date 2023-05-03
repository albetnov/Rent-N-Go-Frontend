import PriceCard from './PriceCard'

interface CarOrderCardProps {
  carModel: string
  imgUrl: string
  period: string
  price: number
  duration: number
}

export default function CarOrderCard({
  carModel,
  imgUrl,
  period,
  price,
  duration
}: CarOrderCardProps) {
  const carCardDesc = [
    { label: 'Car Model', value: carModel },
    {
      label: 'Price Per Day',
      value: `Rp. ${price}/day`
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
      totalCost={`Rp. ${price * duration}`}
      descriptions={carCardDesc}
    />
  )
}
