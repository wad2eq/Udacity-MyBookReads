import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import { search } from "./BooksAPI";
//Design
import keny from "./img/keny.gif";
class SearchBook extends Component {
  state = {
    searchedBooks: [],
    message: "Find some books and take your best place to read :)",
    query:''
  };
  findBook(query) {
    this.setState({
      query
    })
    if (query === "") {
      this.setState({
        searchedBooks: [],
        message: "Find some books and take your best place to read :)",
      });
      return;
    }
    search(query)
      .then((response) => {
        if (response.error) {
          this.setState({
            message: "Better try again, the time is running ..... :(",
          });
          return [];
        } else {
          this.setState({ message: "Select book to your shelf" });
          return response;
        }
      })
      .then((data) => {
        data.map((book) => {
          this.props.books.map((stateBoook) => {
            if (book.id === stateBoook.id) {
              book.shelf = stateBoook.shelf;
              return;
            } else if (book.shelf === undefined) {
              book.shelf = "none";
            }
          });
        });
        return data;
      })
      .then((data) => {
        if(this.state.query !==''){
          this.setState({
            searchedBooks: data,
          });
        }else{
          this.setState({
            searchedBooks: [],
          });
        }
      });
  }

  //Ask book for api
  render() {
    const { searchedBooks, message } = this.state;
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
              value={this.state.query}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf">
          <h2 className="bookshelf-title">{message}</h2>
            <div className="bookshelf-books">
              {searchedBooks.length === 0? (
                <div className="bookshelf-books">
                  <img
                    src={keny}
                    alt="Best place when you need read something"
                  />
                </div>
              ) : (
                <ol className="books-grid">
                  {searchedBooks.map((book) => (
                    <Book
                      book={book}
                      key={book.id}
                      changeBookShelf={this.props.changeBookShelf}
                    />
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook;
