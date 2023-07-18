import React from 'react';

const OrderForm = ({ book }) => {
    return (
        <div className="text-center">
            <form style={{ width: '30%', margin: 'auto' }}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" value={book.title} readOnly />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input className="form-control" type="text" value={book.genre} readOnly />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input className="form-control" type="text" value={book.author} readOnly />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input className="form-control" type="number" value={book.year} readOnly />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="number" min="0" value={book.price} readOnly />
                    <small className="text-muted">*in UAH</small>
                </div>
                <button type="submit" className="btn btn-outline-success btn-lg">Confirm order</button>
            </form>
        </div>
    );
};

export default OrderForm;
