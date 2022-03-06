import { CreateBucketDto } from '../dtos/Request/createBucketDto'
import { CreateSecretDto } from '../dtos/Request/createSecretDto'
import { HttpClient } from '../http/HttpClient'
import { Bucket } from '../models/Bucket'
import { CreatedBucket } from '../models/CreatedBucket'
import { SubmissionDetails } from '../models/SubmissionDetails'

export const getBucketById = (id: string) =>
  HttpClient.get({ url: `/buckets/${id}`, model: Bucket })

export const createBucket = (data: CreateBucketDto) =>
  HttpClient.post({ url: '/buckets', data, model: CreatedBucket })

export const createSecret = (submissionId: string, data: CreateSecretDto) =>
  HttpClient.post({ url: `/buckets/submit/${submissionId}/secrets`, data })

export const getSubmission = (submissionId: string) =>
  HttpClient.get({ url: `/buckets/submit/${submissionId}`, model: SubmissionDetails })
