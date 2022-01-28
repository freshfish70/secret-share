using System;
using System.Collections.Generic;
using SecretShare.Entities.Interfaces;

namespace SecretShare.Entities
{

    /// <summary>
    /// A bucket is a en entity that can contain several secrets.
    /// The bucket holds the public and private key for encrypting and decrypting.
    /// </summary>
    /// <value></value>
    public record Bucket : IDateTracked
    {

        /// <summary>
        /// The id of this bucket
        /// </summary>
        public Guid BucketId { get; init; }

        /// <summary>
        /// The id used to get this bucket for submission
        /// </summary>
        public Guid SubmissionId { get; init; } = Guid.NewGuid();

        /// <summary>
        /// The public key for this bucket, used for encrypting
        /// </summary>
        public string PublicKey { get; init; }

        /// <summary>
        /// The private key used to decrypt the secrets submitted.
        /// This key should be encrypted before stored.
        /// </summary>
        public string PrivateKey { get; init; }

        /// <summary>
        /// All secrets belonging to this bucket.
        /// </summary>
        public ICollection<Secret> Secrets { get; init; }
        public Bucket()
        {
            this.Secrets = new HashSet<Secret>();
        }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}