import React from 'react';

const BookList = ({ books }) => {
    return (
        <div className="text-center">
            <h2 className="display-4">Books</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.genre}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>{book.price}</td>
                            <td>
                                <a className="btn btn-success" href={`/Home/Order/${book.id}`}>
                                    Order
                                </a>
                                <a className="btn btn-warning" href={`/Home/Edit/${book.id}`}>
                                    Edit
                                </a>
                                <a className="btn btn-danger" href={`/Home/Delete/${book.id}`}>
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="/Home/Add" className="btn btn-outline-success btn-lg">
                Add book
            </a>
        </div>
    );
};

export default BookList;
