using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using SecretShare.Entities.Interfaces;
using SecretShare.Entities;

namespace SecretShare
{

    /// <summary>
    /// A secret is a submitted secret for bucket.
    /// It contains the encrypted data to be decrypted by the bucket owner. 
    /// </summary>
    /// <value></value>
    public record Secret : IDateTracked
    {
        /// <summary>
        /// The id of this secret.
        /// </summary>
        public Guid SecretId { get; init; }

        // TODO ADD FOREIGNKEY
        public Bucket Bucket { get; set; }

        /// <summary>
        /// The encrypted value
        /// </summary>
        public String Value { get; init; }

        /// <summary>
        /// Flag for viewed status
        /// </summary>
        public bool Viewed { get; init; }

        /// <summary>
        /// Date when viewed
        /// </summary>
        public DateTimeOffset ViewedAt { get; init; }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}