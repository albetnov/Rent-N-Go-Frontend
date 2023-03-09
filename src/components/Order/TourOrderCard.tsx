import PriceCard from './PriceCard'

interface TourOrderCardProps {
  name: string
  price: string
  period: string
  totalCost: string
  imgUrl: string
}

export default function TourOrderCard({
  name,
  price,
  period,
  totalCost,
  imgUrl
}: TourOrderCardProps) {
  const tourCardDesc = [
    {
      label: 'Tour Guide Name',
      value: name
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
      descriptions={tourCardDesc}
      totalCost={totalCost}
      imgUrl={imgUrl}
      title="Tour Guide"
    />
  )
}
