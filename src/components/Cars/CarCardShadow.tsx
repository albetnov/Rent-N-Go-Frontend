import ShadowBox from '../ShadowBox'
import CarCard from './CarCard'

export default function CarCardShadow() {
  return (
    <ShadowBox>
      <CarCard
        name="Lexus LC 500"
        imgUrl="https://bit.ly/dan-abramov"
        seats={4}
        baggages={2}
        stock={10}
      />
    </ShadowBox>
  )
}
