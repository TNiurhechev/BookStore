import React from 'react';

const AuthorList = ({ authors }) => {
    return (
        <div className="text-center">
            <h2 className="display-4">Authors</h2>
            {authors.map((author) => (
                <div key={author.name}>
                    <h2 className="display-6">{author.name}</h2>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Author</th>
                                <th>Year</th>
                                <th>Price</th>
                                <th>Order</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {author.books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.author}</td>
                                    <td>{book.year}</td>
                                    <td>{book.price}</td>
                                    <td>
                                        <a className="btn btn-success" href={`/Home/Order/${book.id}`}>Order</a>
                                    </td>
                                    <td>
                                        <a className="btn btn-warning" href={`/Home/Edit/${book.id}`}>Edit</a>
                                    </td>
                                    <td>
                                        <a className="btn btn-danger" href={`/Home/Delete/${book.id}`}>Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default AuthorList;
