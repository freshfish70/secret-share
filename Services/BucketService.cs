using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
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

        public async Task<Secret> AddSecretToBucketAsync(Guid bucketId, Secret secret)
        {
            var bucket = await this.Db.BucketRepository.GetByIDAsync(bucketId);
            bucket.Secrets.Add(secret);
            this.Db.BucketRepository.Update(bucket);
            await this.Db.SaveAsync();
            return secret;
        }

        public async Task DeleteBucketAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<Bucket> GetBucketAsync(Guid id)
        {
            var bucket = (await this.Db.BucketRepository.GetAsync(e => e.BucketId == id, null, "Secrets")).FirstOrDefault();
            return bucket;
        }

        public async Task<IEnumerable<Bucket>> GetBucketsAsync()
        {
            throw new NotImplementedException();
        }
    }
}