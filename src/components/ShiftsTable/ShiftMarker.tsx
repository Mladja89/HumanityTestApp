import React from 'react'
import { Box } from '@chakra-ui/core'
import { format } from 'date-fns'
import { Shift } from '../../types'

export function ShiftMarker({ shift }: { shift: Shift | undefined }) {
  if (!shift) {
    return null
  }

  const timeFrom = format(new Date(shift.dateFrom), 'haaaaa')
  const timeTo = format(new Date(shift.dateTo), 'haaaaa')

  return (
    <Box p={2} bg={shift.position.color}>
      <Box>{shift.name}</Box>
      <Box fontSize="xs" fontWeight="bold">
        {timeFrom} - {timeTo}
      </Box>
    </Box>
  )
}
