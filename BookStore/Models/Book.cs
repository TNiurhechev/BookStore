namespace BookStore.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }
        public int Price { get; set; }
        public Book() { }

        public Book(string title, string genre, string author, int year, int price)
        {
            Title = title;
            Genre = genre;
            Author = author;
            Year = year;
            Price = price;
        }
        public Book(int id, string title, string genre, string author, int year, int price)
        {
            Id = id;
            Title = title;
            Genre = genre;
            Author = author;
            Year = year;
            Price = price;
        }
    }
}
