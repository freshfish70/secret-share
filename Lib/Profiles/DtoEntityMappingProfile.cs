using System;
using AutoMapper;
using secretshare.Dtos.Request;
using SecretShare.Entities;

namespace secretshare.Lib.Profiles
{
    public class DtoEntityMappingProfile : Profile
    {
        public DtoEntityMappingProfile()
        {
            CreateMap<Guid, Guid?>().ConvertUsing(guid => guid == Guid.Empty ? (Guid?)null : guid);
            CreateMap<Guid?, Guid>().ConvertUsing(guid => !guid.HasValue ? Guid.Empty : guid.Value);
            CreateMap<CreateBucketDto, Bucket>();
        }
    }
}