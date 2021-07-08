import React, {Component} from "react";
//Design
import "./Book.css";
import bookThumbnail from "./img/bookthum.jpg"
// /biography
class Book extends Component{
    // bookThumbnail=()=>{
    //     let thum=this.props.book.imageLinks;
    //     thum === undefined? {backgroundImage: `url(${book})`}
    //     {backgroundImage:`url(${thum.thumbnail})`}
    // }
    render(){
      const{book,changeBookShelf} = this.props;
        return(
            <li>
            <div className="book fadeBook">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={book.imageLinks === undefined ? ({backgroundImage: `url(${bookThumbnail})`})
                  :({backgroundImage:`url(${book.imageLinks.thumbnail})`})}
                ></div>
                <div className="book-shelf-changer">
                  <select  
                    onChange={(e)=> changeBookShelf(book,e.target.value)}
                    value={book.shelf}>
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
              <div className="book-category">{book.categories? book.categories.map((a, index)=><strong key={index}>{a}</strong>): 'No categories'}</div>
            </div>
          </li>
        )
    }
}

export default Book;