'use client'
import { ChartItem } from './ChartItem'
import { useEmployees } from '@/employees/hooks/useEmployees'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { EmployeeClass } from '@/employees/interfaces/Employee'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components'

const Tree = dynamic(
  () => import('react-organizational-chart').then(module => module.Tree),
  {
    ssr: false,
  }
)

const TreeNode = dynamic(
  () => import('react-organizational-chart').then(module => module.TreeNode),
  {
    ssr: false,
  }
)

export const Chart = () => {
  const [showModal, setShowModal] = useState(false)
  const [itemSelected, setItemSelected] = useState<EmployeeClass>()

  const {
    queryEmployees: { data: employees, isLoading, refetch },
  } = useEmployees()

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      {showModal && (
        <Modal
          employee={itemSelected || ({} as EmployeeClass)}
          closeModal={() => {
            setShowModal(false)
            refetch()
          }}
        />
      )}
      {isLoading && (
        <div className="w-screen h-screen bg-white bg-opacity-90 flex justify-center items-center z-30 absolute top-0 left-0">
          <Spinner />
        </div>
      )}
      <div className="w-screen flex flex-col items-center justify-center p-5 h-screen bg-gray-100">
        {!isLoading && employees && employees?.data?.length > 0 ? (
          <Tree
            lineWidth={'3px'}
            lineColor={'black'}
            lineBorderRadius={'10px'}
            label={<ChartItem className="bg-red-500" label="CEO" version={1} />}
          >
            {employees?.data?.map(employee => {
              if (employee?.role === 'MANAGER') {
                return (
                  <TreeNode
                    key={employee?.id}
                    label={
                      <ChartItem
                        label={employee?.name}
                        version={employee?.version}
                        className="bg-red-500"
                        onClick={() => {
                          // setShowModal(true)
                          // setItemSelected(employee)
                          window.alert(
                            "You can't edit a manager, please edit the employee"
                          )
                        }}
                      />
                    }
                  >
                    {employee?.managerHierarchy?.map(manager => {
                      return (
                        <TreeNode
                          key={manager?.id}
                          label={
                            <ChartItem
                              label={manager?.employee?.name}
                              version={manager?.employee?.version}
                              onClick={() => {
                                setShowModal(true)
                                setItemSelected(manager?.employee)
                              }}
                            />
                          }
                        />
                      )
                    })}
                  </TreeNode>
                )
              }
            })}
          </Tree>
        ) : (
          <h2>{`There aren't any employees`}</h2>
        )}
      </div>

      <div className="absolute bottom-20 right-20 w-auto h-16 px-5 py-3 flex justify-center items-center text-white font-bold gap-3">
        <span className="bg-opacity-70 bg-red-500 w-auto px-5 py-2 rounded-lg flex justify-center items-center">
          Manager
        </span>
        <span className="bg-opacity-70 bg-orange-400 w-auto px-5 py-2 rounded-lg flex justify-center items-center">
          You can click on any employee to edit it
        </span>
        <span className="bg-opacity-70 bg-green-500 flex justify-center items-center rounded-lg w-auto px-5 py-2">
          Version
        </span>
      </div>
    </>
  )
}
