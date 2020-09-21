export type Position = {
  id: string
  name: string
  color: string
}

export type Employee = {
  id: string
  firstName: string
  lastName: string
  avatar: string
  position: Position
}

export type Shift = {
  id: string
  name: string
  dateFrom: string
  dateTo: string
  position: Position
  employees: Employee[]
}
