import {
  CopyAllOutlined,
  DeleteForever,
  FileCopyOutlined,
  FileCopyRounded
} from '@mui/icons-material'
import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CopyToClipboard } from '../components/Clipboard'
import { EmptyBucket } from '../components/EmptyBucket'
import Input from '../components/Input'
import MainButton from '../components/MainButton'
import SecretRevealer from '../components/SecretRevealer'
import TextIconAction from '../components/TextIconAction'
import { useDeleteBucket, useGetBucket } from '../lib/hooks/buckets'
import { bucketRoute } from '../lib/routes/bucket.route'
import { secretRoute } from '../lib/routes/secret.route'

interface BucketDisplayProps {
  bucketId: string
}

export const BucketDisplay: FC<BucketDisplayProps> = ({ bucketId }) => {
  const [retrievalPassphrase, setRetrievalPassPhrase] = useState('')
  const [privateKeyPassphrase, setPrivateKeyPassphrase] = useState('')
  const [autoRefetch, setAutoRefetch] = useState(false)
  const { replace } = useHistory()
  const { data, refetch, isError, isSuccess } = useGetBucket(
    bucketId,
    {
      retrievalPassphrase
    },
    autoRefetch
  )
  const {
    isError: deleteError,
    isSuccess: deleteSuccess,
    mutateAsync: deleteBucket
  } = useDeleteBucket()
  const secrets = data?.data.secrets
  const bucket = data?.data

  useEffect(() => {
    if (isSuccess) {
      setAutoRefetch(true)
    }
  }, [isSuccess])

  const handleDeleteBucket = async () => {
    if (!bucket) return
    console.log(bucket)

    await deleteBucket({
      bucketId: bucket.bucketId,
      bucketDetails: { retrievalPassphrase: retrievalPassphrase }
    })
  }

  useEffect(() => {
    if (deleteSuccess) replace('/')
  }, [deleteSuccess])

  const bucketView = () => {
    if (!bucket)
      return (
        <>
          <Input
            key={1}
            className='mb-3 mt-6'
            name='retrievalPassphrase'
            placeholder='Enter retrieval key'
            type={'password'}
            onChange={(v) => setRetrievalPassPhrase(v.target.value)}
          />
          <MainButton onClick={() => refetch()} className='min-w-full'>
            Open bucket
          </MainButton>
          {isError && (
            <p className='text-red-400 mt-3 text-right animate-fadeIn'>{'Failed to open bucket'}</p>
          )}
        </>
      )
    if (secrets && secrets.length) {
      return (
        <>
          <Input
            key={2}
            className='mt-6'
            placeholder='Private key passphrase'
            name='passphrase'
            type={'password'}
            onChange={(v) => setPrivateKeyPassphrase(v.target.value)}
          />
          {secrets.map((s, i) => {
            return (
              <SecretRevealer
                key={i}
                title={s.title}
                content={s.value}
                privateKey={bucket.privateKey}
                passphrase={privateKeyPassphrase}
              />
            )
          })}
        </>
      )
    } else {
      return <EmptyBucket />
    }
  }

  return (
    <>
      {bucket && (
        <section className='mt-3'>
          <CopyToClipboard
            value={`${import.meta.env.VITE_BASE_URL}${secretRoute.submitSecret(
              bucket?.submissionId
            )}`}
          >
            <TextIconAction Icon={FileCopyOutlined} text={'Copy share url'} action={() => {}} />
          </CopyToClipboard>
          <TextIconAction
            Icon={DeleteForever}
            text={'Delete bucket'}
            className={'text-yellow-700'}
            action={handleDeleteBucket}
          />
        </section>
      )}
      {bucketView()}
    </>
  )
}
