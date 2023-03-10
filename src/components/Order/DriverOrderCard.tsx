import PriceCard from './PriceCard'

interface DriverOrderCardProps {
  name: string
  price: string
  period: string
  totalCost: string
  imgUrl: string
}

export default function DriverOrderCard({
  name,
  price,
  period,
  totalCost,
  imgUrl
}: DriverOrderCardProps) {
  const driverCardDesc = [
    { label: 'Driver Name', value: name },
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
      title="Personal Driver"
      totalCost={totalCost}
      descriptions={driverCardDesc}
    />
  )
}
