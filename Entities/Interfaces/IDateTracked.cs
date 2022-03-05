using System;

namespace SecretShare.Entities.Interfaces
{
    public interface IDateTracked
    {
        DateTime CreatedAt { get; set; }
        DateTime UpdatedAt { get; set; }

    }
}