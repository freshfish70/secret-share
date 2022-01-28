using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using SecretShare.Dtos.Request;
using SecretShare.DataAccess;
using SecretShare.Entities;

namespace SecretShare.Services
{
    public class SecretService : ISecretService
    {
        private IDatabaseAccess Db { get; init; }
        public SecretService(IDatabaseAccess db)
        {
            this.Db = db;
        }

        public Task<Secret> GetSecretAsync(Guid id)
        {
            this.Db.SecretRepository.GetByIDAsync(id);
            throw new NotImplementedException();
        }

        public Task<Secret> CreateSecretAsync(Secret bucket)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Secret>> GetSecretsAsync()
        {
            throw new NotImplementedException();
        }

        public Task DeleteSecretAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}