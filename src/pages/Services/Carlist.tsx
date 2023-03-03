import Layout from '../../components/Layout'
import CarCard from '../../components/Cars/CarCard'
import CarDetail from '../../components/Cars/CarDetail'
import CarFeature from '../../components/Cars/CarFeature'
import SearchBars from '../../components/Drivers/SearchBars'
import { Box, Flex, Spacer, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup, Stack, HStack, VStack, Heading, Divider } from '@chakra-ui/react'
import Feature from '../../components/Drivers/Feature'

export default function carlist() {

    return (
        <Layout>
            <Flex mt={50} gap={6} px={70}>
                <SearchBars></SearchBars>

                <Select boxShadow='2xl' bgColor='white' maxWidth={300} placeholder='Brand'>
                    <option value='option1'>Mewah</option>
                    <option value='option2'>Biasa aja</option>
                    <option value='option3'>Secukupnya aja</option>
                </Select>

                <Select boxShadow='2xl' bgColor='white' maxWidth={220} placeholder='Seats'>
                    <option value='option1'>10</option>
                    <option value='option2'>6</option>
                    <option value='option3'>4</option>
                    <option value='option4'>2</option>
                </Select>

                <Select boxShadow='2xl' bgColor='white' maxWidth={300} placeholder='Price'>
                    <option value='option1'>Mahal</option>
                    <option value='option2'>Biasa aja</option>
                    <option value='option3'>Secukupnya aja</option>
                </Select></Flex>
            <Box px={70}>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Lexus LC 500' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Mazda Rx 7' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Mustang' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Lexus LC 500' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Avanza Toyota' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Suzuki Apv' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Subaru' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Ferrari' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box>
                <Box mr='70px' mt='50px' boxShadow='dark-lg'>
                    <CarCard name='Jeep' imgUrl='https://bit.ly/dan-abramov' seats={4} baggages={2} stock={10} />
                </Box></Box>

        </Layout >
    )
}