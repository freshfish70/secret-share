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
    public class BucketController : ControllerMain
    {
        private IBucketService bucketService { get; init; }
        private IMapper Mapper { get; init; }
        public BucketController(IBucketService bucketService, IMapper mapper)
        {
            this.bucketService = bucketService;
            this.Mapper = mapper;
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<Bucket>> GetBuckets()
        {
            return new List<Bucket> { };
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BucketDto>> GetBucketById(Guid id)
        {
            var bucket = await this.bucketService.GetBucketAsync(id);
            return Mapper.Map<Bucket, BucketDto>(bucket);
        }

        [HttpPost("")]
        public async Task<ActionResult<Bucket>> CreateBucket(CreateBucketDto model)
        {
            var bucket = Mapper.Map<CreateBucketDto, Bucket>(model);
            var createdBucket = await this.bucketService.CreateBucketAsync(bucket);
            return CreatedAtAction(nameof(this.GetBucketById), new { id = createdBucket.BucketId }, null);
        }

        [HttpPost("{id}/secret")]
        public async Task<ActionResult<Bucket>> CreateBucketSecret(Guid id, [FromBody] CreateSecretDto model)
        {
            var secret = Mapper.Map<CreateSecretDto, Secret>(model);
            var createdBucket = await this.bucketService.AddSecretToBucketAsync(id, secret);
            return CreatedAtAction(nameof(this.GetBucketById), new { id }, null);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBucket(int id, Bucket model)
        {
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Bucket> DeleteBucketById(int id)
        {
            return null;
        }
    }
}