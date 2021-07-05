import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Route, Link } from 'react-router-dom';
import SearchBook from "./SearchBook";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf";
import Book from './Book';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    shelf: [ ["currentlyReading", "Currently Reading"],["wantToRead", "Want To Read"], ["read", "Read"]] ,
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data,
      });
    });
  }
  /**
   * Updating books state
   * @param {string} bookId The book objet ID
   * @param {string} newShelf The new shelf for book
   */
  changBookShelf=(newBook,newShelf)=>{
    const{books} = this.state;
    //Maping hole local state :)
    const el = books.map((book)=>{
      return book.id === newBook.id? {...book, shelf:newShelf}: book
    })
    this.setState({
      books: el
    })
  }
  render() {
    const{books, shelf} = this.state;
    return (
      <div className="app">
          <Route
            path='/search'
            render={()=> (<SearchBook changeBookShelf={this.updateBookStateApi} books={books} />)}
            />
          <Route
            exact
            path='/' 
            render={()=>(<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books={books} shelf={shelf[0]} changBookShelf={this.changBookShelf}/> 
                <Shelf books={books} shelf={shelf[1]} changBookShelf={this.changBookShelf}/>  
                <Shelf books={books} shelf={shelf[2]} changBookShelf={this.changBookShelf}/>          
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>)}
          />
      </div>
    );
  }
}

export default BooksApp;
