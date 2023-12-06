import React from 'react'

interface Props {
  children: React.ReactNode
}
export const MdxContainer = ({ children }: Props) => {
  return (
    <div className="w-full px-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl">{children}</div>
    </div>
  )
}
