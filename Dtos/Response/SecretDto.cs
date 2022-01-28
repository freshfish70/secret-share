
using System;
using System.ComponentModel.DataAnnotations;
using SecretShare.Entities.Interfaces;

namespace SecretShare.Entities
{

    public record SecretDto : IDateTracked
    {

        public Guid SecretId { get; init; }

        public String Title { get; init; }

        public String Value { get; init; }

        public bool Viewed { get; init; }

        public DateTimeOffset ViewedAt { get; init; }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}