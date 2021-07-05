import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelf, changBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf[1]}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((a) => {
              return a.shelf === shelf[0];
            })
            .map((book) => (
              <Book
                book={book}
                key={book.id}
                changeBookShelf={changBookShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
