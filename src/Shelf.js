import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelf, changBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((a) => {
              return a.shelf === shelf;
            })
            .map((book) => (
              <Book
                book={book}
                shelf={shelf}
                key={book.id}
                hangeBookShelf={changBookShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
