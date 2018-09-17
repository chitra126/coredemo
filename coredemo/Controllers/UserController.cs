using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coredemo.Data;
using coredemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace coredemo.Controllers
{
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public UserController(UserManager<ApplicationUser> userManager,RoleManager<ApplicationRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<UserListVM> model = new List<UserListVM>();
            model = _userManager.Users.Select(q => new UserListVM
            {
                Id = q.Id,
                FirstName = q.FirstName,
                LastName = q.LastName,
                Age = q.Age
                //RoleName = q.
            }).ToList();

            return View(model);
        }

        [HttpGet]
        public IActionResult AddUser()
        {
            UserVM model = new UserVM();
            model.ApplicationRoles = _roleManager.Roles.Select(r => new SelectListItem
            {
                Text = r.Name,
                Value = r.Id
            }).ToList();

            return PartialView("_AddUser", model);            
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(UserVM model)
        {
            if(ModelState.IsValid)
            {
                ApplicationUser user = new ApplicationUser
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    UserName=model.Username
                };

                IdentityResult result = await _userManager.CreateAsync(user, model.Password);
                if(result.Succeeded)
                {
                    ApplicationRole applicationRole = await _roleManager.FindByIdAsync(model.ApplicationRoleId);
                    if(applicationRole!=null)
                    {
                        IdentityResult roleResult = await _userManager.AddToRoleAsync(user, applicationRole.Name);
                        if(roleResult.Succeeded)
                        {
                            return RedirectToAction("Index");
                        }
                    }
                }
            }
            return View(model);

            
        }
    }
}