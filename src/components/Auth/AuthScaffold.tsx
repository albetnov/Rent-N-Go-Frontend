import { type PropsWithChildren } from 'react'
import { Box, CardHeader, Flex } from '@chakra-ui/react'
import GlowCard from '../../components/Auth/GlowCard'
import CenteredGrid from '../../components/CenteredGrid'
import CenteredText from '../../components/CenteredText'
import Title from '../../components/Title'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'

interface AuthScaffoldProps extends PropsWithChildren {
  title: string
  message?: {
    first: string
    second: string
  }
}

export default function AuthScaffold({
  title,
  message,
  children
}: AuthScaffoldProps) {
  useCustomBackground(colors.primary)

  return (
    <CenteredGrid px={13} py={{ base: 0, xl: 7 }}>
      <Title title={title} />
      <GlowCard rounded={30} p="10">
        <Flex
          flexDir="column"
          h="full"
          justifyContent="space-between"
          py={9}
          gap={7}
        >
          <CardHeader>
            <CenteredText color="primary" fontSize={55} fontWeight={700}>
              {title}
            </CenteredText>
            {message != null && (
              <>
                <CenteredText>{message.first}</CenteredText>
                <CenteredText>{message.second}</CenteredText>
              </>
            )}
          </CardHeader>
          <Box my="auto">{children}</Box>
        </Flex>
      </GlowCard>
    </CenteredGrid>
  )
}
