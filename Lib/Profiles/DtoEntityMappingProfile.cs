using System;
using AutoMapper;
using SecretShare.Dtos.Request;
using SecretShare.Dtos.Response;
using SecretShare;
using SecretShare.Entities;
using System.Collections.Generic;

namespace SecretShare.Lib.Profiles
{
    public class DtoEntityMappingProfile : Profile
    {
        public DtoEntityMappingProfile()
        {
            CreateMap<Guid, Guid?>().ConvertUsing(guid => guid == Guid.Empty ? (Guid?)null : guid);
            CreateMap<Guid?, Guid>().ConvertUsing(guid => guid ?? Guid.Empty);
            CreateMap<CreateBucketDto, Bucket>();
            CreateMap<CreateSecretDto, Secret>();
            CreateMap<Bucket, BucketDto>();
            CreateMap<Secret, SecretDto>();
        }
    }
}