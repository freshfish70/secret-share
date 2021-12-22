using System;

namespace SecretShare.Entities.Interfaces
{
    public interface IDateTracked
    {
        DateTimeOffset CreatedAt { get; set; }
        DateTimeOffset UpdatedAt { get; set; }

    }
}