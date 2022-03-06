using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SecretShare.Dtos.Request;
using SecretShare.Entities;
using SecretShare.models;

namespace SecretShare.Services
{
    public interface IBucketService
    {
        Task<Bucket> GetBucketAsync(Guid id, string retrievalPassphrase);
        Task<Bucket> CreateBucketAsync(Bucket bucket);
        Task<Secret> AddSecretToBucketAsync(Guid bucketId, Secret secret);
        Task<IEnumerable<Bucket>> GetBucketsAsync();
        Task DeleteBucketAsync(Guid id);
        Task<BucketSubmissionDetails> GetBucketSubmissionDetailsAsync(Guid submissionId);
    }
}