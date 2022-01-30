import { KeyService } from '@/lib/KeyService'
import crypto from 'crypto-js'
import { LockRounded, Settings, SpaOutlined } from '@material-ui/icons'
import useAxios from 'axios-hooks'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ShareDetails } from '../lib/share/ShareDetails'
import { KeyShuffler } from '@/lib/KeyShuffler'
import { IBucket } from '@/lib/dtos/response/IBucket'

interface CreateShareProps {
  onCreated: (shareDetails: ShareDetails) => void
}

export default function CreateShare({ onCreated }: CreateShareProps) {
  const { handleSubmit } = useForm()
  const [isCreatingShare, setIsCreatingShare] = useState(false)
  const keyService = new KeyService()
  const [
    { data: create, loading: creatingShare, error: getError, response: resp },
    doCreateBucket
  ] = useAxios<IBucket, number, any>({ url: '/api/buckets', method: 'POST' }, { manual: true })

  const doHandleFormSubmit = async () => {
    setIsCreatingShare(true)
    var passphrase = keyService.createPassphrase(24, 5)
    var { publicKeyPem, privateKeyPem } = keyService.createKeyPair(passphrase)
    var encryptedPrivateKey = crypto.AES.encrypt(privateKeyPem, passphrase).toString()
    var res = await doCreateBucket({
      data: {
        publicKey: publicKeyPem,
        privateKey: encryptedPrivateKey
      }
    })
    onCreated({
      passphrase,
      submissionId: `${res.data.submissionId}`,
      bucketId: `${res.data.bucketId}`
    })
    setIsCreatingShare(false)
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
