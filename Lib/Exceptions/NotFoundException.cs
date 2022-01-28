using System;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using secretshare.Lib;

namespace SecretShare.Lib.Exceptions
{
    public class NotFoundException : ErrorCodeException
    {

        public NotFoundException(string description, string title = "Entity not found") : base(description, ErrorCode.DEFAULT, StatusCodes.Status404NotFound, title)
        {
        }
        public NotFoundException(string description, ErrorCode errorCode) : base(description, errorCode, StatusCodes.Status404NotFound)
        {
        }

        public NotFoundException(string description, ErrorCode errorCode, ProblemDetails details) : base(description, errorCode, details)
        {
        }

        public NotFoundException(string description, ErrorCode errorCode, Exception innerException) : base(description, errorCode, StatusCodes.Status404NotFound, innerException)
        {
        }

        public NotFoundException(ProblemDetails details, Exception innerException) : base(details, innerException)
        {
        }

        public NotFoundException(int statusCode, string title, Exception innerException) : base(statusCode, title, innerException)
        {
        }
    }
}