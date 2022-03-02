using System.ComponentModel.DataAnnotations;

namespace SecretShare.Dtos.Request
{
    public class CreateSecretDto
    {
        [Required]
        [MaxLength(255)]
        public string Title { get; init; }

        [Required]
        public string Value { get; init; }
    }
}