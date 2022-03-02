using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SecretShare.Entities.Interfaces;
using SecretShare.Entities;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace SecretShare.DataAccess
{
    public class SecretContext : DbContext
    {
        public SecretContext(DbContextOptions<SecretContext> options) : base(options) { }

        public DbSet<Bucket> Buckets { get; set; }
        public DbSet<Secret> Secrets { get; set; }

        public async override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var entities = ChangeTracker.Entries().Where(entry => entry.Entity is IDateTracked && (entry.State == EntityState.Added || entry.State == EntityState.Modified));
            foreach (var entity in entities)
            {
                ((IDateTracked)entity.Entity).UpdatedAt = DateTimeOffset.UtcNow;
                if (entity.State == EntityState.Added)
                {
                    ((IDateTracked)entity.Entity).CreatedAt = DateTimeOffset.UtcNow;
                }
            }
            return await base.SaveChangesAsync(cancellationToken);
        }


    }

}