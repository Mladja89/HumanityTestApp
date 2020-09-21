import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Box, Flex, Spinner } from '@chakra-ui/core'
import { fetchEmployees, fetchShifts } from '../api'
import { startOfWeek } from 'date-fns'

import { ShiftsTable } from './ShiftsTable/ShiftsTable'
import { WeekPicker } from './WeekPicker'
import { EmployeeFilter } from './EmployeeFilter'

export function Schedule() {
  const shifts = useQuery('shifts', fetchShifts)
  const employees = useQuery('employees', fetchEmployees)
  const [sunday, setSunday] = useState(startOfWeek(new Date()))
  const [filter, setFilter] = useState('')

  if (employees.isLoading || shifts.isLoading) {
    return <Spinner size="xl" />
  }

  if (employees.error || shifts.error || !shifts.data || !employees.data) {
    return <div>Error</div>
  }

  return (
    <Box p={4}>
      <Flex>
        <WeekPicker sunday={sunday} setSunday={setSunday} />
        <EmployeeFilter value={filter} setValue={setFilter} />
      </Flex>
      <ShiftsTable shifts={shifts.data} employees={employees.data} sunday={sunday} filter={filter} />
    </Box>
  )
}
