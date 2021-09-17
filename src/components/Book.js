import React from 'react'

function Book(props) {
    const url = props.book.imageLinks !== undefined ? props.book.imageLinks.smallThumbnail: "https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg"
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(e)=>props.onSheilfChange(e, props.book)}>
              <option value="move" disabled>Move to...</option>
              <option defaultValue='' style={{display: "none"}}></option>
              <option value="currentlyReading" disabled={props.shelf==="currentlyReading"}>Currently Reading</option>
              <option value="wantToRead" disabled={props.shelf==="wantToRead"}>Want to Read</option>
              <option value="read" disabled={props.shelf==="read"}>Read</option>
              <option value="none" disabled={props.shelf==="none"}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors ? props.book.authors.map(author=>author+'  '):"unkown"}</div>
      </div>
    )
}

export default Book;