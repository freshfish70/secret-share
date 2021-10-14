namespace SecretShare.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    //using secret-share.Models;
    [Route("api/[controller]")]
    [ApiController]
    public class SecretController : ControllerBase
    {
        public SecretController()
        {
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Secret>>> GetSecrets()
        {
            // TODO: Your code here
            await Task.Yield();

            return new List<Secret> { };
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Secret>> GetSecretById(int id)
        {
            // TODO: Your code here
            await Task.Yield();

            return null;
        }

        [HttpPost("")]
        public async Task<ActionResult<Secret>> PostSecret(Secret model)
        {
            // TODO: Your code here
            await Task.Yield();

            return null;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSecret(int id, Secret model)
        {
            // TODO: Your code here
            await Task.Yield();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Secret>> DeleteSecretById(int id)
        {
            // TODO: Your code here
            await Task.Yield();

            return null;
        }
    }
}