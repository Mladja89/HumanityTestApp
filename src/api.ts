import * as data from './dummyData'

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export async function fetchShifts() {
  await sleep(500)
  return Promise.resolve(data.shifts)
}

export async function fetchEmployees() {
  await sleep(500)
  return Promise.resolve(data.employees)
}
