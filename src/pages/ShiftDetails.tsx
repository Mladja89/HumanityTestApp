import { Box, Flex, Heading, IconButton } from '@chakra-ui/core'
import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { fetchShiftDetails } from '../api'
import { DetailItem } from '../components/DetailItem'
import { LoadingState } from '../components/LoadingState'
import { format } from 'date-fns'
import { useQuery } from 'react-query'

export function ShiftDetails() {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useQuery(['shift', id], () => fetchShiftDetails(id), { retry: false })

  function formatDate(dateString: string) {
    return format(new Date(dateString), 'MMM dd, y h:mm a')
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (error || !data) {
    return <div>{(error as any)?.message || 'An error occurred'}</div>
  }

  return (
    <Box p={4}>
      <Flex mb={8}>
        <IconButton aria-label="back" onClick={() => history.goBack()} mr={2}>
          <ArrowBackIcon />
        </IconButton>
        <Heading>Shift details</Heading>
      </Flex>
      <DetailItem label="Name" value={data.name} />
      <DetailItem label="Position" value={data.position.name} />
      <DetailItem label="From" value={formatDate(data.dateFrom)} />
      <DetailItem label="To" value={formatDate(data.dateTo)} />
      <DetailItem
        label="Employees"
        value={data.employees.map((employee) => (
          <Box key={employee.id}>
            {employee.firstName} {employee.lastName}
          </Box>
        ))}
      />
    </Box>
  )
}
