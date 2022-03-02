using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SecretShare.Entities;

namespace SecretShare.Lib.Repository
{
    public interface IBucketRepository<T> : IRepository<T>
    {
        Task<Bucket> GetBucketBySubmissionIdAsync(Guid submissionId);
        Task<IEnumerable<Bucket>> GetBucketsWithSecrets();
    }
}
