using System;
using SecretShare.Entities.Interfaces;

namespace SecretShare.models
{
    public class BucketSubmissionDetails : IDateTracked
    {
        public string PublicKey { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}