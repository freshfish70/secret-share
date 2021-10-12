import React, { ReactNode } from 'react'

export default function ContentBox({ children }: { children: ReactNode }) {
  return (
    <div className='w-3/4'>
      <div className='border-b border-chambray-700 border-solid p-8 max-w-3xl shadow-2xl bg-chambray-800 bg-opacity-50 flex flex-col justify-center items-center rounded-xl'>
        {children}
      </div>
    </div>
  )
}
