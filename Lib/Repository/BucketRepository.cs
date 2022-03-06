using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SecretShare.DataAccess;
using SecretShare.Entities;
using SecretShare.models;

namespace SecretShare.Lib.Repository
{
    public class BucketRepository : EfRepository<Bucket>, IBucketRepository<Bucket>
    {
        public BucketRepository(SecretContext context) : base(context)
        {
        }

        public async Task<Bucket> GetBucketBySubmissionIdAsync(Guid submissionId)
        {
            return await dbSet.Where(e => e.SubmissionId == submissionId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Bucket>> GetBucketsWithSecrets()
        {
            return await dbSet.Include(bucket => bucket.Secrets).ToListAsync();
        }

        public async Task<BucketSubmissionDetails> GetBucketSubmissionDetailsAsync(Guid submissionId)
        {
            return await dbSet.Where(bucket => bucket.SubmissionId == submissionId).Select(bucket => new BucketSubmissionDetails()
            {
                PublicKey = bucket.PublicKey,
                CreatedAt = bucket.CreatedAt,
                UpdatedAt = bucket.UpdatedAt,
            }).FirstOrDefaultAsync();
        }
    }
}
