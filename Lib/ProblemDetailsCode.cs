using Microsoft.AspNetCore.Mvc;

namespace SecretShare.Lib
{
    public class ProblemDetailsCode : ProblemDetails
    {
        public ErrorCode ErrorCode { get; set; }
    }
}