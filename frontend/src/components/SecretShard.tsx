import React, { FC } from 'react'
import { Error, Lock } from '@mui/icons-material'

export const SecretShared: FC = () => {
  return (
    <section className='my-3'>
      <div className='min-w-full min-h-full relative transition-all overflow-hidden'>
        <div
          className={`animate-pulse min-w-full min-h-full absolute flex flex-col justify-center items-center text-green-400 transition-all`}
        >
          <Lock />
          <span className='text-xs mt-2'>Secret shared successfully</span>
        </div>
        <div
          className={`${
            true ? 'text-opacity-0' : 'text-opacity-100'
          } transition-all min-w-full rounded-md h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600`}
        ></div>
      </div>
    </section>
  )
}
