import React, { FC } from 'react'
import { EmptyBucket } from '../components/EmptyBucket'
import SecretRevealer from '../components/SecretRevealer'
import { useGetBucket } from '../lib/hooks/buckets'

interface BucketDisplayProps {
  bucketId: string
}

export const BucketDisplay: FC<BucketDisplayProps> = ({ bucketId }) => {
  const { status, data, refetch } = useGetBucket(bucketId)
  const secrets = data?.data.secrets
  const bucket = data?.data

  return (
    <>
      {(bucket &&
        secrets &&
        secrets.map((s, i) => {
          return (
            <SecretRevealer
              key={i}
              title={s.title}
              content={s.value}
              privateKey={bucket.privateKey}
            />
          )
        })) || <EmptyBucket />}{' '}
    </>
  )
}
