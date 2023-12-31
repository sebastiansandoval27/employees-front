// Generated by https://quicktype.io

export interface EmployeeHierarchy {
  id: number
  name: string
  version: number
  role: string
  employeeHierarchy: EmployeeHierarchyElement[]
  managerHierarchy: ManagerHierarchy[]
}

export interface EmployeeHierarchyElement {
  id: number
  version: number
  employee_id: number
  manager_id: number | null
}

export interface ManagerHierarchy {
  id: number
  version: number
  employee_id: number
  manager_id: number
  employee: Employee
  manager: Employee
}

export interface Employee {
  id: number
  name: string
  version: number
  role: string
}
