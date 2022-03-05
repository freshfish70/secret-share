using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SecretShare.Dtos.Request;
using SecretShare.Dtos.Response;
using SecretShare.Services;
using SecretShare.Entities;

namespace SecretShare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BucketsController : ControllerMain
    {
        private IBucketService BucketService { get; init; }
        private IMapper Mapper { get; init; }
        public BucketsController(IBucketService bucketService, IMapper mapper)
        {
            this.BucketService = bucketService;
            this.Mapper = mapper;
        }

        /// <summary>
        /// Gets a bucket by its ID.
        /// </summary>
        /// <param name="id">the id of the bucket to get</param>
        /// <returns>bucket with the given id</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<BucketDto>> GetBucketById(Guid id)
        {
            var bucket = await this.BucketService.GetBucketAsync(id);
            return Mapper.Map<Bucket, BucketDto>(bucket);
        }

        /// <summary>
        /// Creates a new bucket.
        /// </summary>
        /// <param name="model">bucket model</param>
        [HttpPost("")]
        public async Task<ActionResult<Bucket>> CreateBucket(CreateBucketDto model)
        {
            var bucket = Mapper.Map<CreateBucketDto, Bucket>(model);
            var createdBucket = await BucketService.CreateBucketAsync(bucket);
            return CreatedAtAction(nameof(this.GetBucketById), new { id = createdBucket.BucketId }, new CreatedBucketDto()
            {
                BucketId = bucket.BucketId,
                SubmissionId = bucket.SubmissionId
            });
        }

        /// <summary>
        /// Adds a new secret to a bucket.
        /// </summary>
        /// <param name="bucketSubmissionId">the bucket submission id</param>
        /// <param name="secret">secret to add to bucket</param>
        /// <returns></returns>
        [HttpPost("{bucketSubmissionId}/secrets")]
        public async Task<ActionResult<Bucket>> CreateBucketSecret(Guid bucketSubmissionId, [FromBody] CreateSecretDto secret)
        {
            var secretEntity = Mapper.Map<CreateSecretDto, Secret>(secret);
            var createdBucket = await this.BucketService.AddSecretToBucketAsync(bucketSubmissionId, secretEntity);
            return CreatedAtAction(nameof(this.GetBucketById), new { bucketSubmissionId }, null);
        }

        /// <summary>
        /// Gets all buckets
        /// </summary>
        /// <returns>all bucket in the application</returns>
        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<BucketDto>>> GetBuckets()
        {
            var buckets = await this.BucketService.GetBucketsAsync();
            return Ok(Mapper.Map<IEnumerable<Bucket>, List<BucketDto>>(buckets));
        }
    }
}
