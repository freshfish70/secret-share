using System;
using System.Collections.Generic;
using SecretShare;

namespace secretshare.Dtos.Response
{
    public class BucketDto
    {
        public Guid BucketId { get; init; }

        public string PublicKey { get; init; }

        public string PrivateKey { get; init; }

        public ICollection<Secret> Secrets { get; init; }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}