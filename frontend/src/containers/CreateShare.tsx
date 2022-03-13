import { KeyService } from '@/lib/KeyService'
import crypto from 'crypto-js'
import { LockRounded, Settings } from '@mui/icons-material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ShareDetails } from '../lib/share/ShareDetails'
import { useCreateBucket } from '../lib/hooks/buckets'

interface CreateShareProps {
  onCreated: (shareDetails: ShareDetails) => void
}

export default function CreateShare({ onCreated }: CreateShareProps) {
  const { handleSubmit } = useForm()
  const [isCreatingShare, setIsCreatingShare] = useState(false)
  const keyService = new KeyService()
  const { mutateAsync: doCreateBucket } = useCreateBucket()

  const doHandleFormSubmit = async () => {
    setIsCreatingShare(true)
    setTimeout(async () => {
      let passphrase = import.meta.env.VITE_BASE_DEV_PASS
      let retrievalPassphrase = import.meta.env.VITE_BASE_DEV_PASS
      console.log(passphrase)

      if (import.meta.env.MODE == 'production') {
        passphrase = keyService.createPassphrase(24, 3)
        retrievalPassphrase = keyService.createPassphrase(24, 3)
      }
      try {
        var { publicKeyPem, privateKeyPem } = keyService.createKeyPair(passphrase)
        var encryptedPrivateKey = crypto.AES.encrypt(privateKeyPem, passphrase).toString()
        var res = await doCreateBucket({
          publicKey: publicKeyPem,
          privateKey: encryptedPrivateKey,
          retrievalPassphrase
        })
        onCreated({
          passphrase,
          submissionId: `${res.data.submissionId}`,
          bucketId: `${res.data.bucketId}`,
          retrievalPassphrase
        })
      } catch (error) {
        console.log(error)
      }
      setIsCreatingShare(false)
    }, 1000)
  }

  return (
    <form
      onSubmit={handleSubmit(doHandleFormSubmit)}
      className='flex flex-col align-middle justify-center gap-5 min-h-full'
    >
      <button className='w-52 bg-chambray-400 px-6 py-4 rounded-md text-white uppercase hover:bg-chambray-300 transition-all flex-none h-16'>
        {isCreatingShare ? (
          <>
            <Settings fontSize='small' className='animate-spin mr-2' />
            <span className='text-xs'>GENERATING</span>
          </>
        ) : (
          <>
            <LockRounded fontSize='small' className='mr-2 w-2' />
            <span className='text-xs'>CREATE BUCKET</span>
          </>
        )}
      </button>
    </form>
  )
}
