import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import Dropzone from 'react-dropzone'
import { FaFileUpload } from 'react-icons/fa'
import colors from '../../../utils/colors'

interface DropperProps {
  file?: File
  setFile: (s: File) => void
  title: string
  desc: string
}

export default function Dropper({ file, setFile, title, desc }: DropperProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const onDropHandler = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0])
  }

  return (
    <Dropzone onDrop={onDropHandler}>
      {({ getRootProps, getInputProps }) => (
        <fieldset
          {...getRootProps()}
          style={{
            border: `1px solid ${colors['field-color']}`,
            padding: '60px 30px'
          }}
        >
          <legend>
            <Flex flexDir="column" alignItems="center">
              <Text
                fontSize={{ base: 14, md: 23 }}
                fontWeight={400}
                color="gray.500"
              >
                {title}
              </Text>
              <Text
                mt={{ base: 1, md: -2 }}
                fontSize={{ base: 10, md: 16 }}
                fontWeight={400}
                color="gray.400"
              >
                {desc}
              </Text>
            </Flex>
          </legend>
          <Box mx="auto">
            <input
              {...getInputProps()}
              type="file"
              hidden
              ref={fileInputRef}
              onChange={onFileChange}
            />
            <Flex
              justifyContent="space-around"
              gap={3}
              flexDir={{ base: 'column', md: 'row' }}
            >
              <Button onClick={onFileUpload}>Choose a file</Button>
              <Text color="gray.500">OR</Text>
              <Flex gap={3} alignItems="center">
                <FaFileUpload color={colors.primary} fontSize={30} />
                <Text color="primary">Drag and drop a file in this area</Text>
              </Flex>
            </Flex>
          </Box>
          {file && (
            <Text
              mt={5}
              color="blue.600"
              bg="blue.100"
              p={3}
              rounded="lg"
              w="fit-content"
              mx="auto"
            >
              {file.name}
            </Text>
          )}
        </fieldset>
      )}
    </Dropzone>
  )
}
