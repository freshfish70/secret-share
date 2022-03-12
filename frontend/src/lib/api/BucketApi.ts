import { CreateBucketDto } from '../dtos/Request/createBucketDto'
import { CreateSecretDto } from '../dtos/Request/createSecretDto'
import { GetBucketDto } from '../dtos/Request/getBucketDto'
import { HttpClient } from '../http/HttpClient'
import { Bucket } from '../models/Bucket'
import { CreatedBucket } from '../models/CreatedBucket'
import { SubmissionDetails } from '../models/SubmissionDetails'

export const getBucketById = (id: string, data: GetBucketDto) =>
  HttpClient.post({ url: `/buckets/${id}`, model: Bucket, data })

export const deleteBucketById = (id: string, data: GetBucketDto) =>
  HttpClient.post({ url: `/buckets/${id}/destroy`, model: Bucket, data })

export const createBucket = (data: CreateBucketDto) =>
  HttpClient.post({ url: '/buckets', data, model: CreatedBucket })

export const createSecret = (submissionId: string, data: CreateSecretDto) =>
  HttpClient.post({ url: `/buckets/submit/${submissionId}/secrets`, data })

export const getSubmission = (submissionId: string) =>
  HttpClient.get({ url: `/buckets/submit/${submissionId}`, model: SubmissionDetails })
