import {
    InputGroup,
    InputLeftElement,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function SearchBars() {
    return (
        <Popover>
            <PopoverTrigger>
                <InputGroup maxW={670} boxShadow='2xl'>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiSearch />}
                    />
                    <Input
                        type="search"
                        bgColor='white'
                        placeholder="Search"
                    />
                </InputGroup>
            </PopoverTrigger>
            <PopoverContent
                w="full"
                maxH={500}
                overflowY="auto"

            >
            </PopoverContent>
        </Popover>
    );
}