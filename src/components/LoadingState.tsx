import React from 'react'
import { Center, Spinner } from '@chakra-ui/core'

export function LoadingState() {
  return (
    <Center width="100vw" height="100vh">
      <Spinner size="xl" />
    </Center>
  )
}
