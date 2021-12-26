using SecretShare.Lib.Repository;
using SecretShare.Entities;
using System.Threading.Tasks;

namespace SecretShare.DataAccess
{
    public interface IDatabaseAccess
    {
        IBucketRepository<Bucket> BucketRepository { get; }
        ISecretRepository<Secret> SecretRepository { get; }

        Task SaveAsync();
    }
}