using Microsoft.EntityFrameworkCore;
using SecretShare.Entities;

namespace SecretShare.DataAccess
{
    public class SecretContext : DbContext
    {
        public SecretContext(DbContextOptions<SecretContext> options) : base(options) { }

        public DbSet<Bucket> Buckets { get; set; }
        public DbSet<Secret> Secrets { get; set; }
    }
}