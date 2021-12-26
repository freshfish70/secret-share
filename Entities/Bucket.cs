using System;
using System.Collections.Generic;
using SecretShare.Entities.Interfaces;

namespace SecretShare.Entities
{

    public record Bucket : IDateTracked
    {

        public Bucket()
        {
            this.Secrets = new HashSet<Secret>();
        }

        public Guid BucketId { get; init; }

        public string PublicKey { get; set; }

        public string PrivateKey { get; set; }

        public virtual ICollection<Secret> Secrets { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}