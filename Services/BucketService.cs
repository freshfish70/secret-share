using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using secretshare.Dtos.Request;
using SecretShare.DataAccess;
using SecretShare.Entities;

namespace secretshare.Services
{
    public class BucketService : IBucketService
    {
        private IDatabaseAccess Db { get; init; }
        public BucketService(IDatabaseAccess db)
        {
            this.Db = db;

        }
        public async Task<Bucket> CreateBucketAsync(Bucket bucket)
        {
            this.Db.BucketRepository.Insert(bucket);
            await this.Db.SaveAsync();
            return bucket;
        }

        public async Task DeleteBucketAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<Bucket> GetBucketAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Bucket>> GetBucketsAsync()
        {
            throw new NotImplementedException();
        }
    }
}