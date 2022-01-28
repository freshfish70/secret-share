using System;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SecretShare.Lib.Exceptions
{
    public abstract class ErrorCodeException : ProblemDetailsException
    {
        public string Description { get; init; }

        public ErrorCode ErrorCode { get; init; } = ErrorCode.DEFAULT;

        public ErrorCodeException(string description, int statusCode) : base(statusCode)
        {
            Description = description;
        }
        public ErrorCodeException(string description, ErrorCode errorCode, int statusCode) : base(statusCode)
        {
            Description = description;
            ErrorCode = errorCode;
        }

        public ErrorCodeException(string description, ErrorCode errorCode, ProblemDetails details) : base(details)
        {
            Description = description;
            ErrorCode = errorCode;
        }

        public ErrorCodeException(string description, ErrorCode errorCode, int statusCode, Exception innerException) : base(statusCode, innerException)
        {
            Description = description;
            ErrorCode = errorCode;
        }

        public ErrorCodeException(string description, ErrorCode errorCode, int statusCode, string title) : base(statusCode, title)
        {
            Description = description;
            ErrorCode = errorCode;
        }

        public ErrorCodeException(ProblemDetails details, Exception innerException) : base(details, innerException)
        {
        }

        public ErrorCodeException(int statusCode, string title, Exception innerException) : base(statusCode, title, innerException)
        {
        }

    }
}