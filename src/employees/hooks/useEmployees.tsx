'use client'
import {
  getAllEmployees,
  updateEmployeeRole,
} from '../actions/employeesActions'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const useEmployees = () => {
  const queryClient = useQueryClient()

  const queryEmployees = useQuery({
    queryKey: ['employees'],
    queryFn: getAllEmployees,
    // enabled: false,
    staleTime: 1000 * 60 * 60,
  })

  const employeeMutation = useMutation({
    mutationFn: updateEmployeeRole,

    onSuccess(data, variables, context) {
      // Update the "employees" cache with the updated employee data
      queryClient.setQueryData(['employees'], async () => {
        await queryClient.invalidateQueries(['employees'])
      })
    },
  })

  return {
    queryEmployees,
    employeeMutation,
  }
}
