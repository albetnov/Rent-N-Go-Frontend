import PriceCard from './PriceCard'

interface TourOrderCardProps {
  name: string
  price: number
  period: string
  imgUrl: string
  duration: number
}

export default function TourOrderCard({
  name,
  price,
  period,
  imgUrl,
  duration
}: TourOrderCardProps) {
  const tourCardDesc = [
    {
      label: 'Tour Guide Name',
      value: name
    },
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
      descriptions={tourCardDesc}
      totalCost={`Rp. ${price * duration}`}
      imgUrl={imgUrl}
      title="Tour Guide"
    />
  )
}
