using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coredemo.Data;
using coredemo.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace coredemo.Controllers
{
    [Route("api/Books")]
    [Authorize]
    public class BooksController : Controller
    {
        private readonly IBookRepository _bookRepository;

        public BooksController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            return Ok(await _bookRepository.GetAllBooksAsync());
        }

        public IActionResult Index()
        {
            return View();
        }


    }
}