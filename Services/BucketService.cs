using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Hellang.Middleware.ProblemDetails;
using SecretShare.DataAccess;
using SecretShare.Entities;
using SecretShare.models;

namespace SecretShare.Services
{
    public class BucketService : IBucketService
    {
        private IDatabaseAccess Db { get; init; }
        public BucketService(IDatabaseAccess db)
        {
            Db = db;
        }

        private static string ComputeHash(string value)
        {
            using SHA256 sha256Hash = SHA256.Create();
            byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(value));
            StringBuilder stringbuilder = new();
            for (int i = 0; i < bytes.Length; i++)
            {
                stringbuilder.Append(bytes[i].ToString("x2"));
            }
            return stringbuilder.ToString();
        }

        /// <summary>
        /// Creates a bucket
        /// </summary>
        /// <param name="bucket"></param>
        /// <returns></returns>
        public async Task<Bucket> CreateBucketAsync(Bucket bucket)
        {
            bucket.RetrievalPassphrase = ComputeHash(bucket.RetrievalPassphrase);
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

        public async Task DeleteBucketAsync(Guid id, string retrievalPassphrase)
        {
            var bucket = await GetBucketAsync(id, retrievalPassphrase);
            Db.BucketRepository.Delete(bucket);
            System.Console.WriteLine(bucket.BucketId);
            await Db.SaveAsync();
        }

        public async Task<Bucket> GetBucketAsync(Guid id, string retrievalPassphrase)
        {
            var hash = ComputeHash(retrievalPassphrase);
            var bucket = (await Db.BucketRepository.GetAsync(e => e.BucketId == id, null, "Secrets")).FirstOrDefault();
            if (bucket is not null)
            {
                if (bucket.RetrievalPassphrase != hash)
                {
                    throw new Exception("bad passphrase");
                }
            }
            else
            {
                throw new Exception("Not found");
            }
            return bucket;
        }

        public async Task<IEnumerable<Bucket>> GetBucketsAsync()
        {
            return await Db.BucketRepository.GetBucketsWithSecrets();
        }

        public async Task<BucketSubmissionDetails> GetBucketSubmissionDetailsAsync(Guid submissionId)
        {
            return await Db.BucketRepository.GetBucketSubmissionDetailsAsync(submissionId);
        }
    }
}
