import { LockRounded, Settings, SpaOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ShareDetails } from '../lib/share/ShareDetails'

interface CreateShareProps {
  onCreated: (shareDetails: ShareDetails) => void
}

export default function CreateShare({ onCreated }: CreateShareProps) {
  const { handleSubmit } = useForm()
  const [creatingShare, setCreatingShare] = useState(false)

  const doHandleFormSubmit = () => {
    setCreatingShare(true)
    setTimeout(() => {
      onCreated({} as any)
    }, 3000)
  }

  return (
    <form
      onSubmit={handleSubmit(doHandleFormSubmit)}
      className='flex flex-col align-middle justify-center gap-5 min-h-full'
    >
      <button className='w-52 bg-chambray-400 px-6 py-4 rounded-md text-white uppercase hover:bg-chambray-300 transition-all flex-none h-16'>
        {creatingShare ? (
          <>
            <Settings fontSize='small' className='animate-spin mr-2' />
            <span className='text-xs'> GENERATING</span>
          </>
        ) : (
          <>
            <LockRounded fontSize='small' className='mr-2 w-2' />
            <span className='text-xs'> CREATE SHARE</span>
          </>
        )}
      </button>
    </form>
  )
}
