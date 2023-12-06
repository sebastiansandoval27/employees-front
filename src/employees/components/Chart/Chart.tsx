'use client'
import { ChartItem } from './ChartItem'
import { useEmployees } from '@/employees/hooks/useEmployees'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal'
import { EmployeeClass } from '@/employees/interfaces/Employee'
import dynamic from 'next/dynamic'

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
      <div className="w-full min-h-screen flex flex-col items-center justify-start p-5">
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && employees && employees?.data?.length > 0 ? (
          <Tree
            lineWidth={'3px'}
            lineColor={'black'}
            lineBorderRadius={'10px'}
            label={<ChartItem label="CEO" version={1} />}
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
                        onClick={() => {
                          setShowModal(true)
                          setItemSelected(employee)
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
    </>
  )
}
