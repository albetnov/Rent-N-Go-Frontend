import { Select } from "@chakra-ui/react"


export default function DriverMenu(){
    return(
    <Select bgColor='white' ml={20} maxWidth={300} placeholder='Price' boxShadow='dark-lg' >
    <option value='option1'>A-Z</option>
    <option value='option2'>Z-A</option>
    </Select>
    )
}
