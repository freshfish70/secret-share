using System;
using System.ComponentModel.DataAnnotations;

namespace SecretShare
{

    public record Secret
    {

        public Guid SecretId { get; init; }

        public String Value { get; init; }

        public DateTimeOffset CreatedAt { get; init; }

        public DateTimeOffset UpdatedAt { get; init; }
    }
}