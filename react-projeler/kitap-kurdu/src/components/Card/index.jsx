import React from "react";

const Card = ({ book, handleDelete }) => {
  console.log(book);

  return (
    <div
      className="d-flex justify-content-between
    p-4 border align-items-center shadow"
    >
      <div>
        <h3>{book.bookName}</h3>
        <p className="mt-3">Date:{book.date} </p>
      </div>

      <button onClick={() => handleDelete(book.id)} className="btn btn-danger">
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default Card;
