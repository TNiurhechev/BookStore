using BookStore.Models;

namespace BookStore.ViewModels
{
    public class AuthorViewModel
    {
        public List<Author> Authors { get; set; }
        public List<Book> Books { get; set; }

        public AuthorViewModel(List<Author> authors, List<Book> books)
        {
            Authors = authors;
            Books = books;
        }
    }
}
