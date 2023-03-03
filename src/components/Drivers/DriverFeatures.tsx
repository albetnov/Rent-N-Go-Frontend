import { Flex } from '@chakra-ui/react'
import Feature from './Feature'

export interface DriverFeatureProps {
  isPhotoChecked: boolean
  isIdCardChecked: boolean
  isDriverLicenseChecked: boolean
  isSocialMediaChecked: boolean
}

export default function DriverFeature({
  isPhotoChecked,
  isIdCardChecked,
  isDriverLicenseChecked,
  isSocialMediaChecked
}: DriverFeatureProps) {
  return (
    <Flex gap={2} flexDir="column">
      <Feature name="Photo" isChecked={isPhotoChecked} />
      <Feature name="ID Card (KTP or equivalent)" isChecked={isIdCardChecked} />
      <Feature
        name="Driver License (SIM A)"
        isChecked={isDriverLicenseChecked}
      />
      <Feature name="Social Media" isChecked={isSocialMediaChecked} />
    </Flex>
  )
}
