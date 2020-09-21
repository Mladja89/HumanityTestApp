import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/core'
import { Employee } from '../../types'

type Props = {
  employee: Employee
}

export function EmployeeCell({ employee }: Props) {
  return (
    <Flex py={1}>
      <Image src={employee.avatar} boxSize="50px" mr={2} />
      <Box>
        <Box>
          {employee.firstName} {employee.lastName}
        </Box>
        <Box fontSize="xs" color="gray.500">
          {employee.position.name}
        </Box>
      </Box>
    </Flex>
  )
}
