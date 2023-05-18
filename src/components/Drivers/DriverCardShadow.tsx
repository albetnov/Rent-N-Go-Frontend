import ShadowBox from '../ShadowBox'
import DriverCard from './DriverCard'
import { type DriverFeatureProps } from './DriverFeatures'
import { type DriverData } from '../../services/apis/driver'

const DRIVER_FEATURE: DriverFeatureProps = {
  isPhotoChecked: true,
  isIdCardChecked: true,
  isDriverLicenseChecked: true,
  isSocialMediaChecked: true
}

interface DriverCardProps {
  driver: DriverData
}

export default function DriverCardShadow({ driver }: DriverCardProps) {
  return (
    <ShadowBox>
      <DriverCard
        name={driver.name}
        stars={4}
        imgUrl={driver.pictures[0].file_name}
        features={DRIVER_FEATURE}
        id={driver.id}
        price={driver.price}
      />
    </ShadowBox>
  )
}
