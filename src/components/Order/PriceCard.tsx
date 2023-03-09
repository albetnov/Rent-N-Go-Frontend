import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'
import RowText from './RowText'

interface PriceDescription {
  label: string
  value: string
}

interface PriceCardProps {
  descriptions: PriceDescription[]
  title: string
  totalCost: string
  imgUrl: string
}

export default function PriceCard({
  descriptions,
  title,
  totalCost,
  imgUrl
}: PriceCardProps) {
  return (
    <Card>
      <CardHeader>
        <Text fontWeight="bold">{title}</Text>
      </CardHeader>
      <CardBody>
        <Divider my={3} />
        <Grid px={6} templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
          <GridItem>
            <Image src={imgUrl} w="246px" h="142px" objectFit="cover" />
          </GridItem>
          <GridItem display="flex" flexDir="column" gap={3}>
            {descriptions.map((item) => (
              <RowText key={item.label} text1={item.label} text2={item.value} />
            ))}
          </GridItem>
        </Grid>
        <Divider my={3} />
        <Flex justifyContent="flex-end">
          <RowText text1={`Total Cost of ${title}`} text2={totalCost} isBold />
        </Flex>
      </CardBody>
    </Card>
  )
}
