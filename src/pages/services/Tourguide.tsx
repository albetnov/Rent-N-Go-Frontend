import {
  Box,
  Input,
  InputLeftElement,
  CardBody,
  Center,
  Circle,
  Flex,
  HStack,
  InputGroup,
  Popover,
  PopoverTrigger,
  propNames,
  TagLeftIcon,
  StatDownArrow,
  Spacer
} from '@chakra-ui/react'
import {
  FaAngleDown,
  FaArrowCircleDown,
  FaArrowDown,
  FaArrowsAltV,
  FaDropbox
} from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react'
import { GiDrop } from 'react-icons/gi'
import { FaChevronDown } from 'react-icons/fa'
import Topbar from '../../components/Topbar/Topbar'
import TourCard, { TourCardProps } from '../../components/Tour/TourCard'

import TourDetail from '../../components/Tour/TourDetail'
import WhiteText from '../../components/WhiteText'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'
export default function Tourguide() {
  useCustomBackground(colors.secondary)

  return (
    <>
      <Topbar />
      <Box
        marginTop={'40px'}
        marginLeft={{ base: '10px', sm: '40px' }}
        marginEnd={{ sm: '10px' }}
      >
        <Flex alignItems={'center'} gap={{ base: '20px', sm: '19px', md: '26px' }}>
          <Box 
            w={{ sm: '200px', md: '300px', lg:'449px', xl:'500px' }} 
            h={{sm:'50px', md:'60px'}} 
            bg="white">
            <InputGroup>
              <InputLeftElement
                py={{sm:'25px', md:'30px'}}
                pointerEvents="none"
                children={<FiSearch size={25} />}
              />
              <Input
              fontSize={'20px '}
                height={{sm:'50px', md:'60px'}}
                borderRadius={0}
                placeholder="Search"
                _placeholder={{ color: 'black' }}
                border={'none'}
              />
            </InputGroup>
          </Box>
          <Box
            width={{
              sm: '110px',
              md: '180px',
              lg: '263px',
              xl: '264px'
            }}
            h={{sm:'50px', md:'60px'}} 
            bg="white">
            <Menu>
              <MenuButton
                px={4}
                py={2}
                width={{
                  sm: '110px',
                  md: '180px',
                  lg: '263px',
                  xl: '264px'
                }}
                h={{sm:'50px', md:'60px'}} 
                transition="all 0.2s"
                borderWidth="1px"
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                <Flex alignItems={'center'}>
                  <Box fontSize={'20px '}>Price</Box>
                  <Spacer />
                  <FaChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Low</MenuItem>
                <MenuItem>Medium</MenuItem>
                <MenuItem>High</MenuItem>
                <MenuItem>E l o n   M u s k</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>

      <Box
        height={{
  base: '100%', // 0-48em
  md: '50%', // 48em-80em,
  xl: '25%' // 80em+
    }}
        margin={['4', '6', '8', '8']}
        width={[
          '93%' // 62em+
        ]}>
        <Box>
          <TourCard
            imgUrl="https://i.pinimg.com/564x/e0/9c/d4/e09cd488c87e5c31fc80e51280fbf2fe.jpg"
            name="Harros Hotel and Resident Package"
            price={3000000}
            features={[
              { name: 'Very Comfortable', isChecked: true },
              { name: 'Breakfast buffet', isChecked: true },
              { name: 'Luxurious Pool'  , isChecked: true },
            ]}
          />

        <Box marginTop={{ base: '40px' }}>
        <TourCard
            imgUrl="https://i.pinimg.com/564x/e0/9c/d4/e09cd488c87e5c31fc80e51280fbf2fe.jpg"
            name="Harros Hotel and Resident Package"
            price={3000000}
            features={[
              { name: 'Very Comfortable', isChecked: true },
              { name: 'Breakfast buffet', isChecked: true },
              { name: 'Luxurious Pool'  , isChecked: true },
            ]}/>

        </Box>
        <Box marginTop={['8px', '4', '6', '8']}>
        <TourCard
            imgUrl="https://i.pinimg.com/564x/e0/9c/d4/e09cd488c87e5c31fc80e51280fbf2fe.jpg"
            name="Harros Hotel and Resident Package"
            price={3000000}
            features={[
              { name: 'Very Comfortable', isChecked: true },
              { name: 'Breakfast buffet', isChecked: true },
              { name: 'Luxurious Pool'  , isChecked: true },
            ]}/>

        </Box>
        <Box marginTop={['2', '4', '6', '8']}>
        <TourCard
            imgUrl="https://i.pinimg.com/564x/e0/9c/d4/e09cd488c87e5c31fc80e51280fbf2fe.jpg"
            name="Harros Hotel and Resident Package"
            price={3000000}
            features={[
              { name: 'Very Comfortable', isChecked: true },
              { name: 'Breakfast buffet', isChecked: true },
              { name: 'Luxurious Pool'  , isChecked: true },
            ]}/>

        </Box>
      </Box></Box>

      </>
      )
      }
