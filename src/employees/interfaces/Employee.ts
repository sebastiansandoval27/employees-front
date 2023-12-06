// Generated by https://quicktype.io

export interface Employee {
  id: number
  name: string
  version: number
  role: string
  employeeHierarchy: EmployeeHierarchy[]
  managerHierarchy: ManagerHierarchy[]
}

export interface EmployeeHierarchy {
  id: number
  version: number
  employee_id: number
  manager_id: number
}

export interface ManagerHierarchy {
  id: number
  version: number
  employee_id: number
  manager_id: number
  employee: EmployeeClass
  manager: EmployeeClass
}

export interface EmployeeClass {
  id: number
  name: string
  version: number
  role: string
}