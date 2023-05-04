import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../components/Layout'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Pagination } from 'swiper'
import ServiceCard from '../components/Home/ServiceCard'
import ImageSlide from '../components/Home/ImageSlide'
import SectionText from '../components/Home/SectionText'

import 'swiper/css'
import 'swiper/css/pagination'
import CarCard from '../components/Home/CarCard'
import Title from '../components/Title'
import { useLoaderData } from 'react-router-dom'
import { type CarData } from '../services/apis/car'

export default function Home() {
  const cars = useLoaderData()

  return (
    <Layout>
      <Title title="Home" />
      <Box as="section">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <ImageSlide url="https://source.unsplash.com/1920x1080?travel" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlide url="https://source.unsplash.com/1920x1080?travel" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlide url="https://source.unsplash.com/1920x1080?travel" />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        as="section"
        mt={{ base: 14, lg: 32 }}
        p={{ base: 3, lg: 10 }}
        mx="auto"
        id="services"
      >
        <SectionText>Our Services</SectionText>
        <Flex
          w="full"
          maxW="80%"
          mx="auto"
          gap={4}
          justifyContent="space-between"
          flexDir={{ base: 'column', md: 'row' }}
        >
          <ServiceCard link="/cars" text="Car Rental" src="/service1.webp" />
          <ServiceCard
            link="/drivers"
            text="Personal Driver"
            src="/service2.webp"
          />
          <ServiceCard
            link="/tours"
            text="Personal Tour Guide"
            src="/service3.webp"
          />
        </Flex>
      </Box>
      <Box as="section" mt={{ base: 14, lg: 28 }} mx="auto" id="about">
        <SectionText ml={{ base: 3, lg: 10 }}>About Us</SectionText>
        <Grid
          bg="white"
          w="full"
          templateColumns={{ base: '1fr', lg: '1fr minmax(0, 847px)' }}
          py={5}
          px={{ base: 3, lg: 20 }}
        >
          <GridItem justifySelf="center" placeSelf="center">
            <Image src="/about.webp" width="330px" />
          </GridItem>
          <GridItem>
            <Text fontWeight={700} fontSize={40}>
              Rent N Go
            </Text>
            <Text mt={2} fontSize={20}>
              The color blue was chosen because it conveys a professional image
              and signifies trustworthiness. We believe in the reliability of
              our customers to responsibly take the keys and drive the car to
              their desired destination, while we ensure that our services are
              delivered in a professional manner.
            </Text>
            <Text mt={2} fontSize={20}>
              On the other hand, the color red was selected to symbolize the
              courage required to start this business venture, given the
              significant amount of capital needed. Furthermore, it is used to
              reinforce the connection between our business name &quot;Rent and
              Go,&quot; which has been shortened for convenience.
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box
        as="section"
        mt={{ base: 8, lg: 16 }}
        px={{ base: 3, lg: 10 }}
        mx="auto"
        id="promo-cars"
      >
        <SectionText>Special Offers</SectionText>
        <Grid
          w="full"
          justifyItems="center"
          templateColumns="repeat(auto-fit, minmax(427px, 1fr))"
          gap={10}
          justifyContent="center"
        >
          {Array.isArray(cars) ? (
            (cars as CarData[]).map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <Text>There are no cars available at the moment</Text>
          )}
        </Grid>
      </Box>
    </Layout>
  )
}
