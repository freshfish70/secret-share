using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SecretShare.DataAccess;
using SecretShare.Entities;

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
    }
}
