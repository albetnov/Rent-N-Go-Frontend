import { Image } from '@chakra-ui/react'

interface ImageSlideProps {
  url: string
}

export default function ImageSlide({ url }: ImageSlideProps) {
  return (
    <Image
      src={url}
      width="full"
      height={{ base: '70vh', lg: 'full' }}
      maxHeight={{ base: 'full', lg: '800px' }}
      objectFit="cover"
    />
  )
}
