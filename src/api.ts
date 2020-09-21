import * as data from './dummyData'
import { Employee, Shift } from './types'

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export async function fetchShifts(): Promise<Shift[]> {
  await sleep(500)
  return data.shifts
}

export async function fetchEmployees(): Promise<Employee[]> {
  await sleep(500)
  return data.employees
}

export async function fetchShiftDetails(id: string): Promise<Shift> {
  await sleep(500)
  const shift = data.shifts.find(shift => shift.id === id)
  
  if (!shift) {
    throw Error('Shift not found')
  }

  return shift
}
