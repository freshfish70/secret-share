using System;
using System.Collections.Generic;
using SecretShare.Entities;
using SecretShare.Entities.Interfaces;

namespace SecretShare.Dtos.Response
{
    public class BucketDto : IDateTracked
    {
        public Guid BucketId { get; init; }

        public Guid SubmissionId { get; init; }

        public string PublicKey { get; init; }

        public string PrivateKey { get; init; }

        public IEnumerable<SecretDto> Secrets { get; init; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}