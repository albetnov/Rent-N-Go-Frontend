import { type TourData } from '../../services/apis/tour'
import ShadowBox from '../ShadowBox'
import TourCard from './TourCard'

interface TourCardProps {
  tour: TourData
}

export default function TourCardShadow({ tour }: TourCardProps) {
  console.log('tour.pictures:', tour.pictures)
  return (
    <ShadowBox>
      <TourCard
        name={tour.name}
        imgUrl={
          tour.pictures && tour.pictures.length > 0
            ? tour.pictures[0].file_name
            : ''
        }
        id={tour.id}
        price={tour.price}
        features={[]}
      />
    </ShadowBox>
  )
}
