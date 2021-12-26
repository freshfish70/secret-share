using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using secretshare.Dtos.Request;
using SecretShare.Entities;

namespace secretshare.Services
{
    public interface IBucketService
    {
        Task<Bucket> GetBucketAsync(Guid id);
        Task<Bucket> CreateBucketAsync(Bucket bucket);
        Task<Secret> AddSecretToBucketAsync(Guid bucketId, Secret secret);
        Task<IEnumerable<Bucket>> GetBucketsAsync();
        Task DeleteBucketAsync(Guid id);
    }
}