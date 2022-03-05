using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using SecretShare.Entities.Interfaces;
using SecretShare.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace SecretShare.Entities
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

        /// <summary>
        /// Related bucket
        /// </summary>
        [ForeignKey("BucketId")]
        [Required]
        public Bucket Bucket { get; set; }

        /// <summary>
        /// A title/description of the secret
        /// </summary>
        [Column(TypeName = "varchar(255)")]
        public String Title { get; init; }

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
        public DateTime? ViewedAt { get; init; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}