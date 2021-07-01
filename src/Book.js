import React, {Component} from "react";
import "./Book.css";

class Book extends Component{

    optionChange=(e)=>{
        console.log(e.target.value);
    }
    render(){
        const{book,shelf, changeBookShelf} = this.props;
        return(
            <li>
            <div className="book fadeBook">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 192,
                    backgroundImage:`url(${book.imageLinks.thumbnail})`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select  
                    onChange={(e)=> changeBookShelf(book.id,e.target.value)}
                    value={shelf}>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">
                      Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.publisher}</div>
            </div>
          </li>
        )
    }
}

export default Book;