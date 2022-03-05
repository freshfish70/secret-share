import { useMutation, useQuery } from 'react-query'
import { createBucket, getBucketById } from '../../api/BucketApi'
import { CreateBucketDto } from '../../dtos/Request/createBucketDto'
import { BucketDto } from '../../dtos/Response/bucketDto'

export const useGetBucket = (bucketId: string) => {
  return useQuery(['bucket', bucketId], () => getBucketById(bucketId))
}

export const useCreateBucket = () => {
  return useMutation((bucketDetails: CreateBucketDto) => createBucket(bucketDetails))
}
