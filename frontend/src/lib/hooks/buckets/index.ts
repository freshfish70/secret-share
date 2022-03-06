import { useMutation, useQuery } from 'react-query'
import { createBucket, createSecret, getBucketById, getSubmission } from '../../api/BucketApi'
import { CreateBucketDto } from '../../dtos/Request/createBucketDto'
import { CreateSecretDto } from '../../dtos/Request/createSecretDto'
import { GetBucketDto } from '../../dtos/Request/getBucketDto'

export const useGetBucket = (bucketId: string, data: GetBucketDto) => {
  return useQuery(['bucket', bucketId], () => getBucketById(bucketId, data), {
    enabled: false,
    retry: false
  })
}

export const useCreateBucket = () => {
  return useMutation((bucketDetails: CreateBucketDto) => createBucket(bucketDetails))
}

export const useCreateSecret = () => {
  return useMutation(
    ({ id: submissionId, bucketSecret }: { id: string; bucketSecret: CreateSecretDto }) =>
      createSecret(submissionId, bucketSecret)
  )
}

export const useGetSubmissionDetails = (submissionId: string) => {
  return useQuery(['submission', submissionId], () => getSubmission(submissionId), {
    enabled: !!submissionId
  })
}
