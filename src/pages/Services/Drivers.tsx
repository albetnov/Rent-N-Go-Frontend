import Layout from '../../components/Layout'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'
import { Flex } from '@chakra-ui/react'
import DriverMenu from '../../components/Drivers/DriversMenu'
import SearchBar from '../../components/Searchbar'
import DriverCardShadow from '../../components/Drivers/DriverCardShadow'

export default function Drivers() {
  useCustomBackground(colors.secondary)
  return (
    <Layout>
      <Flex
        mt={50}
        px={3}
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'start', md: 'center' }}
        gap={6}
      >
        <SearchBar />
        <DriverMenu />
      </Flex>
      <Flex my={10} gap={14} flexDir="column">
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
      </Flex>
    </Layout>
  )
}

export default function Drivers(){
    useCustomBackground(colors.secondary)
    return(
        <Layout>
            <Flex mt={50} px={30} gap={5} >
            <SearchBars />
            <DriverMenu />
            </Flex>
            <Box px={30}>
            <Box mt='30px' boxShadow='dark-lg'>
                    <DriverCard 
                    name='Atnan Ari Anderson' 
                    stars={4}
                    imgUrl='https://bit.ly/dan-abramov'
                    features={DRIVER_FEATURE}                    />
            </Box>
            <Box mt='30px' boxShadow='dark-lg'>
                    <DriverCard 
                    name='Albet Novendo'
                    stars={5}
                    imgUrl='https://bit.ly/dan-abramov' 
                    features={DRIVER_FEATURE}                    />
            </Box>
            <Box mt='30px' boxShadow='dark-lg'>
                    <DriverCard 
                    name='Delvin Jason'
                    stars={4}
                    imgUrl='https://bit.ly/dan-abramov' 
                    features={DRIVER_FEATURE}                      />
            </Box>
            <Box mt='30px' boxShadow='dark-lg'>
            <DriverCard 
                    name='Kelvin'
                    stars={5}
                    imgUrl='https://bit.ly/dan-abramov' 
                    features={DRIVER_FEATURE}                      />
            </Box>
            <Box mt='30px' boxShadow='dark-lg'>
                    <DriverCard 
                    name='Mieko Huang Vincent'
                    stars={3}
                    imgUrl='https://bit.ly/dan-abramov' 
                    features={DRIVER_FEATURE}                      />
            </Box>
            <Box mt='30px' boxShadow='dark-lg'>
                <DriverCard 
                    name='Rayson'
                    stars={4}
                    imgUrl='https://bit.ly/dan-abramov' 
                    features={DRIVER_FEATURE}                      />
            </Box>
            </Box>
        </Layout>
    )
}