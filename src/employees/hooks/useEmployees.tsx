'use client'
import {
  getAllEmployees,
  getEmployeesHierarchy,
  updateEmployeeRole,
} from '../actions/employeesActions'
import { useMutation, useQuery } from 'react-query'

export const useEmployees = () => {
  const queryEmployees = useQuery({
    queryKey: ['employees'],
    queryFn: getAllEmployees,
    // enabled: false,
    // staleTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  const employeeMutation = useMutation({
    mutationFn: updateEmployeeRole,
  })

  return {
    queryEmployees,
    employeeMutation,
  }
}
