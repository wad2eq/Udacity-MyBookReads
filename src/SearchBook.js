import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import { search } from "./BooksAPI";
class SearchBook extends Component {
  state = {
    searchedBooks: [],
    value: "",
  };
  findBook(query) {

    if(query === ''){
      return;
    }
    search(query)
    .then(data=>{
       data.map(book =>{
         this.props.books.map((stateBoook) =>{
          if(book.id === stateBoook.id){
            book.shelf = stateBoook.shelf;
            return;
          }else if (book.shelf===undefined){
            book.shelf= 'none';
          }
        })
      })
    return data})
    .then(data=>{
      this.setState({
        searchedBooks: data
      })
    })
  }
  
  //Ask book for api
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(e) => this.findBook(e.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div>{this.state.value}</div>
        <div className="search-books-results">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Finded Books</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.state.searchedBooks.map((book) => (
                    <Book
                      book={book}
                      key={book.id}
                      changeBookShelf={this.props.changeBookShelf}
                    />
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook;
