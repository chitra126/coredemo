using AutoMapper;
using coredemo.Data;
using coredemo.Models.ApplicationClass;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coredemo.Repository
{
    public class BookRepository : IBookRepository
    {
        private readonly CoreDemoDBContext _context;
        private readonly IMapper _mapper; 
        
        public BookRepository(CoreDemoDBContext coreDemoDBContext, IMapper mapper)
        {
            _context = coreDemoDBContext;
            _mapper = mapper;
        }

        public async Task<List<BookAC>> GetAllBooksAsync()
        {
            List<Book> booklist = await _context.Books.ToListAsync();
            List<BookAC> list  = _mapper.Map<List<Book>,List<BookAC>>(booklist);
            return list;
        }
    }
}
