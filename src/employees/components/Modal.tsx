'use client'
import React, { useEffect, useState } from 'react'
import { useEmployees } from '../hooks/useEmployees'
import { EmployeeClass } from '../interfaces/Employee'

interface ModalProps {
  employee: EmployeeClass
  closeModal: () => void
}

const roles = ['MANAGER', 'EMPLOYEE']

export const Modal: React.FC<ModalProps> = ({ employee, closeModal }) => {
  const [role, setRole] = useState(employee.role)
  const { employeeMutation } = useEmployees()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    employeeMutation.mutate(employee.id)
  }

  useEffect(() => {
    if (!employeeMutation.isLoading && employeeMutation.isSuccess) {
      closeModal()
    }
  }, [employeeMutation.isLoading, employeeMutation.isSuccess])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value)
  }

  return (
    <div className="w-full h-full max-h-[100vh] overflow-hidden bg-black bg-opacity-50 absolute top-0 left-0 z-50 p-10">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[21.875rem] bg-white rounded-lg flex flex-col justify-start items-start p-2 relative">
          <span
            className="w-full flex justify-end items-center text-purple-400 text-xl font-extrabold cursor-pointer"
            onClick={closeModal}
          >
            X
          </span>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-full justify-start items-center mt-3 px-3"
          >
            <h3 className="text-center font-bold text-purple-600 text-xl">
              Edit Employee Role
            </h3>
            <h2 className="my-2">
              {employee.name} - {employee.role}
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-3 mt-2">
              <label className="block text-sm font-medium text-gray-900 w-full">
                Select the new role
              </label>
              <select
                id="roles"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="roles"
                onChange={handleChange}
                value={role}
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="w-full px-5 py-2 rounded-lg mt-2 text-center flex justify-center items-center bg-purple-500 text-white font-bold
              disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
              "
              type="submit"
              disabled={employeeMutation.isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
