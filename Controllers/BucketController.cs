using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SecretShare.Entities;
//using secret-share.Models;

namespace SecretShare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BucketController : ControllerBase
    {
        public BucketController()
        {
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<Bucket>> GetBuckets()
        {
            return new List<Bucket> { };
        }

        [HttpGet("{id}")]
        public ActionResult<Bucket> GetBucketById(int id)
        {
            return null;
        }

        [HttpPost("")]
        public ActionResult<Bucket> PostBucket(Bucket model)
        {
            return null;
        }

        [HttpPut("{id}")]
        public IActionResult PutBucket(int id, Bucket model)
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