'use client'
import React, { useEffect } from 'react'
import { useEmployees } from '../hooks/useEmployees'
import { EmployeeClass } from '../interfaces/Employee'
import { Spinner } from '@/components'

interface ModalProps {
  employee: EmployeeClass
  closeModal: () => void
}

export const Modal: React.FC<ModalProps> = ({ employee, closeModal }) => {
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

  return (
    <>
      {employeeMutation.isLoading && (
        <div className="w-screen h-screen bg-white bg-opacity-90 flex justify-center items-center z-50 absolute top-0 left-0">
          <Spinner />
        </div>
      )}
      <div className="w-full h-full max-h-[100vh] overflow-hidden bg-black bg-opacity-50 absolute top-0 left-0 z-40 p-10">
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
              <button
                className="w-full px-5 py-2 rounded-lg mt-2 text-center flex justify-center items-center bg-purple-500 text-white font-bold
              disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
              "
                type="submit"
                disabled={employeeMutation.isLoading}
              >
                Set as Manager
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
