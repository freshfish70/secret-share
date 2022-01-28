using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SecretShare.Entities;

namespace secretshare.Services
{
    public interface ISecretService
    {
        Task<Secret> GetSecretAsync(Guid id);
        Task<Secret> CreateSecretAsync(Secret bucket);
        Task<IEnumerable<Secret>> GetSecretsAsync();
        Task DeleteSecretAsync(Guid id);
    }
}