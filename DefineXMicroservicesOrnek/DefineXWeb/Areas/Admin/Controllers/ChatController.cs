using Microsoft.AspNetCore.Mvc;

namespace DefineXWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ChatController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
