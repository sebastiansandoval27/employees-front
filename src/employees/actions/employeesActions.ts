import { ApiClient } from '@/APIClient/apiClient'
import { Employee } from '../interfaces/Employee'
import { EmployeeHierarchy } from '../interfaces/EmployeeHierarchy'

export const getAllEmployees = async () => {
  try {
    const response = await ApiClient.get<Employee[]>('/employee/hierarchy')
    if (response.status !== 200) {
      throw new Error('Error')
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getEmployeesHierarchy = async () => {
  try {
    const response = await ApiClient.get<EmployeeHierarchy[]>(
      '/employee-hierarchy'
    )
    if (response.status !== 200) {
      throw new Error('Error')
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export const updateEmployeeRole = async (employeeId: number) => {
  try {
    const response = await ApiClient.patch<Employee>(`/employee/${employeeId}`)
    if (response.status !== 200) {
      throw new Error('Error')
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
