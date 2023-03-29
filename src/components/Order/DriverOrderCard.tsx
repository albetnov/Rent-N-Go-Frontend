import PriceCard from './PriceCard'

interface DriverOrderCardProps {
  name: string
  price: number
  period: string
  imgUrl: string
  duration: number
}

export default function DriverOrderCard({
  name,
  price,
  period,
  imgUrl,
  duration
}: DriverOrderCardProps) {
  const driverCardDesc = [
    { label: 'Driver Name', value: name },
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
      title="Personal Driver"
      totalCost={`Rp. ${price * duration}`}
      descriptions={driverCardDesc}
    />
  )
}
