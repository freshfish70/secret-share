using System;
using System.Threading.Tasks;
using SecretShare.Lib.Repository;
using SecretShare.Entities;

namespace SecretShare.DataAccess
{
    public class DatabaseAccess : IDatabaseAccess, IDisposable
    {

        private SecretContext Context { get; init; }

        private IBucketRepository<Bucket> bucketRepository;
        private ISecretRepository<Secret> secretRepository;

        public DatabaseAccess(SecretContext context)
        {
            this.Context = context;
        }

        public IBucketRepository<Bucket> BucketRepository
        {
            get
            {
                if (bucketRepository is null)
                {
                    bucketRepository = new BucketRepository(this.Context);
                }
                return bucketRepository;
            }
        }

        public ISecretRepository<Secret> SecretRepository
        {
            get
            {
                if (secretRepository is null)
                {
                    secretRepository = new SecretRepository(this.Context);
                }
                return secretRepository;
            }
        }

        public async Task SaveAsync()
        {
            await this.Context.SaveChangesAsync();
        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
