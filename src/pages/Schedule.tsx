import { Box, Flex } from '@chakra-ui/core'
import { format, startOfWeek } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router-dom'
import { fetchEmployees, fetchShifts } from '../api'
import { EmployeeFilter } from '../components/EmployeeFilter'
import { LoadingState } from '../components/LoadingState'
import { ShiftsTable } from '../components/ShiftsTable/ShiftsTable'
import { WeekPicker } from '../components/WeekPicker'
import * as pages from '../routes'


export function Schedule() {
  const shifts = useQuery('shifts', fetchShifts)
  const employees = useQuery('employees', fetchEmployees)
  const [sunday, setSunday] = useState(startOfWeek(new Date()))
  const [filter, setFilter] = useState('')
  const params = useParams<{ date: string }>()
  const history = useHistory()

  useEffect(() => {
    const date = params.date ? new Date(params.date) : new Date()
    setSunday(startOfWeek(date))
  }, [params, setSunday])

  function handleWeekChange(sunday: Date) {
    history.push(pages.schedule(format(sunday, 'yyyy-MM-dd')))
  }

  if (employees.isLoading || shifts.isLoading) {
    return <LoadingState />
  }

  if (employees.error || shifts.error || !shifts.data || !employees.data) {
    return <div>Error</div>
  }

  return (
    <Box p={4}>
      <Flex>
        <WeekPicker sunday={sunday} onWeekChange={handleWeekChange} />
        <EmployeeFilter value={filter} setValue={setFilter} />
      </Flex>
      <ShiftsTable shifts={shifts.data} employees={employees.data} sunday={sunday} filter={filter} />
    </Box>
  )
}
