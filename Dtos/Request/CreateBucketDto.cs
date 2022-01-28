using System.ComponentModel.DataAnnotations;

namespace SecretShare.Dtos.Request
{
    public class CreateBucketDto
    {
        [Required]
        public string PublicKey { get; init; }

        [Required]
        public string PrivateKey { get; init; }
    }
}