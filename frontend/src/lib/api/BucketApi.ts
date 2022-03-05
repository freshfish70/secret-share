import { CreateBucketDto } from '../dtos/Request/createBucketDto'
import { HttpClient } from '../http/HttpClient'
import { Bucket } from '../models/Bucket'
import { CreatedBucket } from '../models/CreatedBucket'

export const getBucketById = (id: string) =>
  HttpClient.get({ url: `/buckets/${id}`, model: Bucket })

export const createBucket = (data: CreateBucketDto) =>
  HttpClient.post({ url: '/buckets', data, model: CreatedBucket })
