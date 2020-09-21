import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/core'
import { startOfWeek, addWeeks, subWeeks } from 'date-fns'

type Props = {
  sunday: Date
  onWeekChange: (value: Date) => void
}

export function WeekPicker({ sunday, onWeekChange }: Props) {
  return (
    <ButtonGroup isAttached variant="outline" mb={4}>
      <Button onClick={() => onWeekChange(subWeeks(sunday, 1))}>&lt;</Button>
      <Button onClick={() => onWeekChange(startOfWeek(new Date()))}>This Week</Button>
      <Button onClick={() => onWeekChange(addWeeks(sunday, 1))}>&gt;</Button>
    </ButtonGroup>
  )
}
