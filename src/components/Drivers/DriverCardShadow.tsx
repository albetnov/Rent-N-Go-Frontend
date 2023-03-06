import ShadowBox from '../ShadowBox'
import DriverCard from './DriverCard'
import { type DriverFeatureProps } from './DriverFeatures'

const DRIVER_FEATURE: DriverFeatureProps = {
  isPhotoChecked: true,
  isIdCardChecked: true,
  isDriverLicenseChecked: true,
  isSocialMediaChecked: true
}

export default function DriverCardShadow() {
  return (
    <ShadowBox>
      <DriverCard
        name="Atnan Ari Anderson"
        stars={4}
        imgUrl="https://bit.ly/dan-abramov"
        features={DRIVER_FEATURE}
      />
    </ShadowBox>
  )
}
