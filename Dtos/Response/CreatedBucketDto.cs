using System;

namespace SecretShare.Dtos.Response
{
    public record CreatedBucketDto
    {
        public Guid BucketId { get; init; }
        public Guid SubmissionId { get; init; }

    }
}