
using System;
using System.ComponentModel.DataAnnotations;
using SecretShare.Entities.Interfaces;

namespace SecretShare.Entities
{

    public record SecretDto : IDateTracked
    {
        public Guid SecretId { get; init; }

        public string Title { get; init; }

        public string Value { get; init; }

        public bool Viewed { get; init; }

        public DateTime? ViewedAt { get; init; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}