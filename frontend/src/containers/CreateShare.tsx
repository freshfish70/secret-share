import { LockRounded } from '@material-ui/icons'
import React from 'react'
import { ShareDetails } from '../lib/share/ShareDetails'

interface CreateShareProps {
  onCreated: (shareDetails: ShareDetails) => void
}

export default function CreateShare({ onCreated }: CreateShareProps) {
  return (
    <form className='flex flex-col align-middle justify-center gap-5 min-h-full'>
      <button className='bg-chambray-400 px-6 py-4 rounded-md text-white uppercase hover:bg-chambray-300 transition-all flex-none h-16'>
        <LockRounded fontSize='small' className='mr-2 w-2' />
        CREATE SHARE
      </button>
    </form>
  )
}
