import { Box, Flex, IconButton, Input } from '@chakra-ui/core'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

type Props = {
  value: string
  setValue: (value: string) => void
}

export function EmployeeFilter({ value, setValue }: Props) {
  const [isActive, setIsActive] = useState(false)

  function handleClose() {
    setIsActive(false)
    setValue('')
  }

  return (
    <Box ml={4}>
      {isActive ? (
        <Flex>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for employee"
            width="300px"
            autoFocus
          />
          <IconButton aria-label="close" onClick={handleClose} variant="ghost" ml={1} isRound>
            <CloseIcon />
          </IconButton>
        </Flex>
      ) : (
        <IconButton aria-label="search" onClick={() => setIsActive(true)} variant="outline">
          <SearchIcon />
        </IconButton>
      )}
    </Box>
  )
}
