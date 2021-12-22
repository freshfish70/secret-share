using System;
using System.Threading.Tasks;
using SecretShare.Lib.Repository;
using SecretShare.Entities;

namespace SecretShare.DataAccess
{
    public class DatabaseAccess : IDatabaseAccess, IDisposable
    {

        private SecretContext Context { get; init; }

        private EfRepository<Bucket> bucketRepository;

        public DatabaseAccess(SecretContext context)
        {
            this.Context = context;
        }

        public IRepository<Bucket> BucketRepository
        {
            get
            {
                if (bucketRepository is null)
                {
                    bucketRepository = new EfRepository<Bucket>(this.Context);
                }
                return bucketRepository;
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