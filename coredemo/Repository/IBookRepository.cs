using coredemo.Models.ApplicationClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coredemo.Repository
{
    public interface IBookRepository
    {
        /// <summary>
        /// To get all book list
        /// </summary>
        /// <returns></returns>
        Task<List<BookAC>> GetAllBooksAsync(); 
    }
}
