using System;
using System.Collections.Generic;

namespace SecretShare.Entities
{

    public record Bucket
    {

        public Guid BucketId { get; init; }

        public String PublicKey { get; init; }

        public String PrivateKey { get; init; }

        public ICollection<Secret> Secrets { get; init; }

        public DateTimeOffset CreatedAt { get; init; }

        public DateTimeOffset UpdatedAt { get; init; }
    }
}