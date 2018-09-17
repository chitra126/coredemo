using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coredemo.Data;
using coredemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace coredemo.Controllers
{
    public class ApplicationRoleController : Controller
    {
        private readonly RoleManager<ApplicationRole> _roleManager;

        public ApplicationRoleController(RoleManager<ApplicationRole> roleManager)
        {
            this._roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<ApplicationRoleListVM> model = new List<ApplicationRoleListVM>();
            model = _roleManager.Roles.Select(r => new ApplicationRoleListVM
            {
                RoleName = r.Name,
                Id = r.Id,
                Description = r.Description,
                NumberOfUsers = 1
            }).ToList();

            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> AddEditApplicationRole(string Id)
        {
            ApplicationRoleVM model = new ApplicationRoleVM();
            if(!String.IsNullOrEmpty(Id))
            {
                ApplicationRole applicationRole = await _roleManager.FindByIdAsync(Id);
                if (applicationRole != null)
                {
                    model.Id = applicationRole.Id;
                    model.RoleName = applicationRole.Name;
                    model.Description = applicationRole.Description;
                }
            }
            return PartialView("_AddEditApplicationRole", model);

        }

        [HttpPost]
        public async Task<IActionResult> AddEditApplicationRole(string Id,ApplicationRoleVM model)
        {
            if(ModelState.IsValid)
            {
                bool isExist = !String.IsNullOrEmpty(Id);
                ApplicationRole applicationRole = isExist ? await _roleManager.FindByIdAsync(Id) :
                    new ApplicationRole
                    {
                        CreatedDate = DateTime.Now
                    };
                applicationRole.Name = model.RoleName;
                applicationRole.Description = model.Description;
                applicationRole.IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString();
                IdentityResult roleResult = isExist ? await _roleManager.UpdateAsync(applicationRole)
                    : await _roleManager.CreateAsync(applicationRole);
                
                if(roleResult.Succeeded)
                {
                    return RedirectToAction("Index");
                }

            }
            return View(model);
        }
    }
}