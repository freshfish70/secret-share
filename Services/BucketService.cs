using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SecretShare.DataAccess;
using SecretShare.Entities;

namespace SecretShare.Services
{
    public class BucketService : IBucketService
    {
        private IDatabaseAccess Db { get; init; }
        public BucketService(IDatabaseAccess db)
        {
            Db = db;
        }

        /// <summary>
        /// Creates a bucket
        /// </summary>
        /// <param name="bucket"></param>
        /// <returns></returns>
        public async Task<Bucket> CreateBucketAsync(Bucket bucket)
        {
            Db.BucketRepository.Insert(bucket);
            await Db.SaveAsync();
            return bucket;
        }

        public async Task<Secret> AddSecretToBucketAsync(Guid bucketId, Secret secret)
        {
            Bucket bucket = await Db.BucketRepository.GetBucketBySubmissionIdAsync(bucketId);
            bucket.Secrets.Add(secret);
            await Db.SaveAsync();
            return secret;
        }

        public async Task DeleteBucketAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<Bucket> GetBucketAsync(Guid id)
        {
            var bucket = (await Db.BucketRepository.GetAsync(e => e.BucketId == id, null, "Secrets")).FirstOrDefault();
            return bucket;
        }

        public async Task<IEnumerable<Bucket>> GetBucketsAsync()
        {
            return await Db.BucketRepository.GetBucketsWithSecrets();
        }
    }
}
