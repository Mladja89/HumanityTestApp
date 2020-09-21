import { Box } from '@chakra-ui/core'
import React from 'react'

type Props = {
  label: string
  value: React.ReactNode
}

export function DetailItem({ label, value }: Props) {
  return <Box mb={8}>
    <Box fontSize="sm" color="gray.500">{label}</Box>
    <Box fontSize="lg" color="gray.800">{value}</Box>
  </Box>
}
