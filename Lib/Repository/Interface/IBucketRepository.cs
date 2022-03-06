using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SecretShare.Entities;
using SecretShare.models;

namespace SecretShare.Lib.Repository
{
    public interface IBucketRepository<T> : IRepository<T>
    {
        Task<Bucket> GetBucketBySubmissionIdAsync(Guid submissionId);
        Task<BucketSubmissionDetails> GetBucketSubmissionDetailsAsync(Guid submissionId);
        Task<IEnumerable<Bucket>> GetBucketsWithSecrets();
    }
}
