using AutoMapper;
using coredemo.Data;
using coredemo.Models.ApplicationClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coredemo.AutoMapper
{
    public class AutoMapperProfileConfiguration
    {
        public class OrganizationProfile : Profile
        {
            public OrganizationProfile()
            {
                CreateMap<BookAC, Book>().ReverseMap();
            }
        }

    }
}
