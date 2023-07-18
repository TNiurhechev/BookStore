namespace BookStore.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Name missing";

        public Author(string name)
        {
            Name = name;
        }

        public Author(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
