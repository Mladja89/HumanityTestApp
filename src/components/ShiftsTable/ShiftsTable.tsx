import React, { useEffect, useState } from 'react'
import { format, addDays, isToday } from 'date-fns'
import { ShiftMarker } from './ShiftMarker'
import { EmployeeCell } from './EmployeeCell'
import { Employee, Shift } from '../../types'
import { Box } from '@chakra-ui/core'
import { filterEmployees, isEmployeeInShift, isShiftOnDate } from '../../utils'

const Td = (props: any) => (
  <Box as="td" width="1px" p={2} border="1px solid" borderColor="gray.200" fontSize="sm" {...props} />
)

type Props = {
  sunday: Date
  shifts: Shift[]
  employees: Employee[]
  filter: string
}

export function ShiftsTable({ shifts, sunday, employees, filter }: Props) {
  const [filteredEmployees, setFilteredEmployees] = useState(employees)

  const findShift = (employee: Employee, date: Date) =>
    shifts.find((shift) => isEmployeeInShift(employee, shift) && isShiftOnDate(shift, date))

  useEffect(() => {
    setFilteredEmployees(filterEmployees(employees, filter))
  }, [filter, employees, setFilteredEmployees])

  return (
    <table style={{ width: '100%', tableLayout: 'fixed' }}>
      <thead>
        <tr>
          <Td bg="gray.100">
            {format(sunday, 'MMM dd, y')} - {format(addDays(sunday, 6), 'MMM dd, y')}
          </Td>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <Td key={index} bg="gray.100" textAlign="center">
              {format(addDays(sunday, index), 'iii, MMM d')}
            </Td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <tr key={employee.id}>
            <Td>
              <EmployeeCell employee={employee} />
            </Td>
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <Td key={index} bg={isToday(addDays(sunday, index)) ? 'yellow.100' : ''}>
                <ShiftMarker shift={findShift(employee, addDays(sunday, index))} />
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
