using System.ComponentModel.DataAnnotations;

namespace secretshare.Dtos.Request
{
    public class CreateBucketDto
    {
        [Required]
        public string PublicKey { get; init; }

        [Required]
        public string PrivateKey { get; init; }
    }
}