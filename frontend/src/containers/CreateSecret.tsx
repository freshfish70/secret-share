import { SendRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ContentBox from '../components/ContentBox'
import { EmptyBucket } from '../components/EmptyBucket'
import MainButton from '../components/MainButton'
import { SecretShared } from '../components/SecretShard'
import { useCreateSecret } from '../lib/hooks/buckets'
import { KeyService } from '../lib/KeyService'

interface SecretFormValues {
  title: string
  value: string
}

interface CreateSecretProps {
  submissionId: string
  publicKey?: string
}

const SAVE_ERROR = 'Failed to share secret'

export default function CreateSecret({ submissionId, publicKey }: CreateSecretProps) {
  const { handleSubmit, register, reset: resetForm } = useForm()
  const { mutateAsync, isError, isLoading, isSuccess, reset: resetCreate } = useCreateSecret()
  const [error, setError] = useState('')

  const doHandleForm = async (form: SecretFormValues) => {
    try {
      if (!publicKey) throw new Error('Missing public key')
      var ks = new KeyService()
      form.value = btoa(ks.encryptWithPublicKey(publicKey, form.value))
      await mutateAsync({ id: submissionId, bucketSecret: { ...form } })
      setError('')
    } catch (error) {
      setError(SAVE_ERROR)
    }
  }

  return (
    <>
      {(isSuccess && (
        <div className='flex flex-col animate-fadeIn'>
          <SecretShared />
          <MainButton
            className='mt-3'
            onClick={() => {
              resetForm()
              resetCreate()
            }}
          >
            Share a new secret
          </MainButton>
        </div>
      )) || (
        <form className='min-w-full animate-fadeIn' onSubmit={handleSubmit(doHandleForm)}>
          <input
            type='text'
            id='title-secret'
            placeholder='Title'
            className='min-w-full rounded-md mb-5 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600'
            disabled={isLoading}
            {...register('title')}
          />
          <textarea
            placeholder='Paste your secret here...'
            id='secret-content'
            className='min-w-full rounded-md mb-5 h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600'
            disabled={isLoading}
            {...register('value')}
          ></textarea>
          <MainButton className='min-w-full'>
            share
            <SendRounded className='ml-3 text-xs' fontSize='small' />
          </MainButton>
          {error && <p className='text-red-400 mt-3 text-right animate-fadeIn'>{error}</p>}
        </form>
      )}
    </>
  )
}
