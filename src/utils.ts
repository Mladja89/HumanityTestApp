import { Employee, Shift } from './types'
import { isSameDay } from 'date-fns'

export function isEmployeeInShift(employee: Employee, shift: Shift) {
  return shift.employees.some((e) => e.id === employee.id)
}

export function isShiftOnDate(shift: Shift, date: Date) {
  return isSameDay(new Date(shift.dateFrom), date)
}

export function filterEmployees(employees: Employee[], value: string) {
  return employees.filter((employee) =>
    employee.firstName.concat(employee.lastName).toLowerCase().includes(value.toLowerCase())
  )
}
