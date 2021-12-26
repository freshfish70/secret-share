using SecretShare.DataAccess;
using SecretShare.Entities;

namespace SecretShare.Lib.Repository
{
    public class BucketRepository : EfRepository<Bucket>, IBucketRepository<Bucket>
    {
        public BucketRepository(SecretContext context) : base(context)
        {
        }
    }
}