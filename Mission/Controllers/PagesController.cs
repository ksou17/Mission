using Microsoft.AspNetCore.Mvc;
using Mission.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calc(CalculatorModel model)
        {
            return View();
        }
    }
}
