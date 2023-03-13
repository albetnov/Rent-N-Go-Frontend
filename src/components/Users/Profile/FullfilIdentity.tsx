import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import ProfileButtonAction from './ProfileButtonAction'
import Dropper from './Dropper'
import PrimaryButton from '../../PrimaryButton'
import FullfillIdentityModel from './Models/FullfilIdentityModel'
import { type ProfileFetcher } from './types'

export default function FullfilIdentity({ fetcher }: ProfileFetcher) {
  const { isOpen, onClose, onOpen, setSim, sim, uploadSimHandler, isLoading } =
    FullfillIdentityModel(fetcher)

  return (
    <>
      <ProfileButtonAction
        colorScheme="blue"
        onClick={onOpen}
        whiteSpace="normal"
      >
        Upload your required Identification Document
      </ProfileButtonAction>
      <Modal size="full" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Text fontWeight={700} fontSize={40}>
              Upload Your Document
            </Text>
            <Text fontSize={20} fontWeight={300}>
              To use our services, please upload your required documents for
              verification. We will contact you if there are any issues.
            </Text>
          </ModalHeader>
          <ModalBody display="flex" gap={12} flexDir="column">
            <Dropper
              file={sim}
              setFile={setSim}
              title="Goverment-Issued National Driving License"
              desc="Please upload a valid, clear and colored National Driving License Image"
            />
            <Flex gap={5} mx="auto">
              <PrimaryButton
                isLoading={isLoading}
                w="fit-content"
                onClick={uploadSimHandler}
              >
                Upload
              </PrimaryButton>
              <Button
                colorScheme="red"
                disabled={isLoading}
                onClick={onClose}
                w="fit-content"
              >
                Cancel
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
