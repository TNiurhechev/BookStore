using BookStore.Data;
using BookStore.Models;
using BookStore.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Numerics;

namespace BookStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ApplicationContext _context;

        public HomeController(ILogger<HomeController> logger, ApplicationContext context)
        {
            _logger = logger;
            _context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View(_context.Books.ToList());
        }
        [HttpGet]
        public IActionResult Authors()
        {
            return View(new AuthorViewModel(_context.Authors.ToList(), _context.Books.ToList()));
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Add(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return View("Index", _context.Books.ToList());
        }
        [HttpGet]
        public IActionResult Order(int id)
        {
            Book book = new Book();
            _context.Books.ToList().ForEach(
                b => { if (b.Id == id) book = b; }
                );
            return View(book);
        }
        [HttpPost]
        public IActionResult Order(Book book)
        {
            return View("Index", _context.Books.ToList());
        }
        [HttpGet]
        public IActionResult Edit(int id)
        {
            Book book = new Book();
            _context.Books.ToList().ForEach(
                b => { if (b.Id == id) book = b; }
                );
            return View(book);
        }
        [HttpPost]
        public IActionResult Edit(Book book)
        {
            _context.Update(book);
            _context.SaveChanges();
            return View("Index", _context.Books.ToList());
        }
        public IActionResult Delete(int id)
        {
            Book book = new Book();
            _context.Books.ToList().ForEach(
                b => { if (b.Id == id) book = b; }
                );
            _context.Books.Remove(book);
            _context.SaveChanges();
            return View("Index", _context.Books.ToList());
        }

        [HttpGet]
        public IActionResult Info()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}