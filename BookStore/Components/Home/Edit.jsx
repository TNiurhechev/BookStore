import React, { useState } from 'react';

const EditBookForm = ({ book }) => {
    const [title, setTitle] = useState(book.title);
    const [genre, setGenre] = useState(book.genre);
    const [author, setAuthor] = useState(book.author);
    const [year, setYear] = useState(book.year);
    const [price, setPrice] = useState(book.price);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log({ title, genre, author, year, price });
    };

    return (
        <div className="text-center">
            <form onSubmit={handleFormSubmit} style={{ width: '30%', margin: 'auto' }}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        className="form-control"
                        type="text"
                        name="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input
                        className="form-control"
                        type="number"
                        name="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        className="form-control"
                        type="number"
                        name="price"
                        min="0"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <small className="text-muted">*in UAH</small>
                </div>
                <button type="submit" className="btn btn-outline-success btn-lg">Edit</button>
            </form>
        </div>
    );
};

export default EditBookForm;
