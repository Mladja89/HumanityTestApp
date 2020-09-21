import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/core'
import { startOfWeek, addWeeks, subWeeks } from 'date-fns'

type Props = {
  sunday: Date
  setSunday: (value: Date) => void
}

export function WeekPicker({ sunday, setSunday }: Props) {
  return (
    <ButtonGroup isAttached variant="outline" mb={4}>
      <Button onClick={() => setSunday(subWeeks(sunday, 1))}>&lt;</Button>
      <Button onClick={() => setSunday(startOfWeek(new Date()))}>This Week</Button>
      <Button onClick={() => setSunday(addWeeks(sunday, 1))}>&gt;</Button>
    </ButtonGroup>
  )
}
