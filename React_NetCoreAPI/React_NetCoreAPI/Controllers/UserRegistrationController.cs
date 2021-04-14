using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using React_NetCoreAPI.Context;
using React_NetCoreAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace React_NetCoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserRegistrationController : Controller
    {
        public readonly SqlDbContext context = new SqlDbContext();

        // GET: UserRegistrationController
        [HttpPost]
        public IActionResult GetSignupData(UserModel model)
        {
            try
            {
                if (model.EmailId != null && model.Password != null)
                {
                    model.HireDate = DateTime.Now;
                    context.Add(model);
                    context.SaveChanges();
                    return StatusCode(StatusCodes.Status201Created);
                }
                return StatusCode(StatusCodes.Status400BadRequest);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
        }

        [HttpGet]
        public IActionResult index()
        {
            List<UserModel> modelList;
            modelList = context.UserContext.ToList();

            return StatusCode(StatusCodes.Status200OK, modelList );
        }

        // GET: UserRegistrationController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: UserRegistrationController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UserRegistrationController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: UserRegistrationController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UserRegistrationController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: UserRegistrationController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
