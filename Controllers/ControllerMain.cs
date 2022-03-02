using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecretShare.Lib;

namespace SecretShare.Controllers
{
    public class ControllerMain : ControllerBase
    {

        public ActionResult NotFound(string description, string title = "Entity not found", ErrorCode code = ErrorCode.DEFAULT)
        {
            return NotFound(
                new ProblemDetailsCode()
                {
                    Title = title,
                    ErrorCode = code,
                    Detail = description,
                    Status = StatusCodes.Status404NotFound,
                    Instance = this.HttpContext.Request.Path
                }
            );

        }

    }
}
