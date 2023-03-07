import ShadowBox from '../ShadowBox'
import TourCard from './TourCard'

export default function TourCardShadow() {
  return (
    <ShadowBox>
      <TourCard
        imgUrl="https://i.pinimg.com/564x/e0/9c/d4/e09cd488c87e5c31fc80e51280fbf2fe.jpg"
        name="Harros Hotel and Resident Package"
        price={3000000}
        features={[
          { name: 'Very Comfortable', isChecked: true },
          { name: 'Breakfast buffet', isChecked: true },
          { name: 'Luxurious Pool', isChecked: true }
        ]}
      />
    </ShadowBox>
  )
}
