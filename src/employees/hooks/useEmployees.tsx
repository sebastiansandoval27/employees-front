'use client'
import { useNotifications } from '@/components/hooks/useNotifications'
import {
  getAllEmployees,
  updateEmployeeRole,
} from '../actions/employeesActions'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useEmployees = () => {
  const queryClient = useQueryClient()
  const { showToast } = useNotifications()

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
      showToast(`Employee updated successfully`, 'success')
      queryClient.setQueryData(['employees'], async () => {
        await queryClient.invalidateQueries({
          queryKey: ['employees'],
        })
      })
    },
    onError(err) {
      showToast('Error updating employee', 'error')
    },
  })

  return {
    queryEmployees,
    employeeMutation,
  }
}
