import { useMutation, useQuery } from 'react-query'
import { createBucket, createSecret, getBucketById, getSubmission } from '../../api/BucketApi'
import { CreateBucketDto } from '../../dtos/Request/createBucketDto'
import { CreateSecretDto } from '../../dtos/Request/createSecretDto'

export const useGetBucket = (bucketId: string) => {
  return useQuery(['bucket', bucketId], () => getBucketById(bucketId))
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
