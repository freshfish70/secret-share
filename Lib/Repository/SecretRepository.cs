using SecretShare.DataAccess;
using SecretShare.Entities;

namespace SecretShare.Lib.Repository
{
    public class SecretRepository : EfRepository<Secret>, ISecretRepository<Secret>
    {
        public SecretRepository(SecretContext context) : base(context)
        {
        }
    }
}